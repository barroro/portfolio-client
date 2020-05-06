import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Img from 'react-cool-img';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import PreviewImagesDialog from './preview-images-dialog';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
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
  },
  imgSelectContainer: {
    position: 'relative',
    display: 'flex',
    minHeight: '100px',
    padding: '20px'
  },
  helperContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function ImageSelect(props) {

  const classes = useStyles();
  const { imagesSelected, onChange } = props;
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesSelected);
  }, [imagesSelected])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (values) => {
    if (values) {
      onChange(values);
      setImages(values);
    }
    setOpen(false);
  };

  const removeImage = (i) => {
    images.splice(i, 1);
    setImages(images);
    onChange(images);
  }

  return (
    <Paper variant="outlined" className="img-select-container">
      <Grid container spacing={3}>
        <PreviewImagesDialog open={open} onClose={handleClose} values={images} />
        {
          images && images.length > 0 ? (
            <IconButton size="small" style={{ position: 'absolute', top: '2px', right: '2px' }} onClick={handleClickOpen}>
              <AddIcon />
            </IconButton>
          ) : (
              <Grid item xs={12} className="helper-container">
                <Button variant="outlined" color="primary" onClick={handleClickOpen} size="small">Selecciona imagenes</Button>
              </Grid>
            )
        }
        {
          images && images.map((image, i) => {
            return (
              <Grid item xs={4} key={`container-image-` + Math.random()}>
                <Paper variant="outlined" className="preview-img-item">
                  <div className="overlay-container">
                    <IconButton size="small" onClick={() => removeImage(i)}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div className="img-container">
                    <Img
                      style={{ backgroundColor: 'grey', width: '100', height: '100' }}
                      src={`http://localhost:8000/${image.path}`}
                      alt="React Cool Img"
                      cache
                    />
                  </div>
                  <div className="img-title">
                    <span>{image.name}</span>
                  </div>
                </Paper>
              </Grid>
            )
          })
        }
      </Grid>
    </Paper>
  )
}

export default ImageSelect;