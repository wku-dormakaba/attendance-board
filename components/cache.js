const Redis = require('ioredis');
const client = new Redis(process.env.REDIS);

//ioredis.get return string
const getPresence = async id => (await client.get(id) === 'true')

const setPresence = (id, present) => {
  client.set(id, present)
}

module.exports = {
  getPresence,
  setPresence
}