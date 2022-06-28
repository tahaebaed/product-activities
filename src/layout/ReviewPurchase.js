import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import ReviewStepper from './ReviewStepper'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function ReviewPurchase({ handleClose, open }) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box sx={style}>
          <Typography id='keep-mounted-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Box id='keep-mounted-modal-description' sx={{ mt: 2 }}>
            <ReviewStepper />
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
