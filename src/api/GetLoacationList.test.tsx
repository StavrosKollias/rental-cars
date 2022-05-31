import { GetLocationsList } from './'
const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    }) as any
})

afterAll(() => {
  global.fetch = unmockedFetch
})

describe('GetLaunchesAPI', () => {
  test('API Retuns Array and works', async () => {
    const json = await GetLocationsList('https://testing_api/12')
    expect(Array.isArray(json)).toEqual(true)
    expect(json.length).toEqual(0)
  })
})
