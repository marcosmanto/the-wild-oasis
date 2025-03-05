import { updateSetting } from '@/services/apiSettings'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useEditSettings() {
  const queryClient = useQueryClient()

  const { mutate: editSettings, isLoading: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success('Settings successfully edited')
      queryClient.invalidateQueries({ queryKey: ['settings'] })
    },
    onError: err => toast.error(err.message)
  })
  return { editSettings, isEditing }
}
