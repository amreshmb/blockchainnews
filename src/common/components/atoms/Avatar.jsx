import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiAvatar-colorDefault": {
      backgroundColor: "#FFF",
      border: "1px solid #000",
      fontSize: 16,
      height: 24,
      width: 24,
      "& .MuiSvgIcon-root": {
        fill:"unset"
      }
    },
   
  },
}));

export const AtomAvatar = ({ altText, imgSrc, avatarLabel, ...props }) => {
  const classes = useStyles();
  return (
    <Avatar className={classes.root} alt={altText} src={imgSrc} {...props}>
      {avatarLabel}
    </Avatar>
  );
};
