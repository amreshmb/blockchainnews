import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { AtomCard } from "..";

const useStyles = makeStyles((theme) => ({
  noResultContainer: {
    color: "#333",
    backgroundColor: "#f3faf0",
    border: "1px solid #eee",
  },
  msg:{
      fontSize: "1rem"
  }
}));
function NoResultFound({mainText, subText}) {
  const classes = useStyles();
  return (
    <AtomCard className={classes.noResultContainer}>
      <Typography className={classes.msg}>
        {`No ${mainText}  #${subText} posts found.`}
      </Typography>
    </AtomCard>
  );
}

export default NoResultFound;
