import TextField from '@mui/material/TextField'
import { Field } from 'formik'
import React from 'react'

const InputTextField = ({ fieldName, label, type, placeholder }) => (
  <>
    <Field name={fieldName}>
      {({ field, form }) => (
        <>
          <TextField
            fullWidth
            type={type}
            label={label}
            error={form.touched[fieldName] && !!form.errors[fieldName]}
            helperText={
              form.touched[fieldName] &&
              !!form.errors[fieldName] &&
              form.errors[fieldName]
            }
            placeholder={placeholder}
            {...field}
          />
        </>
      )}
    </Field>
  </>
)

export default InputTextField
