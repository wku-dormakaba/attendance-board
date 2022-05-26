const dayjs = require('dayjs')

const getTTL = () => {
  const now = dayjs()
  return now.endOf('d').diff(now, 's')
}

module.exports = getTTL