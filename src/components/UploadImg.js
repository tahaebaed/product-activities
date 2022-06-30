import { PhotoCamera } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Field } from 'formik'
import React, { useEffect, useState } from 'react'

export const UploadImg = ({ user, setFieldValue, name, ...rest }) => {
  const [fileImg, setFileImg] = useState(null)

  useEffect(() => {
    if (fileImg) {
      const reader = new FileReader()
      reader.onload = () => {
        setFieldValue('avatar', reader.result)
      }
      reader.readAsDataURL(fileImg)
    }
  }, [fileImg, setFieldValue, user.avatar])
  return (
    <Field name={name}>
      {({ form, field }) => {
        return (
          <label className='profile-avatar' htmlFor='icon-button-file'>
            <img
              className='profile-avatar_img'
              src={
                rest.values.avatar ||
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png'
              }
              alt='instructor avatar'
            />
            <input
              accept='image/*'
              id='icon-button-file'
              type='file'
              error={form.errors.instructorImg && form.touched.instructorImg}
              onChange={e => {
                const file = e.target.files[0]
                if (file && file.type.substring(0, 5) === 'image') {
                  setFileImg(file)
                } else {
                  setFileImg(null)
                }
              }}
              style={{ display: 'none' }}
            />
            <div className='profile-avatar_img-icon'>
              <IconButton
                color={user.avatar ? 'success' : 'primary'}
                aria-label='upload picture'
                component='span'
              >
                <PhotoCamera />
              </IconButton>
            </div>
          </label>
        )
      }}
    </Field>
  )
}