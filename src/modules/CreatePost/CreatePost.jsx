import { Box, Container } from "@material-ui/core";
import React from "react";
import { AtomCard } from "../../common/components";
import Header from "../../common/components/header/Header";
import { useStyles } from "./createPost.style";

function CreatePost() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Container>
        <AtomCard className={classes.noLogin}>
          <Box>
            <Box>Log in to make a post.</Box>
          </Box>
        </AtomCard>
      </Container>
    </Box>
  );
}

export default CreatePost;
