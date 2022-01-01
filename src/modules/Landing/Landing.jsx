import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./landing.style";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import { AtomAvatar, AtomCard } from "../../common/components";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
const Landing = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = useState({ searchVal: "", open: false });
  const requestSearch = (searchedVal) => {
    setState({ ...state, searchVal: searchedVal });
  };
  const cancelSearch = () => {};
  const handleDrawerClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <div className={classes.mainContainer}>
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: state.open,
        })}
      >
        <Toolbar className={classes.headerMain}>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Box display="flex" alignItems="center">
            <Box>
              <Button color="inherit">Trending</Button>
              <Button color="inherit">New</Button>
              <Button color="inherit">Hot</Button>
            </Box>
            <SearchBar
              value={state.searchVal}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={cancelSearch}
            />
            <Button color="inherit">Login</Button>
            {!state.open && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setState({ ...state, open: true });
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={1}
        className={clsx(classes.content, {
          [classes.contentShift]: state.open,
        })}
      >
        <Grid item xs={12} sm={3} lg={2}>
          <ul className={classes.sideList}>
            <li>my feed</li>
            <li>trending cat 1</li>
            <li>trending cat 2</li>
            <li>trending cat 3</li>
            <li>trending cat 4</li>
            <li>trending cat 5</li>
            <li>trending cat 5</li>
            <li>link to trending cat</li>
            <li>link to popular tags</li>
            <li>guid/blog url</li>
          </ul>
        </Grid>
        <Grid item xs={12} className={classes.blogContent} sm={7} lg={9}>
          <Box></Box>
          <AtomCard>
            <Box display="flex" alignItems="center">
              <Box paddingRight="12px">
                <AtomAvatar imgSrc={<PersonOutlineIcon />} />
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant="h4">Heading</Typography>
                <Typography color="textSecondary">Summary</Typography>
              </Box>
            </Box>
          </AtomCard>
        </Grid>
      </Grid>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            "Welcome",
            "Faq",
            "Terms & Condition",
            "download",
            "redirect",
            "share",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Landing;
