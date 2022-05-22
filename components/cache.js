const NodeCache = require("node-cache");
const myCache = new NodeCache();

const markPresence = (id, present) => {
  myCache.set(id, present)
}

const getPresence = id => myCache.get(id)

module.exports = {
  markPresence,
  getPresence
}