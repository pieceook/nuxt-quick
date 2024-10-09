import { dayjs } from 'element-plus'

export const formatDate = (d: string | Date, f: string = 'MMM D, YYYY') => {
  return dayjs(d).format(f)
}
