import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  margin_right: {
    marginRight: "1rem",
    fontSize: "2rem",
    color: "white",
  },
  background: {
    background: "red",
  },
  vertical: {
    height: "25px",
    borderLeft: "1px solid Silver",
    marginLeft: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
    marginLeft: "0.5rem",
    "&:hover": {
      color: "maroon",
    },
  },
  right_margin: {
    marginRight: "1rem",
  },
  span_margin: {
    marginRight: "0.5rem",
  },
  mainTab: {
    display: "flex",
    justifyContent: "space-around",
    "& .MuiTab-textColorInherit": {
        minWidth : "unset"
    },
    
  },
  currenTab: {
    color: "#fff",
    
    "&:hover": {
        color: "maroon",
        background: "#d3d3d3"
      },
  }
}));
