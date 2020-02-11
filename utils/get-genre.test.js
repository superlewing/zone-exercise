import { getGenreName, collateGenres } from "./get-genre"
import { nowPlaying } from "../test/fixtures"

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup)

it("Returns genre names based on key", () => {
  expect(getGenreName(12)).toBe("Adventure")
  expect(getGenreName(28)).toBe("Action")
})

it("Collates one entry per genre from all films", () => {
  const genres = collateGenres(nowPlaying.results)
  expect(genres.filter(id => id === 28).length).toBe(1)
  expect(genres.filter(id => id === 35).length).toBe(1)
  expect(genres.filter(id => id === 80).length).toBe(1)
})
