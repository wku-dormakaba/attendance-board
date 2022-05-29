const Redis = require('ioredis');
const client = new Redis(process.env.REDIS);
const getTTL = require('../util/getTTL')

//ioredis.get return string
const getPresence = async id => (await client.get(id))

const setPresence = (id, present) => {
  const ttl = getTTL()  //to expire at start of next day
  client.set(id, present, 'ex', ttl)
}

const getList = async list => (await client.mget(list))

module.exports = {
  getPresence,
  setPresence,
  getList
}