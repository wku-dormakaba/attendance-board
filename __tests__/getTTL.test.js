const getTTL = require('../util/getTTL')

describe('getTTL', () => {
  test('return a number between 0 and the total number of seconds in a day', () => {
    const ttl = getTTL()
    expect(typeof ttl).toBe('number')
    expect(ttl).toBeGreaterThanOrEqual(0)
    expect(ttl).toBeLessThan(24 * 60 * 60)
  })
})