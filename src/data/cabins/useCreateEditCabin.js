import { createEditCabin } from '@/services/apiCabins'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useCreateEditCabin() {
  const queryClient = useQueryClient()

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('Cabin created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: err => toast.error(err.message)
  })

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: err => toast.error(err.message)
  })

  return {
    createCabin,
    isCreating,
    editCabin,
    isEditing
  }
}
