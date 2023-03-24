export const stickToDateTime = (str: number | string | Date, format = 'dateTime'): string => {
  const date = new Date(str)
  let dateStr = ''
  const year = date.getFullYear()
  let month: string | number = date.getMonth() + 1
  let day: string | number = date.getDate()
  let hour: string | number = date.getHours()
  let minute: string | number = date.getMinutes()
  let second: string | number = date.getSeconds()
  if (new Date(date).toString() === 'Invalid Date' || !str) {
    return ''
  }
  month < 10 && (month = '0' + month)
  day < 10 && (day = '0' + day)
  hour < 10 && (hour = '0' + hour)
  minute < 10 && (minute = '0' + minute)
  second < 10 && (second = '0' + second)
  switch (format) {
    case 'dateTime':
      dateStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`
      break
    default:
      dateStr = `${year}-${month}-${day}`
  }
  return dateStr
}
