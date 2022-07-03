import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import InputTextField from '../components/InputTextField'
import { UploadImg } from '../components/UploadImg'
import { handleEdit } from '../store/auth/actions'

import '../sass/EditProfile.scss'
import { Container } from '@mui/system'
import { editProfileValidationSchema } from '../utilities/validationsSchemas'

const EditProfile = () => {
  const user = useSelector(state => state.user)

  const initialValues = {
    ...user,
  }

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

  const dispatch = useDispatch()
  const onSubmit = values =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          user
            ? resolve(JSON.stringify(values))
            : reject('something went wrong'),
        2000
      )
    })
      .then(res => {
        dispatch(handleEdit(values))
        toast.success('Edit successfully')
      })
      .catch(error => {
        toast.error('something went wrong')
      })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={editProfileValidationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {formik => (
        <Form>
          <Container>
            <Grid container spacing={3} p={7}>
              <Grid item xs={12}>
                <UploadImg name='avatar' user={user} {...formik} />
              </Grid>
              {inputFields.map((input, index) => (
                <Grid item key={index} xs={12} sm={12}>
                  <InputTextField
                    fieldName={input.name}
                    label={input.label}
                    placeholder={input.placeholder}
                    type={input.type}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent='center'>
              <Grid item>
                <Button
                  size='large'
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
          </Container>
        </Form>
      )}
    </Formik>
  )
}

export default EditProfile
