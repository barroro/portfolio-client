import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import { categoryActions } from '../../redux/store/actions/CategoryActions';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
});

function CategoryDialog(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { category, categorySaving, modal } = useSelector(state => state.categoryReducer)
  const { onClose } = props;
  const [files, setFiles] = useState([]);

  const [values, setValues] = useState({ name: '', description: '' });

  const handleClose = () => {
    dispatch(categoryActions.closeCategoryModalAction({ open: false, data: null }));
  };

  // const updateValues = () => {
  //   setValues({ name: 'test', description: 'test' });
  // }

  useEffect(() => {
    if (modal.editing) {
      setValues({ name: modal.data.name, description: modal.data.description })
    } else {
      setValues({ name: '', description: '' })
    }
  }, [modal])

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={modal.open}>
      <DialogTitle id="simple-dialog-title">{modal.editing ? 'Modificar categoria' : 'Nueva categoria'}</DialogTitle>
      <Formik
        enableReinitialize
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (modal.editing) {
            dispatch(categoryActions.updateCategoryAction({
              id: modal.data.id,
              name: values.name,
              description: values.description
            }));
          } else {
            dispatch(categoryActions.createCategoryAction(values));
          }
          //onClose(files);
          setSubmitting(false);
        }}>
        {({ values, isSubmitting, handleChange, handleBlur, isValid }) => (
          <Form>
            <DialogContent>
              <div>
                <TextField
                  label="Nombre categoria"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  variant="outlined"
                  margin="dense">
                </TextField>
              </div>
              <div>
                <TextField
                  label="Descripción categoria"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  variant="outlined"
                  margin="dense">
                </TextField>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button type="submit" color="primary" autoFocus disabled={!isValid}>
                {categorySaving ? 'Guardando...' : 'Guardar'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

export default CategoryDialog;