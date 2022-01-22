import { Box, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import NotificationsCard from "../../common/components/NotificationsCard/NotificationsCard";
import { useStyles } from "./notifications.style";

function Notifications() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Box display="flex" justifyContent="center" marginTop="1rem">
          <Link className={classes.link} to="/">
            All{" "}
          </Link>
          <span className={classes.vertical}></span>
          <Link className={classes.link} to="/">
            Replies
          </Link>
          <span className={classes.vertical}></span>
          <Link className={classes.link} to="/">
            Mentions
          </Link>
          <span className={classes.vertical}></span>
          <Link className={classes.link} to="/">
            Follows
          </Link>
          <span className={classes.vertical}></span>
          <Link className={classes.link} to="/">
            Upvotes
          </Link>
          <span className={classes.vertical}></span>
          <Link className={classes.link} to="/">
            Reblogs
          </Link>
        </Box>
        <NotificationsCard/>
       
      </Container>
    </div>
  );
}

export default Notifications;
