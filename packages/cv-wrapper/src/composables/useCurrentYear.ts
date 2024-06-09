import { useDateFormat, useNow } from '@vueuse/core'

export const useCurrentYear = () => {
  return useDateFormat(useNow(), 'YYYY')
}
