import { cleanup, fireEvent, render } from "@testing-library/react"
import Index from "./index"
import { nowPlaying } from "../test/fixtures"
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup)

it("Renders the header with title", () => {
  const { getByText } = render(<Index films={[]} />)
  expect(getByText(/flimsy/i)).toBeTruthy()
})

it("Renders films when provided with array of now playing", () => {
  const { getByText } = render(<Index films={nowPlaying.results} />)
  expect(getByText(nowPlaying.results[0].title)).toBeTruthy()
  expect(getByText(nowPlaying.results[1].title)).toBeTruthy()
})
