import { useSettings } from '@/features/settings/useSettings'
import Form from '@/ui/Form'
import FormRow from '@/ui/FormRow'
import Input from '@/ui/Input'
import Spinner from '@/ui/Spinner'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import Row from '@/ui/Row'
import Button from '@/ui/Button'
import Spacer from '@/ui/Spacer'
import { useEditSettings } from '@/features/settings/useEditSettings'

function UpdateSettingsForm() {
  const { settings, isLoading } = useSettings()
  const { editSettings, isEditing } = useEditSettings()

  const { register, handleSubmit, formState, reset } = useForm()

  useEffect(() => {
    if (settings) {
      reset(settings)
    }
  }, [settings, reset])

  const { errors } = formState

  function onSubmit(data) {
    editSettings(data, {
      onSuccess: data => {
        //reset(data)
      }
    })
  }

  function onError(errors) {
    console.log(errors)
  }

  if (isLoading) return <Spinner />

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Minimum nights/booking" error={errors?.minBookingLength?.message}>
        <Input disabled={isLoading} type="number" id="min-nights" {...register('minBookingLength', { required: 'This field is required' })} />
      </FormRow>
      <FormRow label="Maximum nights/booking" error={errors?.maxBookingLength?.message}>
        <Input disabled={isLoading} type="number" id="max-nights" {...register('maxBookingLength', { required: 'This field is required' })} />
      </FormRow>
      <FormRow label="Maximum guests/booking" error={errors?.maxGuestsPerBooking?.message}>
        <Input disabled={isLoading} type="number" id="max-guests" {...register('maxGuestsPerBooking', { required: 'This field is required' })} />
      </FormRow>
      <FormRow label="Breakfast price" error={errors?.breakfastPrice?.message}>
        <Input disabled={isLoading} type="number" id="breakfast-price" {...register('breakfastPrice', { required: 'This field is required' })} />
      </FormRow>
      <Spacer />
      <Row type="horizontal" horizontalalign="center">
        <Button disabled={isLoading} variation="secondary" type="reset" onClick={() => reset()}>
          Cancel
        </Button>
        <Button disabled={isLoading}>Update Settings</Button>
      </Row>
    </Form>
  )
}

export default UpdateSettingsForm
