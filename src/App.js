import { ToastContainer } from 'react-toastify'
import Screens from './pages/Index'
import ErrorBoundary from './utilities/ErrorBoundary'

import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import CallAPi from './utilities/callAPi'
import { useDispatch } from 'react-redux'
import { handleLoginWithToken } from './store/auth/actions'

const App = () => {
  const dispatch = useDispatch()
  CallAPi({
    QueryName: 'User Via token',
    axios: true,
    url: '/user/me',
    method: 'GET',
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: res => dispatch(handleLoginWithToken(res.data)),
  })

  return (
    <div className='App'>
      <ErrorBoundary>
        <Screens />
        <ToastContainer position='bottom-right' />
      </ErrorBoundary>
    </div>
  )
}

export default App
