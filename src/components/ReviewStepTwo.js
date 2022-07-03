import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleRemoveToCart } from '../store/products/actions'
import { handleAddToPurchased } from '../store/purchased-product/actions'
import InputTextField from './InputTextField'
import { toast } from 'react-toastify'
import { purchaseValidationSchema } from '../utilities/validationsSchemas'

const initialValues = {
  address: '',
  phone: '',
  email: '',
}

const ReviewStepTwo = ({ handleBack, closeModal }) => {
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
      reviewList.map(prod => dispatch(handleRemoveToCart(prod.id)))
      toast.success('Purchased is done and the products will arrive in 3 days')
      closeModal()
    }, 2000)
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={purchaseValidationSchema}
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
                Confirm
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default ReviewStepTwo
