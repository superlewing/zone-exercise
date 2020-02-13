import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import GenreList from "../components/GenreList"

const useStyles = makeStyles({
  // root: {
  //   maxWidth: 345
  // },
  media: {
    height: 140
  }
})

export default function Film({ film }) {
  const { title, poster_path, genre_ids } = film
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
        title="Contemplative Reptile"
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
