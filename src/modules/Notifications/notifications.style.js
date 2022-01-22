import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  vertical: {
    height: "25px",
    borderLeft: "1px solid Silver",
    marginLeft: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "red",
    marginLeft: "0.5rem",
    "&:hover": {
      color: "maroon",
    },
  },
  avatar: {
    marginLeft: "1rem",
    "& Link": {
      textDecoration: "none",
      color: "black",
    },
},
authorLink:{
    textDecoration:'none',
    paddingRight:'5px',
    "&:hover": {
        color: "red",
      },
}
}));
