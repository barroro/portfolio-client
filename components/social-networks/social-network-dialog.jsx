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
import { useForm } from 'react-hook-form';
import { Input } from '../controls';
import { DevTool } from 'react-hook-form-devtools';

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

  const { control, handleSubmit, register, errors, formState, getValues, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const { color, icon } = getValues();

  const handleClose = () => {
    dispatch(socialNetworkActions.closeSocialNetworkModalAction({ open: false, data: null }));
  };

  useEffect(() => {
    if (modal.editing) {
      reset({
        title: modal.data.title,
        url: modal.data.url,
        color: modal.data.color,
        icon: modal.data.icon
      });
    } else {
      reset({
        title: '',
        url: '',
        color: '',
        icon: ''
      });
    }
  }, [modal, reset])

  const onSubmit = data => {
    if (modal.editing) {
      dispatch(socialNetworkActions.updateSocialNetworkAction({
        id: modal.data.id,
        title: data.title,
        url: data.url,
        color: data.color,
        icon: data.icon
      }));
    } else {
      dispatch(socialNetworkActions.createSocialNetworkAction(values));
    }
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={modal.open}>
      <DialogTitle id="simple-dialog-title">{modal.editing ? 'Modificar red social' : 'Nueva red social'}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                register={register}
                name="title"
                label="Título"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                register={register}
                name="url"
                label="Url"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={11}>
                  <Input
                    register={register}
                    name="color"
                    label="Color"
                  />
                </Grid>
                <Grid item xs={1}>
                  <span className={classes.circle} style={{ backgroundColor: color }}></span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={11}>
                  <Input
                    register={register}
                    name="icon"
                    label="Icono"
                    helperText="Ejemplo: fab fa-pinterest (Como indica en el página de font-awesome)"
                  />
                </Grid>
                <Grid item xs={1}>
                  <i className={icon} style={{ fontSize: '26px' }}></i>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
              </Button>
          <Button type="submit" color="primary" autoFocus disabled={!formState.isValid || socialNetworkSaving}>
            {socialNetworkSaving ? 'Guardando...' : 'Guardar'}
          </Button>
        </DialogActions>
      </form>
      <DevTool control={control} />
    </Dialog>
  );
}

export default SocialNetworkDialog;