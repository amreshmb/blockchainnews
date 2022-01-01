import { createTheme } from "@material-ui/core/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "#FFFFFF",
      
    },
    secondary: {
      light: "#0066ff",
      main: "#C4C4C4",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#24342B",
      secondary: "rgb(36 52 43 / 50%)",
      light: "#505D55",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      lineHeight: 2,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 10,
    },
    h6: {
      fontSize: 16,
    },
    h4: {
      fontSize: 18,
      lineHeight: "22px",
      fontWeight: 600,
      marginTop: 4,
    },
    h5: {
      fontSize: 12,
      lineHeight: "14px",
      fontWeight: 600,
    },
    h3: {
      fontSize: 36,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      lineHeight: "30px",
      fontWeight: 700,
    },
    small: {
      fontSize: 13,
      fontWeight: 600,
      lineHeight: "16px",
    },

    fontFamily: ["Indivisible", "sans-serif"].join(","),
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#163529",
        padding: "7px 10px !important",
        fontSize: "0.75rem !important",
        fontFamily: ["Indivisible", "sans-serif"],
        marginTop: "10px !important",
        "& .MuiTooltip-arrow": {
          color: "#163529",
        },
      },
    },
    MuiDrawer: {
      root: {
        "& .MuiTypography-h4": {
          fontWeight: "700 !important",
          maxWidth:287,
        },
        "& .MuiPaper-elevation1": {
          boxShadow: "0px -6px 30px rgba(0, 0, 0, 0.1);",
        },
      },
    },
    MuiRadio: {
      root: {
        color: "#D8D8D8",
        padding: "0 10px",
      },
    },
    MuiSlider: {
      root: {
        color: "#ECECEF",
        padding: "0 !important",
        "& .MuiSlider-rail": {
          height: 4,
        },
        "& .MuiSlider-track": {
          height: 4,
          background: "#00AE5C;",
        },
        "& .MuiSlider-thumb": {
          height: 16,
          width: 16,

          boxShadow:
            "0px 2.13333px 2.13333px rgba(0, 0, 0, 0.08), inset 0px 0.533333px 0.533333px rgba(255, 255, 255, 0.57)",
        },
      },
    },
    MuiList:{
      root:{
        maxHeight:300,
        "& li":{
          minHeight:'auto',
        }
      }
    },
    MuiFormControlLabel:{
      root:{
        alignItems:"flex-start",
        marginTop:10,
      }
    },
    MuiCheckbox:{
      root:{
        padding: "0 10px",
      }
    },
  },
});
