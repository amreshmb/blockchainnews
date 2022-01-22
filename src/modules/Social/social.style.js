import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  images: {
    display: "flex",
    marginTop: "1rem",
    // justifyContent: 'space-evenly',
    "& img": {
      marginRight: "1rem",
    },
  },
  authorLink:{
    textDecoration:'none',
    paddingRight:'5px',
    "&:hover": {
        color: "red",
      },
},
img:{
    width:'20px'
}
}));
