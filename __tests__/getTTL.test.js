const getTTL = require('../util/getTTL')

describe('getTTL', () => {
  test('return a number between 0 and the total number of seconds in a day', () => {
    const ttl = getTTL()
    expect(typeof ttl).toBe('number')
    expect(ttl).toBeGreaterThanOrEqual(0)
    expect(ttl).toBeLessThan(24 * 60 * 60)
  })

  test('return correct TTL in default timezone', () => {
    const ttl = getTTL('2022-05-29 08:08')
    expect(ttl).toBe(57119)
  })

  test('return correct TTL for different timezones', () => {
    expect(getTTL('2022-05-29 08:08', 'Asia/Singapore')).toBe(57119)
    expect(getTTL('2022-05-29 08:08', 'America/New_York')).toBe(13919)
  })
})