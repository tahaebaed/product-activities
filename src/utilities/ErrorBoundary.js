import { useErrorBoundary } from 'react-use-error-boundary'

const ErrorBoundary = ({ children }) => {
  const [error, resetError] = useErrorBoundary((error, errorInfo) =>
    console.error(error, errorInfo)
  )
  if (error) {
    return (
      <div>
        <p>{error.message}</p>
        <button onClick={resetError}>Try again</button>
      </div>
    )
  }

  return <div>{children}</div>
}

export default ErrorBoundary
