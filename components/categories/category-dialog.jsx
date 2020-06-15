import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { categoryActions } from '../../redux/store/actions/CategoryActions';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { DevTool } from "react-hook-form-devtools";
import Grid from '@material-ui/core/Grid';
import { Input } from '../controls';

function CategoryDialog(props) {

  const dispatch = useDispatch();
  const { category, categorySaving, modal } = useSelector(state => state.categoryReducer)

  const [values, setValues] = useState({ name: '', description: '' });

  const { control, handleSubmit, register, errors, formState, setValue } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  // const { fields, append, prepend, remove } = useFieldArray({
  //   control,
  //   name: "sections"
  // });

  const onSubmit = data => {
    if (modal.editing) {
      dispatch(categoryActions.updateCategoryAction({
        id: modal.data.id,
        name: data.name,
        description: data.description
      }));
    } else {
      dispatch(categoryActions.createCategoryAction(data));
    }
  };

  const handleClose = () => {
    dispatch(categoryActions.closeCategoryModalAction({ open: false, data: null }));
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                register={register({ required: true })}
                name="name"
                defaultValue={values.name}
                label="Nombre categoria"
                error={!!errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                register={register}
                name="description"
                defaultValue={values.description}
                label="Descripción categoria"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" color="primary" autoFocus disabled={!formState.isValid || categorySaving}>
            {categorySaving ? 'Guardando...' : 'Guardar'}
          </Button>
        </DialogActions>
      </form>
      {/* <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              inputRef={register({ required: true })}
              error={!!errors.name}
              label="Nombre categoria"
              name="name"
              size="small"
              variant="outlined"
              margin="dense">
            </TextField>
          </div>
          <div>
            <TextField
              inputRef={register}
              label="Descripción categoria"
              name="description"
              size="small"
              variant="outlined"
              margin="dense">
            </TextField>
          </div>
          <div>
            <FormControl variant="outlined" size="small" margin="dense" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Tipo</InputLabel>
              <Controller as={Select} name="type" control={control}>
                <MenuItem value={1}>Sección con galería</MenuItem>
                <MenuItem value={2}>Sección con carousel</MenuItem>
                <MenuItem value={3}>Sección sin imagenes</MenuItem>
              </Controller>
            </FormControl>
          </div>
          <div>
            <Controller
              as={ImageSelect}
              name="reactSelect"
              control={control}
              onChange={([selected]) => {
                console.log('values: ', selected);
                // React Select return object instead of value for selection
                return { value: selected };
              }}
              defaultValue={{}}
            />
          </div>
          <ul>
            {fields.map((item, index) => (
              <li key={item.id}>
                <TextField
                  inputRef={register({ required: true })}
                  label="Nombre sub categoria"
                  name={`sections[${index}].name`}
                  size="small"
                  variant="outlined"
                  defaultValue={`${item.name}`}
                  margin="dense">
                </TextField>
                <TextField
                  inputRef={register()}
                  label="Descripción sub categoria"
                  name={`sections[${index}].desc`}
                  defaultValue={`${item.desc}`}
                  size="small"
                  variant="outlined"
                  margin="dense">
                </TextField>
                <div>
                  <Controller
                    as={ImageSelect}
                    name={`sections[${index}].images`}
                    control={control}
                    onChange={([selected]) => {
                      return selected;
                    }}
                    defaultValue={{}}
                  />
                </div>
                <button onClick={() => remove(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <section>
            <button type="button" onClick={() => append({ name: "test", desc: 'test' })} >
              append
            </button>
          </section>
          <input type="submit" disabled={!formState.isValid} />
        </form>
      </DialogContent> */}
      {/* <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
      </DialogActions> */}
      <DevTool control={control} />
    </Dialog>
  );
}

export default CategoryDialog;

/*
<Grid container spacing={2}>
  <Grid item xs={12}>
    <TextField
      fullWidth
      inputRef={register({ required: true })}
      error={!!errors.name}
      label="Nombre categoria"
      name="name"
      size="small"
      variant="outlined"
      defaultValue={values.name}
      margin="dense">
    </TextField>
  </Grid>
  <Grid item xs={12}>
    <TextField
      fullWidth
      inputRef={register}
      label="Descripción categoria"
      name="description"
      size="small"
      variant="outlined"
      defaultValue={values.description}
      margin="dense">
    </TextField>
  </Grid>
</Grid>
*/