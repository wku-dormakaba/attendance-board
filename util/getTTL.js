const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

const getTTL = (datetime, timezone = 'Asia/Singapore') => {
  const now = dayjs(datetime).tz(timezone)
  return now.endOf('d').diff(now, 's')
}

module.exports = getTTL