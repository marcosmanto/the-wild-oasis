import Input from '@/ui/Input'
import Form from '@/ui/Form'
import Button from '@/ui/Button'
import FileInput from '@/ui/FileInput'
import Textarea from '@/ui/Textarea'
import FormRow from '@/ui/FormRow'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCabin } from '@/services/apiCabins'
import toast from 'react-hot-toast'
import Row from '@/ui/Row'
import Spacer from '@/ui/Spacer'

function CreateCabinForm() {
  const { register, handleSubmit, reset: resetForm, formState } = useForm()
  const { errors } = formState

  const queryClient = useQueryClient()

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('Cabin created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      resetForm()
    },
    onError: err => toast.error(err.message)
  })

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] })
  }

  function onError(errors) {
    //console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input disabled={isCreating} type="text" id="name" {...register('name', { required: 'This field is required' })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          min={1}
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          {...register('discount', {
            required: 'This field is required',
            validate: (value, formValues) => Number(value) <= Number(formValues.regularPrice) || 'Discount must be less than regular price'
          })}
        />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea id="description" defaultValue="" disabled={isCreating} {...register('description', { required: 'This field is required' })} />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput id="image" accept="image/*" disabled={isCreating} {...register('image', { required: 'This field is required' })} />
      </FormRow>

      <Spacer />
      <Row type="horizontal" horizontalalign="center">
        <Button disabled={isCreating} variation="secondary" type="reset" onClick={() => resetForm()}>
          Cancel
        </Button>
        <Button>Edit cabin</Button>
      </Row>
    </Form>
  )
}

export default CreateCabinForm
