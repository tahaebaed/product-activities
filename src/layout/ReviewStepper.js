import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import ReviewStepOne from '../components/ReviewStepOne'

const steps = [
  'Review You Products',
  'course pricing details',
  'course lessons',
]

export default function ReviewStepper({ closeModal }) {
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState({})

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length - 1
  }

  const handleNext = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    activeStep < steps.length - 1 &&
      setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleComplete = async values => {}

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepLabel color='inherit'>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          {activeStep === 0 && <ReviewStepOne handleNext={handleNext} />}
        </React.Fragment>
      </div>
    </Box>
  )
}
