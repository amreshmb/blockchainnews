import React, { useState } from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import CachedIcon from "@material-ui/icons/Cached";
import moment from "moment";
import { useStyles } from "./articleCard.style";
import ROUTES from "../../routeConstants";
import { filterPath } from "../../constants/enum";
import { Link, useHistory } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { AtomAvatar, AtomCard } from "..";
function ArticleCard({
  author = "",
  author_reputation = "",
  created = "",
  json_metadata = [],
  filter = "",
  title = "",
  body = "",
  postUrl = "",
  totalVote = "",
  messages = "",
  payout = "",
  payoutAt = "",
}) {
  const classes = useStyles();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <AtomCard className={classes.postCard}>
      <Box display="flex" paddingBottom="5px">
        <AtomAvatar
          avatarLabel={<PersonOutlineIcon className={classes.avatar} />}
        />
        <strong className={classes.plr5}>
          <Link className={classes.navLink} to={`${ROUTES.USER}/@${author}`}>
            {" "}
            {author}
          </Link>
        </strong>
        <span className={classes.pr5}>({author_reputation})</span>
        <span className={classes.pr5}>in</span>
        {json_metadata.tags && json_metadata.tags.length > 0 && (
          <Link
            className={classes.navLink}
            to="/"
            onClick={(e) => {
              e.preventDefault();
              history.push({
                pathname: `${ROUTES.LANDING}/${filterPath[filter]}/${json_metadata.tags[0]}`,
              });
            }}
          >
            #{json_metadata.tags[0]}
          </Link>
        )}
        <span className={classes.plr5}> • </span>
        <Link className={classes.navLink} to="/">
          {moment(created).fromNow()}
        </Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        className={classes.cardDescription}
      >
        {json_metadata && json_metadata.image && (
          <Box paddingRight="12px">
            <img
              className={classes.postImage}
              src={json_metadata.image[0]}
              alt="profile"
            />
          </Box>
        )}

        <Box display="flex" flexDirection="column">
          <Typography
            onClick={() => {
              history.push({
                pathname: postUrl,
              });
            }}
            variant="h4"
          >
            {title}
          </Typography>
          <Typography
            onClick={() => {
              history.push({
                pathname: postUrl,
              });
            }}
            className={classes.cardContent}
            color="textSecondary"
          >
            {body}
          </Typography>
          <hr style={{ width: "100%" }} />
          <Box display="flex">
            <Box className={classes.upArrowIcon}>
              <ExpandLessRoundedIcon />
            </Box>
            <Box className={classes.downArrowIcon}>
              <ExpandMoreRoundedIcon />
            </Box>
            <Box display="flex" className={classes.rightBorder}>
              <Link
                to="#"
                className={classes.navLink}
                onClick={() => setShowMenu(!showMenu)}
              >
                ${payout}
              </Link>
              <ArrowDropDownIcon onClick={() => setShowMenu(!showMenu)} />
              {showMenu && (
                <AtomCard
                  className={`${classes.verticalMenu} ${
                    true ? classes.menuVisible : ""
                  }`}
                >
                  <Box>
                    <ul className={classes.verticalMenuList}>
                      <li>Pending payout amount: $425.51</li>
                      <li>Breakdown: 211.90 HBD, 162.88 HP</li>
                      <li>Max accepted payout: $100,000.00</li>
                      {payoutAt && <li>Payout {moment(payoutAt).fromNow()}</li>}
                    </ul>
                  </Box>
                </AtomCard>
              )}
            </Box>
            {totalVote ? (
              <Box
                display="flex"
                className={`${classes.rightBorder} ${classes.upVote}`}
              >
                <ExpandLessIcon className={classes.expandIcon} />
                <Typography>{totalVote}</Typography>
              </Box>
            ) : null}
            {messages ? (
              <Box
                display="flex"
                className={`${classes.rightBorder} ${classes.upVote}`}
              >
                <QuestionAnswerIcon className={classes.expandIcon} />
                <Typography>{messages}</Typography>
              </Box>
            ) : null}
            <Box display="flex" className={`${classes.upVote}`}>
              <CachedIcon className={classes.expandIcon} />
            </Box>
          </Box>
        </Box>
      </Box>
    </AtomCard>
  );
}

export default ArticleCard;
