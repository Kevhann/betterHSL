import { formatDuration } from "./formatter"

describe("Time formatter tests", () => {
  test("sixty seconds is one minute", () => {
    const timeInSeconds = 60
    expect(formatDuration(timeInSeconds)).toBe("1 min")
  })

  test("59 seconds is zero minutes", () => {
    const timeInSeconds = 59
    expect(formatDuration(timeInSeconds)).toBe("0 min")
  })

  test("one sec less than a day is correct", () => {
    const timeInSeconds = 24 * 60 * 60 - 1
    expect(formatDuration(timeInSeconds)).toBe("23 h 59 min")
  })
})
