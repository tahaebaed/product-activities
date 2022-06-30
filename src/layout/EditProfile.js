import { Button, CircularProgress, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { number, object, string } from 'yup'
import InputTextField from '../components/InputTextField'
import { UploadImg } from '../components/UploadImg'
import { handleEdit } from '../store/auth/actions'

import '../sass/EditProfile.scss'

const EditProfile = () => {
  const initialValues = {
    address: '',
    phone: '',
    email: '',
    name: '',
    age: '',
    avatar: '',
  }

  const validationSchema = object({
    address: string().required('we need your address to confirm the purchase'),
    phone: string().required('we need your phone to confirm the purchase'),
    email: string()
      .email('please enter a valid email')
      .required('we need the email to confirm the purchase'),
    name: string().required(),
    age: number().required(),
  })

  const inputFields = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'email address...',
      type: 'email',
    },
    {
      name: 'address',
      label: 'Address',
      placeholder: 'address...',
      type: 'text',
    },

    {
      name: 'name',
      label: 'Name',
      placeholder: 'Your Display name...',
      type: 'text',
    },
    {
      name: 'phone',
      label: 'Phone',
      placeholder: 'Phone Number...',
      type: 'text',
    },
    {
      name: 'age',
      label: 'Age',
      placeholder: 'You Age...',
      type: 'number',
    },
  ]

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const onSubmit = values =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(JSON.stringify(values)), 2000)
    })
      .then(res => {
        dispatch(handleEdit(JSON.parse(res)))
        toast.success('Edit successfully')
      })
      .catch(function (error) {
        alert('The error is handled, continue normally')
      })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <Grid container spacing={3} p={6} direction='row'>
            {inputFields.map((input, index) => (
              <Grid item key={index} xs={6}>
                <InputTextField
                  fieldName={input.name}
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                />
              </Grid>
            ))}
            <Grid item xs={6}>
              <UploadImg name='avatar' user={user} {...formik} />
            </Grid>
          </Grid>
          <Grid container mt={4} justifyContent='center'>
            <Grid item>
              <Button
                variant='contained'
                type='submit'
                disabled={!formik.isValid || formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <>
                    <CircularProgress size='1rem' sx={{ mr: 1 }} /> Editing
                  </>
                ) : (
                  'Edit'
                )}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default EditProfile
