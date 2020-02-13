import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import GenreList from "./GenreList"

const useStyles = makeStyles({
  media: {
    height: 140
  }
})

export default function Film({ film }) {
  const { title, poster_path, genre_ids } = film
  const classes = useStyles()

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <GenreList genre_ids={genre_ids} />
      </CardContent>
    </Card>
  )
}
