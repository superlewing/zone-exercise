import { makeStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemText from "@material-ui/core/ListItemText"
import Select from "@material-ui/core/Select"
import Chip from "@material-ui/core/Chip"
import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Checkbox from "@material-ui/core/Checkbox"
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
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Filter by genre:</FormLabel>
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
    // <div>
    //   <FormControl className={classes.formControl}>
    //     <InputLabel id="demo-mutiple-name-label">Genres</InputLabel>
    //     <Select
    //       labelId="demo-mutiple-name-label"
    //       id="demo-mutiple-name"
    //       multiple
    //       value={selected}
    //       onChange={onSelect}
    //       input={<Input />}
    //       //   MenuProps={MenuProps}
    //     >
    //       {available.map(id => (
    //         <MenuItem key={id} value={id} selected={selected.includes(id)}>
    //           {getGenreName(id)}
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
    // </div>
  )
}

export default Filter
