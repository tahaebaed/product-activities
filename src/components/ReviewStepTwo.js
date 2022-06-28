import { Button, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { object, string } from 'yup'
import { handleAddToPurchased } from '../store/purchased-product/actions'
import InputTextField from './InputTextField'

const initialValues = {
  address: '',
  phone: '',
  email: '',
}

const validationSchema = object({
  address: string().required('we need your address to confirm the purchase'),
  phone: string().required('we need your phone to confirm the purchase'),
  email: string()
    .email('please enter a valid email')
    .required('we need the email to confirm the purchase'),
})

const ReviewStepTwo = ({ handleBack, handleNext }) => {
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
      name: 'phone',
      label: 'Phone',
      placeholder: 'Phone Number...',
      type: 'text',
    },
  ]

  const reviewList = useSelector(state => state.review)
  const dispatch = useDispatch()
  const onSubmit = values => {
    setTimeout(() => {
      dispatch(handleAddToPurchased(reviewList, values))
      handleNext()
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
          <Grid container spacing={3}>
            {inputFields.map((input, index) => (
              <Grid item key={index} xs={12}>
                <InputTextField
                  fieldName={input.name}
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container mt={4} justifyContent='space-between'>
            <Grid item>
              <Button variant='text' color='error' onClick={handleBack}>
                back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                type='submit'
                disabled={!formik.isValid || formik.isSubmitting}
              >
                next
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default ReviewStepTwo
