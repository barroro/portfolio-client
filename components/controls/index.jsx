import { TextField } from "@material-ui/core"

export function Input({ label, register, name, ...rest }) {
  return (
    <TextField
      fullWidth
      inputRef={register}
      label={label}
      name={name}
      size="small"
      variant="outlined"
      {...rest}
      margin="dense">
    </TextField>
  )
}