import { getTimesArray } from './getTimesArray'

describe('getTimesArray', () => {
  test('function returns array with times every 30 minutes', () => {
    const thirtyMinutesArray = getTimesArray(30)
    expect(thirtyMinutesArray.length).toBe(48)
    expect(thirtyMinutesArray[0]).toBe('00:00')
    expect(thirtyMinutesArray[1]).toBe('00:30')
    expect(thirtyMinutesArray[23]).toBe('11:30')
    expect(thirtyMinutesArray[47]).toBe('23:30')
  })

  test('function returns array with times every 5 minutes', () => {
    const fineMinutesArray = getTimesArray(5)
    expect(fineMinutesArray.length).toBe(288)
    expect(fineMinutesArray[0]).toBe('00:00')
    expect(fineMinutesArray[1]).toBe('00:05')
    expect(fineMinutesArray[2]).toBe('00:10')
    expect(fineMinutesArray[287]).toBe('23:55')
  })

  test('function returns array with times every 1 minutes', () => {
    const oneMinutesArray = getTimesArray(1)
    expect(oneMinutesArray.length).toBe(1440)
    expect(oneMinutesArray[0]).toBe('00:00')
    expect(oneMinutesArray[1]).toBe('00:01')
    expect(oneMinutesArray[2]).toBe('00:02')
    expect(oneMinutesArray[1439]).toBe('23:59')
  })

  test('function returns array with times every 11 minutes', () => {
    const elevenMinutesArray = getTimesArray(11)
    expect(elevenMinutesArray.length).toBe(131)
    expect(elevenMinutesArray[0]).toBe('00:00')
    expect(elevenMinutesArray[1]).toBe('00:11')
    expect(elevenMinutesArray[2]).toBe('00:22')
    expect(elevenMinutesArray[130]).toBe('23:50')
  })
})
