import { format } from 'date-fns';

export const dateToString = (date: number | Date) => {
  if (!date) {return null;}
  return format(date, 'yyyy年M月d日 hh時mm分')
}
