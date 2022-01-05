import { Box, FormControl, Grid, Select, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./landing.style";
import { AtomAvatar, AtomCard } from "../../common/components";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Header from "../../common/components/header/Header";
import { newsFilterOption } from "../../common/constants/enum";
import { Link, useHistory } from "react-router-dom";
import ROUTES from "../../common/routeConstants";
import { getRankedPost } from "../../common/service";
import { useLocation } from "react-router-dom";

const Landing = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search);
  const sortBy = searchQuery.get("sortBy");
  const [state, setState] = useState({ filter: null, data: [], loader: false });
  useEffect(() => {
    const filterItem = newsFilterOption.filter((item) => item.path === sortBy);
    if (filterItem.length) {
      setState({ ...state, loader: true });
      const reqData = {
        params: { sort: sortBy, tag: "", observer: "" },
        id: 1,
      };
      getRankedPost(reqData)
        .then((res) => {
          setState({ ...state, loader: false });
          if(res.result){
            setState({ ...state, data: res.result, filter: filterItem[0].name });
          }
        })
        .catch((e) => {
          setState({ ...state, loader: false });
        });
    }
  }, [sortBy]);
  return (
    <div className={classes.mainContainer}>
      <Header />
      <Grid container spacing={1} className={classes.content}>
        <Grid item xs={12} sm={3} lg={2}>
          <AtomCard className={classes.leftSidePanel}>
            <ul className={classes.sideList}>
              <li>my feed</li>
              <li>trending cat 1</li>
              <li>trending cat 2</li>
              <li>trending cat 3</li>
              <li>trending cat 4</li>
              <li>trending cat 5</li>
              <li>trending cat 5</li>
              <li>link to trending cat</li>
              <li>link to popular tags</li>
              <li>guid/blog url</li>
            </ul>
          </AtomCard>
        </Grid>
        <Grid item xs={12} className={classes.blogContent} sm={7} lg={9}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"            
          >
            <Box>
              <Typography>All Post</Typography>
            </Box>
            <Box>
              <FormControl variant="outlined" className={classes.formControl}>
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
                      pathname: ROUTES.LANDING,
                      search: `?sortBy=${filterItem[0].path}`,
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
         {state.data.length>0 && state.data.map(item=>{
          return <AtomCard key={item.post_id} className={classes.postCard}>
            <Box display="flex" paddingBottom="5px">
              <AtomAvatar
                avatarLabel={<PersonOutlineIcon className={classes.avatar} />}
              />
              <strong className={classes.plr5}>
                <Link className={classes.navLink} to="/">
                  {" "}
                  {item.author}
                </Link>
              </strong>
              <span className={classes.pr5}>in</span>
              <Link className={classes.navLink} to="/">
                {}
              </Link>
              <span className={classes.plr5}> • </span>
              <Link className={classes.navLink} to="/">
                19 hour ago
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              {item.json_metadata && item.json_metadata.image && <Box paddingRight="12px">
                <img className={classes.postImage} src={item.json_metadata.image[0]} alt="profile" />
              </Box>}
              <Box display="flex" flexDirection="column" onClick={()=>{
                history.push({
                  pathname: item.url
                })
              }}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography color="textSecondary">{item.title}</Typography>
              </Box>
            </Box>
          </AtomCard>
         }) }
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
