import React, { useEffect, useState } from "react";
import { getAccountPost } from "../../common/service";
import { useParams } from "react-router-dom";
import { ArticleCard, NoResultFound } from "../../common/components";
import { Box, CircularProgress } from "@material-ui/core";

function Blogs() {
  const [state, setState] = useState({
    data: [],
    loader: false,
  });
  const { authorName } = useParams();
  useEffect(() => {
    const reqData = {
      params: {
        sort: "blog",
        observer: "hive.blog",
        account: authorName.split("@")[1],
      },
      id: 7,
    };
    setState({ ...state, loader: true });
    getAccountPost(reqData).then((res) => {
      if (res.result) {
        setState({ ...state, loader: false, data: res.result });
      }
    });
  }, []);
  return (
    <Box margin="1rem 0.5rem">
      {state.loader ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : state.data.length > 0 ? (
        state.data.map((item) => {
          return (
            <Box key={item.post_id}>
              <ArticleCard
                author={item.author}
                author_reputation={item.author_reputation}
                created={item.created}
                filter="Trending"
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
        <NoResultFound mainText="Trending" subText="" />
      )}
    </Box>
  );
}

export default Blogs;
