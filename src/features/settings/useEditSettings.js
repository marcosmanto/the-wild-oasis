import { updateSetting } from '@/services/apiSettings'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const settingLabels = {
  minBookingLength: 'Minimum nights per booking',
  maxBookingLength: 'Maximum nights per booking',
  maxGuestsPerBooking: 'Maximum guests per booking',
  breakfastPrice: 'Breakfast price'
}

export function useEditSettings() {
  const queryClient = useQueryClient()

  const { mutate: editSettings, isLoading: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: (data, variables) => {
      toast.dismiss('update-setting')

      // If only one field was updated, it means it came from onBlur
      const fieldName = Object.keys(variables)[0]
      const isFieldUpdate = Object.keys(variables).length === 1

      if (isFieldUpdate && settingLabels[fieldName]) {
        toast.success(`${settingLabels[fieldName]} has been updated`)
      } else {
        toast.success('Settings successfully edited')
      }

      queryClient.invalidateQueries({ queryKey: ['settings'] })
    },
    onError: err => {
      toast.dismiss('update-setting')
      toast.error(err.message)
    },
    retryDelay: 150,
    onMutate: () => {
      // Show pending toast when mutation starts
      if (!navigator.onLine) {
        toast.error('You are offline. Please check your internet connection')
        return
      }
      toast.loading('Updating setting...', { id: 'update-setting' })
    }
  })
  return { editSettings, isEditing }
}
