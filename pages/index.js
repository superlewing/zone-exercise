import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react"
import fetch from "isomorphic-unfetch"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/Layout"
import Film from "../components/Film"
import Filter from "../components/Filter"
import Rating from "../components/Rating"
import { collateGenres } from "../utils/get-genre"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import FilterListIcon from "@material-ui/icons/FilterList"

const useStyles = makeStyles({
  root: {
    margin: 20
  },
  media: {
    height: 140
  }
})

const Index = ({ nowPlaying }) => {
  const [genres, setGenres] = useState([])
  const [rating, setRating] = useState(3)
  const classes = useStyles()

  const films = nowPlaying
    .filter(
      item =>
        !genres.length || genres.every(id => item.genre_ids.indexOf(id) !== -1)
    )
    .filter(item => item.vote_average >= rating)
    .sort((a, b) => b.popularity - a.popularity)

  const handleCheckboxChange = e => {
    const value = parseInt(e.target.value)
    setGenres(
      genres.includes(value)
        ? genres.filter(id => id !== value)
        : [...genres, value]
    )
  }

  return (
    <Layout>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Flimsy</Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item md={3}>
            <Grid spacing={1} container>
              <Grid item md={12}>
                <Rating value={rating} onChange={(e, v) => setRating(v)} />
              </Grid>
              <Grid item>
                {/* <Typography>Filter by genres:</Typography> */}
                <Filter
                  available={collateGenres(nowPlaying)}
                  selected={genres}
                  onSelect={handleCheckboxChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={9}>
            <Grid spacing={1} container>
              {films.map(film => (
                <Grid item md={4} key={film.id}>
                  <Film film={film} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
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
