import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Img from 'react-cool-img';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px'
  },
  imgContainer: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));

function Gallery(props) {
  const { images } = props;
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {
        images && images.map(image => {
          return (
            <Grid item xs={3} key={`container-image-` + Math.random()}>
              <Paper className={classes.paper}>
                <div className={classes.imgContainer}>
                  {image.name}
                  <Img
                    style={{ backgroundColor: 'grey', width: '100', height: '100' }}
                    className={classes.img}
                    src={`http://localhost:8000/${image.path}`}
                    alt="React Cool Img"
                    cache
                    debounce={1000}
                  />
                </div>
              </Paper>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Gallery;