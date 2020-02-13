import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react"
import fetch from "isomorphic-unfetch"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/Layout"
import Film from "../components/film/Film"
import Genre from "../components/filter/Genre"
import Rating from "../components/filter/Rating"
import MovieFilter from "@material-ui/icons/MovieFilter"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import { collateGenres } from "../utils/get-genre"

const useStyles = makeStyles({
  root: {
    margin: 20
  },
  icon: { marginRight: 20 },
  media: {
    height: 140
  }
})

const Index = ({ films, config }) => {
  const [genres, setGenres] = useState([])
  const [rating, setRating] = useState(3)
  const classes = useStyles()

  const renderFilms = films
    .filter(
      item =>
        !genres.length || genres.every(id => item.genre_ids.indexOf(id) !== -1)
    ) // TODO: conditional filtering
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
          <MovieFilter className={classes.icon} />
          <Typography variant="h6">Flimsy</Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item md={3}>
            <Grid spacing={1} container>
              <Grid item md={12}>
                <Typography variant="h5">Filter</Typography>
              </Grid>
              <Grid item md={12}>
                <Rating value={rating} onChange={(e, v) => setRating(v)} />
              </Grid>
              <Grid item>
                <Genre
                  available={collateGenres(films)}
                  selected={genres}
                  onSelect={handleCheckboxChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={9}>
            <Grid spacing={1} container>
              {renderFilms.map(film => (
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

Index.getInitialProps = async () => {
  const api_key = process.env.api_key
  const api_url = "https://api.themoviedb.org/3/"
  try {
    const [films, genres, config] = await Promise.all([
      fetch(api_url + "movie/now_playing?api_key=" + api_key),
      fetch(api_url + "genre/movie/list?api_key=" + api_key),
      fetch(api_url + "configuration?api_key=" + api_key)
    ])
      .then(res => Promise.all(res.map(body => body.json())))
      .catch(error => console.log(error))

    return {
      films: films.results,
      config: { config, genres: genres.genres }
    }
  } catch (err) {
    console.log(err)
  }
}

export default Index
