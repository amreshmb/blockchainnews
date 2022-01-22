import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AtomAvatar } from "../../common/components";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Header from "../../common/components/header/Header";
import { useStyles } from "./user.style";
import { Box, Button, Container, Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TabPanel } from "../../common/components/atoms";
import Blogs from "../Blogs/Blogs";
import SubPosts from "../Posts/SubPosts/SubPosts";
import Social from "../Social/Social";
import Notifications from "../Notifications/Notifications";
import {
  getAccountInfo,
  getFollower,
  getFollowing,
  getGlobalProerties,
} from "../../common/service";
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
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [accountInfo, setAccountInfo] = useState(null);
  const [globalData, setGlobalData] = useState(null);
  const [loader, setLoader] = useState(false);
  const { authorName } = useParams();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const getFollowerData = (reqData) => {
    getFollower(reqData)
      .then((res) => {
        if (res.result.length) {
          setFollowers(res.result);
        }
      })
      .catch((e) => {
        setLoader(false);
      });
  };
  const getFollowingData = (reqData) => {
    getFollowing(reqData)
      .then((res) => {
        if (res.result.length) {
          setFollowing(res.result);
        }
      })
      .catch((e) => {
        setLoader(false);
      });
  };
  const getAccountInfoData = () => {
    getAccountInfo({
      id: 1,
      params: {
        accounts: [authorName.split("@")[1]],
      },
    })
      .then((res) => {
        if (res.result && res.result.accounts && res.result.accounts.length) {
          setAccountInfo(res.result.accounts);
        }
      })
      .catch((e) => {
        setLoader(false);
      });
  };
  const getGlobalProertiesData = () => {
    getGlobalProerties({
      id: 1,
      params: [],
    })
      .then((res) => {
        if (res.result) {
          setGlobalData(res.result);
        }
      })
      .catch((e) => {
        setLoader(false);
      });
  };
  useEffect(() => {
    if (authorName) {
      const reqData = {
        params: [authorName.split("@")[1], "", "blog", 1000],
        id: 1,
      };
      setLoader(true);
      getFollowerData(reqData);
      getFollowingData(reqData);
      getAccountInfoData();
      getGlobalProertiesData();
    }
  }, []);
  const userData =
    accountInfo && accountInfo.length > 0
      ? JSON.parse(accountInfo[0].posting_json_metadata)
      : null;

  return (
    <div>
      <Header />
      <Box className={classes.background}>
        {userData && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <AtomAvatar
              className={classes.margin_right}
              avatarLabel={<PersonOutlineIcon className={classes.avatar} />}
              imgSrc={userData.profile.profile_image}
            />
            <span className={classes.margin_right}>
              {userData.profile.name}
            </span>
            <span className={classes.margin_right}>(76)</span>
            <span className={classes.margin_right}>icon</span>
          </Box>
        )}
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
            {followers.length} followers
          </Link>
          <span className={classes.vertical}></span>
          <Link to="/" className={classes.link}>
            27405 posts
          </Link>
          <span className={classes.vertical}></span>
          <Link to="/" className={classes.link}>
            {following.length} following
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
          <SubPosts />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Social />
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <Notifications />
        </TabPanel>
      </Container>
    </div>
  );
}

export default User;
