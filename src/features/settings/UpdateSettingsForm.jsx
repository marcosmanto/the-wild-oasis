import { useSettings } from '@/features/settings/useSettings'
import Form from '@/ui/Form'
import FormRow from '@/ui/FormRow'
import Input from '@/ui/Input'
import Spinner from '@/ui/Spinner'
import { useForm } from 'react-hook-form'
import { useEffect, useRef } from 'react'
import Row from '@/ui/Row'
import Button from '@/ui/Button'
import Spacer from '@/ui/Spacer'
import { useEditSettings } from '@/features/settings/useEditSettings'

function UpdateSettingsForm() {
  const { settings, isLoading } = useSettings()
  const { editSettings, isEditing } = useEditSettings()
  const { register, handleSubmit, formState, reset } = useForm()
  const nextFocusRef = useRef(null)
  const isShiftTabRef = useRef(false)
  const lastUpdateTimeRef = useRef(0)

  // Only reset form with initial settings
  useEffect(() => {
    if (settings && !formState.isDirty) {
      reset(settings)
    }
  }, [settings, reset, formState.isDirty])

  // Track shift key state
  useEffect(() => {
    const handleKeyDown = e => {
      isShiftTabRef.current = e.shiftKey
    }
    const handleKeyUp = e => {
      isShiftTabRef.current = e.shiftKey
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const { errors } = formState

  function onSubmit(data) {
    editSettings(data, {
      onSuccess: data => {
        //reset(data)
      }
    })
  }

  function handleUpdate(e, field) {
    const { value, form } = e.target
    if (!value || value == settings[field]) return

    // Check if focus is moving to the Update Settings button
    const relatedTarget = e.relatedTarget
    if (relatedTarget?.tagName === 'BUTTON' && relatedTarget.form === form && relatedTarget.type === 'submit') {
      return
    }

    // Debounce rapid updates
    const now = Date.now()
    if (now - lastUpdateTimeRef.current < 200) {
      return
    }
    lastUpdateTimeRef.current = now

    // Get all focusable form elements
    const inputs = Array.from(form.elements).filter(el => !el.disabled && ['INPUT', 'TEXTAREA'].includes(el.tagName))

    const currentIndex = inputs.indexOf(e.target)

    // Determine next focus element based on navigation direction
    if (isShiftTabRef.current) {
      nextFocusRef.current = inputs[currentIndex - 1] || inputs[inputs.length - 1]
    } else {
      nextFocusRef.current = inputs[currentIndex + 1] || inputs[0]
    }

    // Store the intended focus target before the mutation
    const intendedFocusTarget = nextFocusRef.current

    editSettings(
      { [field]: value },
      {
        onSuccess: () => {
          requestAnimationFrame(() => {
            if (document.activeElement !== intendedFocusTarget) {
              intendedFocusTarget?.focus()
            }
          })
        }
      }
    )
  }

  function onError(errors) {
    console.log(errors)
  }

  if (isLoading) return <Spinner />

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Minimum nights/booking" error={errors?.minBookingLength?.message}>
        <Input disabled={isLoading || isEditing} type="number" id="min-nights" {...register('minBookingLength', { required: 'This field is required' })} onBlur={e => handleUpdate(e, 'minBookingLength')} />
      </FormRow>
      <FormRow label="Maximum nights/booking" error={errors?.maxBookingLength?.message}>
        <Input disabled={isLoading || isEditing} type="number" id="max-nights" {...register('maxBookingLength', { required: 'This field is required' })} onBlur={e => handleUpdate(e, 'maxBookingLength')} />
      </FormRow>
      <FormRow label="Maximum guests/booking" error={errors?.maxGuestsPerBooking?.message}>
        <Input disabled={isLoading || isEditing} type="number" id="max-guests" {...register('maxGuestsPerBooking', { required: 'This field is required' })} onBlur={e => handleUpdate(e, 'maxGuestsPerBooking')} />
      </FormRow>
      <FormRow label="Breakfast price" error={errors?.breakfastPrice?.message}>
        <Input disabled={isLoading || isEditing} type="number" id="breakfast-price" {...register('breakfastPrice', { required: 'This field is required' })} onBlur={e => handleUpdate(e, 'breakfastPrice')} />
      </FormRow>
      <Spacer />
      <Row type="horizontal" horizontalalign="center">
        <Button disabled={isLoading || isEditing} variation="secondary" type="reset" onClick={() => reset({ ...settings })}>
          Cancel
        </Button>
        <Button disabled={isLoading || isEditing} type="submit">
          Update Settings
        </Button>
      </Row>
    </Form>
  )
}

export default UpdateSettingsForm
