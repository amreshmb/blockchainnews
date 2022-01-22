import React, { useState } from 'react'
import { useStyles } from "./subPosts.style";
import { Box, Container, Tab, Tabs } from "@material-ui/core";
import { TabPanel } from "../../../common/components/atoms";
import AllPosts from '../AllPosts';
import Comments from '../Comments';
import Payouts from '../Payouts';


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

function SubPosts() {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };
    return (
        <div>
        <Box >
        <Container>
          <Box display="flex" justifyContent="space-between">
            <Tabs
              className={classes.mainTab}
              value={tabValue}
              onChange={handleChange}
            >
              <Tab
                className={classes.currenTab}
                label="Posts"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.currenTab}
                label="Comments"
                {...a11yProps(1)}
              />
              <Tab
                className={classes.currenTab}
                label="Payouts"
                {...a11yProps(2)}
              />
            
            </Tabs>

          </Box>
        </Container>
      </Box>
      <Container>
        <TabPanel value={tabValue} index={0}>
            <AllPosts/>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Comments/>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Payouts/>
        </TabPanel>
       
      </Container>
      </div>
    )
}

export default SubPosts
