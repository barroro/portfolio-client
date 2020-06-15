import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import DropzoneImages from '../dropzones/dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { imageActions } from '../../redux/store/actions/ImageActions';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function UploadImageDialog(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { imageUploading, modal } = useSelector(state => state.imageReducer)
  const { onClose, selectedValue, open } = props;
  const [files, setFiles] = useState([]);

  const handleClose = () => {
    //onClose(selectedValue);
    dispatch(imageActions.closeModalAction());
  };

  const uploadImage = () => {
    const data = new FormData();
    files.forEach((f, i) => {
      data.append('image[]', f);
    });
    dispatch(imageActions.uploadImageAction(data));
    //onClose(files);
  };

  const onDropFiles = (files) => {
    setFiles(files);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={modal.open}>
      <DialogTitle id="simple-dialog-title">Subir imagenes</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Arrastra las imagenes al contenedor para poder subirlas
        </DialogContentText>
        <DropzoneImages onChange={onDropFiles} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={uploadImage} color="primary" autoFocus>
          {imageUploading ? 'Subiendo...' : 'Subir imagenes'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UploadImageDialog;