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
  navLink: {
    textDecoration: "none",
  },
  pencilIcon: {
    width: 35,
    height: 35,
    minWidth: 35,
    minHeight: 35,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    cursor: "pointer",
    "& .MuiSvgIcon-root": {
      fill: "gray",
    },
    "&:hover": {
      background: "gray",
      "& .MuiSvgIcon-root": {
        fill: "#fff",
      },
    },
  },
  menuButton: {
    marginLeft: "0px",
  },
}));
