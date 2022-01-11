import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../../common/components/header/Header';
import { useStyles } from './user.style';

function User() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
        <Header />
            
        </div>
    )
}

export default User
