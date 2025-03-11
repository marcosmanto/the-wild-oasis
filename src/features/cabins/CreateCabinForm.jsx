import Input from '@/ui/Input'
import Form from '@/ui/Form'
import Button from '@/ui/Button'
import FileInput from '@/ui/FileInput'
import Textarea from '@/ui/Textarea'
import FormRow from '@/ui/FormRow'
import Row from '@/ui/Row'
import Spacer from '@/ui/Spacer'

import { useForm } from 'react-hook-form'
import { useCreateCabin } from '@/features/cabins/useCreateCabin'
import { useEditCabin } from '@/features/cabins/useEditCabin'

function CreateCabinForm({ cabinToEdit = {}, onCloseModal, onCloseForm }) {
  const { createCabin, isCreating } = useCreateCabin()
  const { editCabin, isEditing } = useEditCabin()
  const isWorking = isCreating || isEditing

  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState
  } = useForm({
    defaultValues: isEditSession ? editValues : {}
  })
  const { errors } = formState

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image === null ? '' : data.image[0]

    // prettier-ignore
    if (isEditSession)
      editCabin({ newCabinData: { ...data, image }, id: editId }, {
        onSuccess: (data) => {
          resetForm()
          onCloseForm?.()
        }
      })
    else
      createCabin({ ...data, image }, {
        onSuccess: (data) => onCloseModal?.()
      })
  }

  function onError(errors) {
    console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? 'modal' : 'regular'}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input disabled={isWorking} type="text" id="name" {...register('name', { required: 'This field is required' })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          min={1}
          max={32767}
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity must be at least 1' }
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          min={0}
          max={32767}
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 1, message: 'Price must be at least 1' }
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          min={0}
          max={32767}
          defaultValue={0}
          disabled={isWorking}
          {...register('discount', {
            required: 'This field is required',
            validate: (value, formValues) => Number(value) <= Number(formValues.regularPrice) || 'Discount must be less than regular price'
          })}
        />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea id="description" defaultValue="" disabled={isWorking} {...register('description', { required: 'This field is required' })} />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" disabled={isWorking} {...register('image', { required: isEditSession ? false : 'An image is required' })} />
      </FormRow>

      <Spacer />
      <Row type="horizontal" horizontalalign="center">
        <Button
          disabled={isWorking}
          variation="secondary"
          type="reset"
          onClick={() => {
            onCloseForm?.()
            onCloseModal?.()
          }}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Create cabin'}</Button>
      </Row>
    </Form>
  )
}

export default CreateCabinForm
