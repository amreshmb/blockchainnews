import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AtomAvatar } from "../../common/components";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Header from "../../common/components/header/Header";
import { useStyles } from "./user.style";
import { Box, Button, Container, Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TabPanel } from "../../common/components/atoms";
import Blogs from "../Blogs/Blogs"
import SubPosts from "../Posts/SubPosts/SubPosts";
import Social from "../Social/Social";
import Notifications from "../Notifications/Notifications";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function User() {
  const classes = useStyles();
  const history = useHistory();
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <div>
      <Header />
      <Box className={classes.background}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <AtomAvatar
            className={classes.margin_right}
            avatarLabel={<PersonOutlineIcon className={classes.avatar} />}
          />
          <span className={classes.margin_right}>NoNamesLeftToUse</span>
          <span className={classes.margin_right}>(76)</span>
          <span className={classes.margin_right}>icon</span>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          color="white"
          marginTop="1rem"
        >
          The Writer/Artist Himself
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          color="white"
          marginTop="1rem"
        >
          <Link to="/" className={classes.link}>
            5021 followers
          </Link>
          <span className={classes.vertical}></span>
          <Link to="/" className={classes.link}>
            27405 posts
          </Link>
          <span className={classes.vertical}></span>
          <Link to="/" className={classes.link}>
            27405 following
          </Link>
          <span className={classes.vertical}></span>
          <Link to="/" className={classes.link}>
            27405 HP
          </Link>
        </Box>
        <Box display="flex" justifyContent="center" color="white">
          <Link to="/" className={classes.link}>
            Blacklisted Users
          </Link>
          <span className={classes.vertical}></span>
          <Link to="/" className={classes.link}>
            Muted Users
          </Link>
          <span className={classes.vertical}></span>
          <Link to="/" className={classes.link}>
            Followed Blacklists
          </Link>
          <span className={classes.vertical}></span>
          <Link to="/" className={classes.link}>
            Followed Muted Lists
          </Link>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          color="white"
          padding="1rem 0px"
        >
          <Box className={classes.right_margin}>
            <span className={classes.span_margin}>icon</span>
            <span>Canada</span>
          </Box>
          <Box className={classes.right_margin}>
            <span className={classes.span_margin}>icon</span>
            <span>Joined September 2016</span>
          </Box>
          <Box>
            <span className={classes.span_margin}>icon</span>
            <span>Active1 hour ago</span>
          </Box>
        </Box>
      </Box>
      <Box bgcolor="#2C3A45">
        <Container>
          <Box display="flex" justifyContent="space-between">
            <Tabs
              className={classes.mainTab}
              value={tabValue}
              onChange={handleChange}
            >
              <Tab
                className={classes.currenTab}
                label="Blog"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.currenTab}
                label="Posts"
                {...a11yProps(1)}
              />
              <Tab
                className={classes.currenTab}
                label="Replies"
                {...a11yProps(2)}
              />
              <Tab
                className={classes.currenTab}
                label="Social"
                {...a11yProps(3)}
              />
              <Tab
                className={classes.currenTab}
                label="Notifications"
                {...a11yProps(4)}
              />
            </Tabs>

            <Button className={classes.currenTab}>Wallet</Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <TabPanel value={tabValue} index={0}>
            <Blogs />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
        <SubPosts/>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Social/>
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <Notifications/>
        </TabPanel>
      </Container>
    </div>
  );
}

export default User;
