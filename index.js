function formatTime(time, format = "YYYY-MM-DD") {
  const isDate = time instanceof Date
  const date = isDate ? time : new Date(time)
  if(isNaN(date.valueOf())) {
    console.log('时间格式错误---');
    return '--'
  }

  const addZero = value => value < 10 ? `0${value}` : value

  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()

  let dateStr = `${y}-${addZero(m)}-${addZero(d)}`

  if(format.includes('HH')) {
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    dateStr += ` ${addZero(h)}:${addZero(m)}:${addZero(s)}`
  }

  return dateStr
}

export {
  formatTime
}
