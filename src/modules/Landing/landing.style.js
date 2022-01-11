import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  headerMain: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    margin: "0px 1rem",
    width: "100%",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
    width: "90%",
  },
  sideList: {
    listStyleType: "none",
    paddingInlineStart: "0px"
  },
  blogContent: {
    margin: 20,
  },
  leftSidePanel: {
    marginTop: 20,
  },
  navLink: {
    textDecoration: "none",
    "&:hover": {
      color: "red",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectOption: {
    "& .MuiOutlinedInput-input": {
      padding: "10px",
    },
  },
  avatar: {
    height: 14,
  },
  plr5: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  pr5: {
    paddingRight: 5,
  },
  postImage: {
    maxHeight: "65px",
    objectFit: "cover",
  },
  postCard: {
    marginBottom: "12px",
  },
  cardContent: {
    lineHeight: "1.5em",
    height: "3em",
    overflow: "hidden",
  },
  cardDescription:{
    cursor: "pointer"
  },
  unModerated:{
    color: "gray",
    fontSize: "12px"
  }
}));
