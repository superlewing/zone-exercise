import { useState } from "react"
import fetch from "isomorphic-unfetch"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/Genres"
import Film from "../components/Film"
import Filter from "../components/Filter"
import Rating from "../components/Rating"
import { collateGenres } from "../utils/get-genre"

const Index = ({ nowPlaying }) => {
  const [genres, setGenres] = useState([])
  const [rating, setRating] = useState(3)
  const films = nowPlaying
    .filter(
      item =>
        !genres.length || item.genre_ids.some(id => genres.indexOf(id) !== -1)
    )
    .filter(item => item.vote_average >= rating)
    .sort((a, b) => b.popularity - a.popularity)

  // const handleSelect = e => setGenres(e.target.value)

  return (
    <Layout>
      <p>Flimsy</p>
      <Filter
        available={collateGenres(nowPlaying)}
        selected={genres}
        onSelect={e => setGenres(e.target.value)}
      />
      <Rating value={rating} onChange={(e, v) => setRating(v)} />
      <Grid spacing={1} container>
        {films.map(film => (
          <Grid item md={3} key={film.id}>
            <Film film={film} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
// v4 auth eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTg4NTk5ZDlhYjYwYTA2ZmMwZGU3ZGUzNmM1YmQ2NiIsInN1YiI6IjVlM2MyOWU3NDMyNTBmMDAxM2M4Mzk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAmnBjBGcTmWJQNTkpZCEeBOqQGRB465OKU3bWMovRc

Index.getInitialProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=a988599d9ab60a06fc0de7de36c5bd66"
  )
  const data = await res.json()

  return {
    nowPlaying: data.results
  }
}

export default Index
