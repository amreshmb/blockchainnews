import { Box, Container, FormControl, Grid, Select } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./search.style";
import Header from "../../common/components/header/Header";
import ROUTES from "../../common/routeConstants";
import { useHistory } from "react-router-dom";
import { filterSearchOption } from "../../common/constants/enum";
import SearchBar from "material-ui-search-bar";

function Search() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    filter: null,
    searchVal: "",
    data: [],
    loader: false,
  });
  const requestSearch = (searchedVal) => {
    setState({ ...state, searchVal: searchedVal });
  };
  const cancelSearch = () => {
    setState({ ...state, searchVal: "" });
  };
  return (
    <Box className={classes.mainContainer}>
      <Header />
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="1rem" >
            <Box width="100%" marginRight="1rem">
              <SearchBar
                value={state.searchVal}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={cancelSearch}
                onRequestSearch={() => {
                  history.push({
                    pathname: ROUTES.SEARCH,
                    search: `?q=${state.searchVal}&s=newest`,
                  });
                }}
              />
            </Box>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                className={classes.selectOption}
                native
                value={state.filter ? state.filter : ""}
                onChange={(e) => {
                  // const filterItem = newsFilterOption.filter(
                  //   (item) => item.name === e.target.value
                  // );
                  // setState({ ...state, filter: e.target.value });
                  // history.push({
                  //   pathname: `${ROUTES.LANDING}/${filterItem[0].path}`,
                  // });
                }}
              >
                {filterSearchOption.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
      </Container>
    </Box>
  );
}

export default Search;
