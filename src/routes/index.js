import { Routes, Route } from 'react-router-dom'
import React from 'react'

import Index from '../pages/Index'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  )
}

export default index
