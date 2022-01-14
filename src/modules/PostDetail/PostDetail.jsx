import React from 'react';
import {Box} from "@material-ui/core"
import Header from "../../common/components/header/Header";
import { useStyles } from './postDetail.style';
import { useHistory } from 'react-router-dom';
function PostDetail() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Box>
           <Header />
        </Box>
    )
}

export default PostDetail
