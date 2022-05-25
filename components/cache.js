const Redis = require('ioredis');
const client = new Redis(process.env.REDIS);
const dayjs = require('dayjs')

//ioredis.get return string
const getPresence = async id => (await client.get(id) === 'true')

const setPresence = (id, present) => {
  const now = dayjs()
  // const ttl = now.diff(now.add(2, 'd').endOf('d'), 's')
  // client.set(id, present, 'ex', ttl)
  client.set(id, present)
}

module.exports = {
  getPresence,
  setPresence
}