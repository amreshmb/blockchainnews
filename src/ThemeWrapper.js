import { ThemeProvider } from "@material-ui/core/styles";
import { muiTheme } from "./assets/theme/MainTheme";


const ThemeWrapper = (props) => {
  return <ThemeProvider theme={muiTheme}>{props.children}</ThemeProvider>;
};

export default ThemeWrapper;
