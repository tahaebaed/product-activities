import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import InputTextField from '../components/InputTextField'
import { signUpHandle } from '../store/auth/actions'
import { signUpValidationSchema } from '../utilities/validationsSchemas'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  age: 0,
}

const SignUp = () => {
  const navigate = useNavigate()
  const inputFields = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'email address...',
      type: 'email',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'password ...',
      type: 'password',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'confirm password ...',
      type: 'password',
    },
    {
      name: 'name',
      label: 'Name',
      placeholder: 'full name...',
      type: 'text',
    },
    {
      name: 'age',
      label: 'Age',
      placeholder: 'age...',
      type: 'number',
    },
  ]
  const dispatch = useDispatch()
  const handleSubmit = values =>
    new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users'))
      const emailCheck =
        users && users.filter(user => user.email === values.email)
      setTimeout(
        () =>
          emailCheck?.length > 0
            ? reject('This email is used before')
            : resolve(JSON.stringify(values)),
        2000
      )
    })
      .then(res => {
        dispatch(
          signUpHandle({
            ...JSON.parse(res),
            avatar: '',
            token:
              Math.random().toString(36).substr(2) +
              Math.random().toString(36).substr(2),
          })
        )
        toast.success('register successfully')
        navigate('/user/products')
      })
      .catch(function (error) {
        toast.error(error)
      })

  return (
    <Container maxWidth='md' sx={{ margin: '6rem auto' }}>
      <h2>SIGN UP</h2>
      <Grid container alignItems='center'>
        <Grid item xs={12} md={6}>
          <img
            src='https://www.register.com/_jcr_content/root/section_338972426/responsivecolumns_20/column-2/itl_copy_copy.coreimg.jpeg/1610563184423/triffold3.jpeg'
            alt=''
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <Grid
                  container
                  justifyContent='center'
                  spacing={3}
                  sx={{ my: 'auto' }}
                >
                  {inputFields.map((field, index) => (
                    <Grid
                      xs={12}
                      md={
                        field.name === 'age' || field.name === 'name' ? 6 : 12
                      }
                      sx={{ maxHeight: '110px', minHeight: '102px' }}
                      item
                      key={index}
                    >
                      <InputTextField
                        type={field.type}
                        placeholder={field.placeholder}
                        fieldName={field.name}
                        label={field.label}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Button
                  fullWidth
                  type='submit'
                  variant='contained'
                  sx={{ mt: 5 }}
                  disabled={!formik.isValid || formik.isSubmitting}
                  startIcon={
                    formik.isSubmitting && <CircularProgress size='0.9rem' />
                  }
                >
                  sign up
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SignUp
