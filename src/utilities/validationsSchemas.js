import { object, string, number, ref } from 'yup'

export const purchaseValidationSchema = object({
  address: string().required('we need your address to confirm the purchase'),
  phone: string().required('we need your phone to confirm the purchase'),
  email: string()
    .email('please enter a valid email')
    .required('we need the email to confirm the purchase'),
})

export const loginValidationSchema = object({
  email: string()
    .email('please enter valid Email')
    .required('Email is required'),

  password: string()
    .min(8, 'password need to be bigger than 8 characters')
    .max(14, 'password need to be less than 14 characters')
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/
    )
    .required('password is required'),
})

export const signUpValidationSchema = object({
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

export const editProfileValidationSchema = object({
  address: string().required('we need your address to confirm the purchase'),
  phone: string().required('we need your phone to confirm the purchase'),
  email: string()
    .email('please enter a valid email')
    .required('we need the email to confirm the purchase'),
  name: string().required(),
  age: number().required(),
})
