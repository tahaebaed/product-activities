import { ToastContainer } from 'react-toastify'
import Screens from './pages/Index'
import ErrorBoundary from './utilities/ErrorBoundary'

import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

const App = () => (
  <div className='App'>
    <ErrorBoundary>
      <Screens />
      <ToastContainer position='bottom-right' />
    </ErrorBoundary>
  </div>
)

export default App
