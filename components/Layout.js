import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
// import {React.Fragment} from "react"

const theme = createMuiTheme({})

export default ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  </MuiThemeProvider>
)
