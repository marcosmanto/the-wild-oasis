import Input from '@/ui/Input'
import Form from '@/ui/Form'
import Button from '@/ui/Button'
import FileInput from '@/ui/FileInput'
import Textarea from '@/ui/Textarea'
import FormRow from '@/ui/FormRow'
import Row from '@/ui/Row'
import Spacer from '@/ui/Spacer'

import { useForm } from 'react-hook-form'
import { useCreateEditCabin } from '@/data/cabins/useCreateEditCabin'

function CreateCabinForm({ cabinToEdit = {}, onCloseForm }) {
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

  const { createCabin, isCreating, editCabin, isEditing } = useCreateEditCabin({
    onSuccess: function () {
      onCloseForm?.()
      resetForm()
    }
  })

  const isWorking = isCreating || isEditing

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image === null ? '' : data.image[0]

    // prettier-ignore
    if (isEditSession)
      editCabin({ newCabinData: { ...data, image }, id: editId })
    else
      createCabin({ ...data, image })
  }

  function onError(errors) {
    // console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input disabled={isWorking} type="text" id="name" {...register('name', { required: 'This field is required' })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          min={1}
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
        <Button disabled={isWorking} variation="secondary" type="reset" onClick={() => resetForm()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Create cabin'}</Button>
      </Row>
    </Form>
  )
}

export default CreateCabinForm
