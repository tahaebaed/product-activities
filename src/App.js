import { ToastContainer } from 'react-toastify'
import Screens from './pages/Index'
import ErrorBoundary from './utilities/ErrorBoundary'

import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import { handleLoginWithToken } from './store/auth/actions'
// import CallAPi from './utilities/callAPi'
import { useDispatch } from 'react-redux'
// import { handleLoginWithToken } from './store/auth/actions'
// import { userInstance } from './utilities/axiosInstance'

const App = () => {
  const dispatch = useDispatch()
  // CallAPi({
  //   QueryName: 'User Via token',
  //   axios: true,
  //   url: '/user/me',
  //   method: 'GET',
  //   retry: 0,
  //   refetchOnWindowFocus: false,
  //   onSuccess: res => dispatch(handleLoginWithToken(res.data)),
  //   instance: userInstance,
  //   enabled: !!localStorage.getItem('token'),
  // })

  !!localStorage.getItem('token') &&
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(localStorage.getItem('token')), 2000)
    }).then(res => {
      const users = JSON.parse(localStorage.getItem('users'))
      const getUser = users.filter(user => user.token === res)
      dispatch(handleLoginWithToken(getUser[0]))
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
