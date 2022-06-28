import { Button, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { number, object, string } from 'yup'
import InputTextField from '../components/InputTextField'
import { handleAddToPurchased } from '../store/purchased-product/actions'

const EditProfile = () => {
  const initialValues = {
    address: '',
    phone: '',
    email: '',
    name: '',
    age: '',
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

  const reviewList = useSelector(state => state.review)
  const dispatch = useDispatch()
  const onSubmit = values => {
    setTimeout(() => {
      console.log(values)
    }, 2000)
  }
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
          </Grid>
          <Grid container mt={4} justifyContent='center'>
            <Grid item>
              <Button
                variant='contained'
                type='submit'
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default EditProfile
