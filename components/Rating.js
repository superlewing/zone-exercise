import Slider from "@material-ui/core/Slider"

const Rating = ({ value, onChange }) => {
  return (
    <Slider
      defaultValue={3}
      aria-labelledby="discrete-slider-small-steps"
      step={0.5}
      min={0}
      max={10}
      onChange={onChange}
    />
  )
}

export default Rating
