const NodeCache = require("node-cache");
const myCache = new NodeCache();

const getPresence = id => Boolean(myCache.get(id))

const setPresence = (id, present) => {
  myCache.set(id, present)
}

module.exports = {
  getPresence,
  setPresence
}