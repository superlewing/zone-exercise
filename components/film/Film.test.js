import React from "./node_modules/react"
import {
  cleanup,
  fireEvent,
  render
} from "./node_modules/@testing-library/react"
import Film from "./Film"
import { nowPlaying } from "../../test/fixtures"
import { getGenreName } from "../../utils/get-genre"

afterEach(cleanup)

it("Renders the title", () => {
  const film = nowPlaying.results[0]
  const { getByText } = render(<Film film={film} />)
  expect(getByText(film.title)).toBeTruthy()
})

it("Renders the header with title and genres", () => {
  const film = nowPlaying.results[0]
  const { getByText } = render(<Film film={film} />)
  film.genre_ids.forEach(id =>
    expect(getByText(getGenreName(id), { exact: false })).toBeTruthy()
  )
})
