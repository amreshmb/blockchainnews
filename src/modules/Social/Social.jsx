import { Box, Container, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabPanel } from "../../common/components/atoms";
import { useStyles } from "./social.style";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Social() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <div>
      <Container>
        <h2>Community Subscriptions</h2>
        <p>The author has subscribed to the following Hive Communities</p>
        <ul>
          <li>
            <Link to="/" className={classes.authorLink}>
              Splinterlands
            </Link>
            ADMIN
          </li>
        </ul>
        <Box>
          <h2>Badges and achievements</h2>
        </Box>
        <p>
          These are badges received by the author via the third-party apps{" "}
          <Link to="/" className={classes.authorLink}>
            Peakd
          </Link>{" "}
          &{" "}
          <Link to="/" className={classes.authorLink}>
            Hivebuzz
          </Link>
          .
        </p>
        <Container>
          <Box display="flex" justifyContent="space-between">
            <Tabs
              className={classes.mainTab}
              value={tabValue}
              onChange={handleChange}
            >
              <Tab
                className={classes.currenTab}
                label="Badges"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.currenTab}
                label="Activity"
                {...a11yProps(1)}
              />
              <Tab
                className={classes.currenTab}
                label="Personal"
                {...a11yProps(2)}
              />
              <Tab
                className={classes.currenTab}
                label="Meetups"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
        </Container>
        <Container>
          <TabPanel value={tabValue} index={0}>
            <Box className={classes.images}>
              <img
                src="https://images.hive.blog/u/badge-111112/avatar/small"
                alt="abc"
              />
              <img
                src="https://images.hive.blog/u/badge-969696/avatar/small"
                alt="gamers"
              />
              <img
                src="https://images.hive.blog/u/badge-012345/avatar/small"
                alt="gamers"
              />
              <img
                src="https://images.hive.blog/u/badge-181335/avatar/small"
                alt="gamers"
              />
              <img
                src="https://images.hive.blog/u/badge-069069/avatar/small"
                alt="gamers"
              />
              <img
                src="https://images.hive.blog/u/badge-333999/avatar/small"
                alt="gamers"
              />
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Box className={classes.images} width="64px">
              <Link to="/">
                <img className={classes.img}
                  src="https://hivebuzz.me/badges/first-post.png"
                  alt="firstPost"
                />
              </Link>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Link to="/">
              <img src="https://hivebuzz.me/badges/birthday-1.png" alt="" />
            </Link>
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <Link to="/">
              <img src="https://hivebuzz.me/badges/hivefest-6.png" alt="" />
            </Link>
          </TabPanel>
        </Container>
      </Container>
    </div>
  );
}

export default Social;
