const os = require('os')

const isMemoryAvailable = () => {
  const freeMemory = os.freemem()
  return freeMemory > 0
}

module.exports = {
  isMemoryAvailable,
}