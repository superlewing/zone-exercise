import React from "react"
import { cleanup, fireEvent, render } from "@testing-library/react"
import Film from "./Film"
import { nowPlaying } from "../test/fixtures"
import { getGenreName } from "../utils/get-genre"
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup)

it("Renders the header with title and genres", () => {
  const film = nowPlaying.results[0]
  const { getByText } = render(<Film film={film} />)
  film.genre_ids.forEach(id => expect(getGenreName(id)).toBeTruthy())
})