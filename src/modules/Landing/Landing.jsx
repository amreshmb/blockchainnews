import { Box, FormControl, Grid, Select, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./landing.style";
import { AtomAvatar, AtomCard, NoResultFound } from "../../common/components";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Header from "../../common/components/header/Header";
import {
  newsFilterOption,
  filterPath,
  tagOptions,
} from "../../common/constants/enum";
import { Link, useHistory } from "react-router-dom";
import ROUTES from "../../common/routeConstants";
import { getRankedPost } from "../../common/service";
import { useParams } from "react-router-dom";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";

const Landing = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { sortBy, tag } = useParams();
  const [state, setState] = useState({
    filter: null,
    data: [],
    loader: false,
    tag: tag ? tag : "",
  });
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  console.log('tag', tag)
  useEffect(() => {
    const filterItem = newsFilterOption.filter((item) => item.path === sortBy);
    if (filterItem.length) {
      setState({ ...state, loader: true });
      const reqData = {
        params: { sort: sortBy, tag: tag, observer: "" },
        id: 1,
      };
      getRankedPost(reqData)
        .then((res) => {
          setState({ ...state, loader: false });
          if (res.result) {
            setState({
              ...state,
              data: res.result,
              filter: filterItem[0].name,
            });
          }
        })
        .catch((e) => {
          setState({ ...state, loader: false });
        });
    }
    if (!sortBy) {
      history.push({
        pathname: `${ROUTES.LANDING}/trending`,
      });
    }
  }, [sortBy, tag]);
  return (
    <div className={classes.mainContainer}>
      <Header />
      <Grid container spacing={1} className={classes.content}>
        <Grid item xs={12} lg={2}>
          <AtomCard className={classes.leftSidePanel}>
            <ul className={classes.sideList}>
              <li key="All News">
                <Link className={classes.navLink} to={ROUTES.LANDING}>
                  All News
                </Link>
              </li>
              <li key="Trending">Trending Communities</li>
              {tagOptions.map((item, i) => (
                <li key={`${item}-${i}`}>
                  <Link
                    className={classes.navLink}
                    to={`${ROUTES.LANDING}/${filterPath[state.filter]}/${
                      item.path
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AtomCard>
        </Grid>
        <Grid item xs={12} className={classes.blogContent} lg={9}>
          {state.loader ? (
            <Box display="flex" justifyContent="center">
              {" "}
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h4">{tag ? `#${tag}` : 'All News'}</Typography>
                  {tag? <Typography className={classes.unModerated} >Unmoderated tag</Typography>: null}
                </Box>
                <Box>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <Select
                      className={classes.selectOption}
                      native
                      value={state.filter ? state.filter : ""}
                      onChange={(e) => {
                        const filterItem = newsFilterOption.filter(
                          (item) => item.name === e.target.value
                        );
                        setState({ ...state, filter: e.target.value });
                        history.push({
                          pathname: `${ROUTES.LANDING}/${filterItem[0].path}`,
                        });
                      }}
                    >
                      {newsFilterOption.map((item, index) => {
                        return (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {state.data.length > 0 ? (
                state.data.map((item) => {
                  return (
                    <AtomCard key={item.post_id} className={classes.postCard}>
                      <Box display="flex" paddingBottom="5px">
                        <AtomAvatar
                          avatarLabel={
                            <PersonOutlineIcon className={classes.avatar} />
                          }
                        />
                        <strong className={classes.plr5}>
                          <Link
                            className={classes.navLink}
                            to={`${ROUTES.USER}/:@${item.author}`}
                          >
                            {" "}
                            {item.author}
                          </Link>
                        </strong>
                        <span className={classes.pr5}>
                          ({item.author_reputation})
                        </span>
                        <span className={classes.pr5}>in</span>
                        {item.json_metadata &&
                          item.json_metadata.tags &&
                          item.json_metadata.tags.length > 0 && (
                            <Link
                              className={classes.navLink}
                              to="/"
                              onClick={(e) => {
                                e.preventDefault();
                                history.push({
                                  pathname: `${ROUTES.LANDING}/${
                                    filterPath[state.filter]
                                  }/${item.json_metadata.tags[0]}`,
                                });
                              }}
                            >
                              #{item.json_metadata.tags[0]}
                            </Link>
                          )}
                        <span className={classes.plr5}> • </span>
                        <Link className={classes.navLink} to="/">
                          {moment(item.created).fromNow()}
                        </Link>
                      </Box>
                      <Box display="flex" alignItems="center" className={classes.cardDescription} >
                        {item.json_metadata && item.json_metadata.image && (
                          <Box paddingRight="12px">
                            <img
                              className={classes.postImage}
                              src={item.json_metadata.image[0]}
                              alt="profile"
                            />
                          </Box>
                        )}
                       
                        <Box
                          display="flex"
                          flexDirection="column"
                          onClick={() => {
                            history.push({
                              pathname: item.url,
                            });
                          }}
                        >
                          <Typography variant="h4">{item.title}</Typography>
                          <Typography
                            className={classes.cardContent}
                            color="textSecondary"
                          >
                            {item.body}
                          </Typography>
                          <hr style={{width:'100%'}}/>
                          <Box className={classes.icon_container}>
                <Box className={classes.icons}>
                <ExpandLessRoundedIcon />
                <ExpandMoreRoundedIcon/>
                <span>$7896
                {/* <FormControl variant="filled" className={classes.formControl}> */}
        {/* <InputLabel id="demo-simple-select-filled-label">Age</InputLabel> */}
        <Select
          // labelId="demo-simple-select-filled-label"
          // id="demo-simple-select-filled"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      {/* </FormControl> */}
                </span>
                <Box className={classes.vertical}></Box>
                </Box>
                <Box className={classes.numbers}>
                <span style={{marginLeft:'0.5rem'}}>num1 <box  className={classes.vertical}></box></span>
                <span style={{marginLeft:'0.5rem'}}>num2 <box  className={classes.vertical}></box></span>
                <span style={{marginLeft:'0.5rem'}}>num3</span>
                </Box>

              </Box>
                        </Box>
                      </Box>
                     
                    </AtomCard>
                    
                  );
                })
              ) : (
                <NoResultFound
                  mainText={filterPath[state.filter]}
                  subText={tag}
                />
              )}
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
