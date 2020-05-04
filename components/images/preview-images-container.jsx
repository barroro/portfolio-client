import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'react-cool-img';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&.selected': {
      backgroundColor: "rgba(88, 55, 218, 0.2)",
      borderColor: 'rgba(88, 55, 218, 0.5)'
    }
  },
  imgContainer: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '150px'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  imgTitle: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function PreviewImagesContainer(props) {

  const classes = useStyles();
  const { images } = props;

  return (
    <Grid container spacing={3}>
      {
        images && images.map(image => {
          return (
            <Grid item xs={4} key={`container-image-` + Math.random()}>
              <Paper variant="outlined" className={classes.paper}>
                <div className={classes.imgContainer}>
                  <Img
                    style={{ backgroundColor: 'grey', width: '100', height: '100' }}
                    className={classes.img}
                    src={`http://localhost:8000/${image.path}`}
                    alt="React Cool Img"
                  />
                </div>
                <div className={classes.imgTitle}>
                  <span>{image.name}</span>
                </div>
              </Paper>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default PreviewImagesContainer;