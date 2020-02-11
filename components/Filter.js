import { makeStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import ListItemText from "@material-ui/core/ListItemText"
import Select from "@material-ui/core/Select"
import Checkbox from "@material-ui/core/Checkbox"
import Chip from "@material-ui/core/Chip"

import { getGenreName } from "../utils/get-genre"

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

const Filter = ({ available = [], selected = [], onSelect }) => {
  const classes = useStyles()

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={selected}
          onChange={onSelect}
          input={<Input />}
          //   MenuProps={MenuProps}
        >
          {available.map(id => (
            <MenuItem key={id} value={id} selected={selected.includes(id)}>
              {getGenreName(id)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Filter
