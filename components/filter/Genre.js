import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { getGenreName } from "../../utils/get-genre"

const Genre = ({ available = [], selected = [], onSelect }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Genre:</FormLabel>
    <FormGroup>
      {available.map(id => (
        <FormControlLabel
          key={id}
          label={getGenreName(id)}
          control={
            <Checkbox
              checked={selected.includes(id)}
              onChange={onSelect}
              value={id}
            />
          }
        />
      ))}
    </FormGroup>
  </FormControl>
)

export default Genre
