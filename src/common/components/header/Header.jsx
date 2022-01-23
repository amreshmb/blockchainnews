import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { WorthiumLogo } from "../../svg/Svg";
import { useStyles } from "./header.style";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ROUTES from "../../routeConstants";
import { useHistory } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [state, setState] = useState({ searchVal: "", open: false });
  const requestSearch = (searchedVal) => {
    setState({ ...state, searchVal: searchedVal });
  };
  const cancelSearch = () => {
    setState({ ...state, searchVal: "" });
  };
  const handleDrawerClose = () => {
    setState({ ...state, open: false });
  };
  const getFilterPost = (path) => {
    history.push({
      pathname: `${ROUTES.LANDING}/${path}`,
    });
  };

  return (
    <>
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: state.open,
        })}
      >
        <Toolbar className={classes.headerMain}>
          <WorthiumLogo />
          <Box display="flex" alignItems="center">
            <Box>
              <Button color="inherit" onClick={() => getFilterPost("trending")}>
                Trending
              </Button>
              <Button color="inherit" onClick={() => getFilterPost("created")}>
                New
              </Button>
              <Button color="inherit" onClick={() => getFilterPost("hot")}>
                Hot
              </Button>
            </Box>
            <SearchBar
              value={state.searchVal}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={cancelSearch}
              onRequestSearch={() => {
                history.push({
                  pathname: ROUTES.SEARCH,
                  search: `?q=${state.searchVal}&s=newest`,
                });
              }}
            />
            <Button
              color="inherit"
              onClick={() => {
                history.push(ROUTES.LOGIN);
              }}
            >
              Login
            </Button>
            <Button color="inherit" onClick={() => {}}>
              Sign Up
            </Button>
            <Box className={classes.pencilIcon} onClick={()=>{
              history.push(ROUTES.CREATE_POST);
            }} >
              <EditIcon />
            </Box>
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
            {
              text: "Welcome",
              path: "/welcome",
            },
            {
              text: "Faq",
              path: "/faq",
            },
            {
              text: "Privacy Policy",
              path: "/privacy",
            },
            {
              text: "Terms of Service",
              path: "/tnc",
            },
            {
              text: "Stolen Accounts Recovery",
              externalLink: "http://wortheumwallet.com/recover_account_step_1",
            },
            {
              text: "Change Account Password",
              externalLink: "http://wortheumwallet.com/change_password",
            },
            {
              text: "Vote for Witnesses",
              externalLink: "http://wortheumwallet.com/~witnesses",
            },
            {
              text: "Wortheum Whitepaper",
              externalLink: "https://wortheum.io/assets/Whitepaper-2.0.pdf",
            },
            {
              text: "About Wortheum",
              path: "/about",
            },
            // {
            //   text: "download",
            //   path: "/download",
            // },
            // {
            //   text: "redirect",
            //   path: "/redirect",
            // },
            // {
            //   text: "share",
            //   path: "/share",
            // },
          ].map((item, index) => (
            <ListItem key={item.text}>
              <ListItemText>
                {item.path && (
                  <Link className={classes.navLink} to={item.path}>
                    {item.text}{" "}
                  </Link>
                )}
                {item.externalLink && (
                  <Link
                    className={classes.navLink}
                    to="#"
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`${item.externalLink}`, "_blank");
                    }}
                  >
                    {item.text}{" "}
                  </Link>
                )}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

export default Header;
