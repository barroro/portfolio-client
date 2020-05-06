import React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import ImageSelect from '../components/images/image-select';

export const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div>
      <TextField
        {...field}
        label={placeholder}
        size="small"
        variant="outlined"
        error={!!errorText}
        helperText={errorText}
        margin="dense">
      </TextField>
    </div>
  )
}

export const MyTextArea = ({ rows, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div>
      <TextField
        rows={rows}
        multiline
        {...field}
        label={placeholder}
        size="small"
        variant="outlined"
        error={!!errorText}
        helperText={errorText}
        margin="dense">
      </TextField>
    </div>
  )
}

export const MySelect = ({ placeholder, ...props }) => {
  const [field, meta, children] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div>
      <FormControl variant="outlined" size="small" margin="dense" fullWidth>
        <InputLabel id="demo-simple-select-filled-label">{placeholder}</InputLabel>
        <Select
          {...field}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          {children}
        </Select>
      </FormControl>
    </div>
  )
}

export function MyImageSelector(props) {
  // This isn't an input, so instead of using the values in 'field' directly,
  // we'll use 'meta' and 'helpers'.
  const [field, meta, helpers] = useField(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  //const isSelected = v => (v === value ? 'selected' : '');

  const onChangeImage = (values) => {
    setValue(values);
  }

  return (
    <ImageSelect onChange={onChangeImage} imagesSelected={value}></ImageSelect>
  );
}