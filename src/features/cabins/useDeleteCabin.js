import { deleteCabin as deleteCabinApi } from '@/services/apiCabins'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useDeleteCabin() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.dismiss('delete-cabin')
      toast.success('Cabin successfully deleted')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: err => {
      toast.dismiss('delete-cabin')
      toast.error(err?.timeout ? 'Network timeout - Please check your connection' : err.message)
    },
    retry: (failureCount, error) => {
      // Only retry twice and not if we got a timeout error
      return failureCount < 2 && !error.timeout
    },
    retryDelay: 150,
    onMutate: () => {
      // Show pending toast when mutation starts
      if (!navigator.onLine) {
        toast.error('You are offline. Please check your internet connection')
        return
      }
      toast.loading('Deleting cabin...', { id: 'delete-cabin' })
    }
  })

  return {
    isDeleting,
    deleteCabin
  }
}
