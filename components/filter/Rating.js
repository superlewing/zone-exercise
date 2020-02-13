import Slider from "@material-ui/core/Slider"
import FormLabel from "@material-ui/core/FormLabel"

const Rating = ({ value, onChange }) => (
  <React.Fragment>
    <FormLabel component="legend">Filter by rating: {value}</FormLabel>
    <Slider
      defaultValue={3}
      aria-labelledby="discrete-slider-small-steps"
      step={0.5}
      min={0}
      max={10}
      onChange={onChange}
    />
  </React.Fragment>
)

export default Rating
