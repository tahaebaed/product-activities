import logo from './logo.svg'
import './App.css'
import Header from './layout/Header'
import Screens from './pages/Index'
import ErrorBoundary from './utilities/ErrorBoundary'

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Screens />
      </ErrorBoundary>
    </div>
  )
}

export default App
