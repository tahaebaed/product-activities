import { Button, CircularProgress, Container, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ref } from 'yup'
import { object, string, number } from 'yup'

import InputTextField from '../components/InputTextField'
import { signUpHandle } from '../store/auth/actions'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  age: 0,
}

const validationSchema = object({
  email: string()
    .email('please enter valid Email')
    .required('Email is required'),
  name: string().required('name is required'),
  password: string()
    .min(8, 'password need to be bigger than 8 characters')
    .max(14, 'password need to be less than 14 characters')
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/
    )
    .required('password is required'),
  confirmPassword: string()
    .required()
    .oneOf([ref('password'), null], 'Passwords must match'),
  age: number()
    .min(11, 'you need to be at least 11 years old')
    .required('age is required'),
})

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
        users && users.filter(user => user.user.email === values.email)
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
            user: {
              ...JSON.parse(res),
            },
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
  // userInstance
  //   .request({
  //     method: 'POST',
  //     url: '/register',
  //     data: values,
  //   })
  //   .then(res => {
  //     toast.success('sign up is done successfully')

  //     setTimeout(() => {
  //       dispatch(
  //         signUpHandle({
  //           ...res.data.user,
  //         })
  //       )
  //       navigate('/', { replace: true })
  //     })
  //   })
  //   .catch(err => console.log(err.message))
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
            validationSchema={validationSchema}
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
