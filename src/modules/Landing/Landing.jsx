import { Box, FormControl, Grid, Select, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./landing.style";
import {
  ArticleCard,
  AtomAvatar,
  AtomCard,
  NoResultFound,
} from "../../common/components";
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
                  <Typography variant="h4">
                    {tag ? `#${tag}` : "All News"}
                  </Typography>
                  {tag ? (
                    <Typography className={classes.unModerated}>
                      Unmoderated tag
                    </Typography>
                  ) : null}
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
                    <Box key={item.post_id}>
                      <ArticleCard
                        author={item.author}
                        author_reputation={item.author_reputation}
                        created={item.created}
                        filter={state.filter}
                        json_metadata={item.json_metadata}
                        title={item.title}
                        body={item.body}
                        postUrl={item.url}
                        totalVote={item.stats.total_votes}
                        messages={item.children}
                        payout={item.payout}
                        payoutAt={item.payout_at}
                      />
                    </Box>
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
