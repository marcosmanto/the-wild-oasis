import { createEditCabin } from '@/services/apiCabins'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useCreateCabin() {
  const queryClient = useQueryClient()

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.dismiss('create-cabin')
      toast.success('Cabin created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: err => {
      toast.dismiss('create-cabin')
      toast.error(err.message)
    },
    retry: (failureCount, error) => {
      // Only retry twice and not if we got a timeout error
      return failureCount < 2
    },
    retryDelay: 150,
    onMutate: () => {
      // Show pending toast when mutation starts
      if (!navigator.onLine) {
        toast.error('You are offline. Please check your internet connection')
        return
      }
      toast.loading('Creating cabin...', { id: 'create-cabin' })
    }
  })

  return {
    createCabin,
    isCreating
  }
}
