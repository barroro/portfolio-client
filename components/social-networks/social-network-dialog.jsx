import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import { socialNetworkActions } from '../../redux/store/actions/socialNetworkActions';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  circle: {
    display: 'flex',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
});

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Required'),
  url: Yup.string()
    .required('Required'),
  color: Yup.string()
    .required('Required'),
  icon: Yup.string()
    .required('Required')
});

function SocialNetworkDialog(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { socialNetwork, socialNetworkSaving, modal } = useSelector(state => state.socialNetworkReducer)

  const [values, setValues] = useState({ title: '', url: '', color: '', icon: '' });

  const handleClose = () => {
    dispatch(socialNetworkActions.closeSocialNetworkModalAction({ open: false, data: null }));
  };

  useEffect(() => {
    if (modal.editing) {
      setValues({
        title: modal.data.title,
        url: modal.data.url,
        color: modal.data.color,
        icon: modal.data.icon
      })
    } else {
      setValues({
        title: '',
        url: '',
        color: '',
        icon: ''
      })
    }
  }, [modal])

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={modal.open}>
      <DialogTitle id="simple-dialog-title">{modal.editing ? 'Modificar red social' : 'Nueva red social'}</DialogTitle>
      <Formik
        enableReinitialize
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (modal.editing) {
            dispatch(socialNetworkActions.updateSocialNetworkAction({
              id: modal.data.id,
              title: values.title,
              url: values.url,
              color: values.color,
              icon: values.icon
            }));
          } else {
            dispatch(socialNetworkActions.createSocialNetworkAction(values));
          }
          //onClose(files);
          setSubmitting(false);
        }}>
        {({ values, isSubmitting, handleChange, handleBlur, isValid }) => (
          <Form>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Título"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="small"
                    variant="outlined"
                    margin="dense">
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Url"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="small"
                    variant="outlined"
                    margin="dense">
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={11}>
                      <TextField
                        fullWidth
                        label="Color"
                        name="color"
                        value={values.color}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        size="small"
                        variant="outlined"
                        margin="dense">
                      </TextField>
                    </Grid>
                    <Grid item xs={1}>
                      <span className={classes.circle} style={{ backgroundColor: values.color }}></span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={11}>
                      <TextField
                        fullWidth
                        label="Icono"
                        name="icon"
                        value={values.icon}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        size="small"
                        helperText="Ejemplo: fab fa-pinterest (Como indica en el página de font-awesome)"
                        variant="outlined"
                        margin="dense">
                      </TextField>
                    </Grid>
                    <Grid item xs={1}>
                      <i className={values.icon} style={{ fontSize: '26px' }}></i>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button type="submit" color="primary" autoFocus disabled={!isValid}>
                {socialNetworkSaving ? 'Guardando...' : 'Guardar'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

export default SocialNetworkDialog;