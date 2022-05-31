/**
 * @function getTimesArray
 * @param minutesGap number, any decimal will be rounded to the neare bigger integer
 * @returns an Array of the available times times
 */

export const getTimesArray = (minutesGap: number) => {
  minutesGap = Math.ceil(minutesGap)
  const hoursInDay = 60 * 24
  const length = Math.ceil(hoursInDay / minutesGap)

  return new Array(length).fill('').map((e, i) => {
    const minutes = i * minutesGap
    const hours = Math.floor(minutes / 60)
    const hoursDisplayed = `0${hours + ''}`
    const minutesDisplayed = `0${'' + (minutes % 60)}`
    const time = `${hoursDisplayed.slice(-2)}:${minutesDisplayed.slice(-2)}`
    return time
  })
}
