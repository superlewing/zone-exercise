import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { getGenreName } from "../../utils/get-genre"

const GenreList = ({ genre_ids }) => (
  <Typography>
    {genre_ids.map((id, i) => (
      <span key={id}>
        {getGenreName(id)}
        {i + 1 < genre_ids.length ? ", " : "."}
      </span>
    ))}
  </Typography>
)

export default GenreList
