import { Box } from "@material-ui/core";
import React from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import { AtomAvatar, AtomCard } from "../atoms";
import { Link } from "react-router-dom";
import LinearProgressBar from "../LinearProgress/LinearProgress";
import { useStyles } from "./notificationsCard.style";

function NotificationsCard() {
  const classes = useStyles();
  return (
    <AtomCard>
      <Box>
        <Box display="flex" alignItems="center">
          <AtomAvatar avatarLabel={<PersonOutlineIcon />} />
          <Box marginLeft="1rem">
            <Link className={classes.authorLink} to="/">
              @djrm{" "}
            </Link>
            <box>
          <LinearProgressBar value={50} />
          </box>
          </Box>
          <p>reblogged your post</p>
        </Box>
        <Box display="flex" marginLeft="2rem" marginTop="-0.5rem">
          {" "}
          <ExpandLessRoundedIcon /> 9 hours ago
        </Box>
      </Box>
    </AtomCard>
  );
}

export default NotificationsCard;
