import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.12)',

    "& .MuiCardContent-root": {
      padding: '10px'
    }
  }
});

export const AtomCard = ({borderRadius, cardStyle,children, ...props}) => {
  const classes = useStyles();

  return (
    <Card 
      style={{borderRadius:borderRadius,...cardStyle}} 
      className={classes.root} 
      {...props}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

AtomCard.propTypes = {
  margin: PropTypes.string,
};

AtomCard.defaultProps = {
  borderRadius: '8px',
};