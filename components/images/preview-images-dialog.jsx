import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Img from 'react-cool-img';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useDispatch, useSelector } from 'react-redux';
import { imageActions } from '../../redux/store/actions/ImageActions';

const useStyles = makeStyles((theme) => ({
  paper: {
    //padding: theme.spacing(2),
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

function PreviewImagesDialog(props) {

  const classes = useStyles();
  const { onClose, open, values } = props;
  const { images } = useSelector(state => state.imageReducer);
  const [imagesSelected, setImageSelected] = useState([]);

  const handleClose = () => {
    onClose(null);
  };

  const done = () => {
    onClose(imagesSelected);
  };

  const toggleImg = (img) => {
    const list = imagesSelected.concat(img);
    setImageSelected(list);
  }

  const getClassNames = (id) => {
    if (!!imagesSelected.find(i => i.id == id)) {
      return classes.paper + ' selected';
    } else {
      return classes.paper
    }
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Imagenes</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Selecciona las imagenes
        </DialogContentText>
        <Grid container spacing={3}>
          {
            images && images.map(image => {
              return (
                <Grid item xs={6} key={`container-image-` + Math.random()}>
                  <Paper variant="outlined" className={getClassNames(image.id)} onClick={() => toggleImg(image)}>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={done} color="primary" autoFocus>
          Listo
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PreviewImagesDialog;