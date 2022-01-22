import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  authorLink: {
    textDecoration: "none",
    paddingRight: "5px",
    "&:hover": {
      color: "red",
    },
  },
}));
