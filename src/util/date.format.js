const date = () => {
  const complete = (num) => num < 10 ? `0${num}` : num

  const date = new Date()
  const yy = date.getFullYear()
  const MM = complete(date.getMonth() + 1)
  const dd = complete(date.getDate())

  return `${yy}-${MM}-${dd}`
}

module.exports = date
