import React, { useEffect, Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
}));

function LoadingContainer(props) {
  const classes = useStyles();
  const { children, opacity } = props;
  return (
    <div className={classes.overlayContainer}>
      {children ? children : <CircularProgress />}
    </div>
  )
}

export default LoadingContainer;