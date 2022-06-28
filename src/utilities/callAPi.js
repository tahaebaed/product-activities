import { useQuery } from 'react-query'

function CallAPi({
  QueryName,
  watchers,
  method,
  headers,
  params,
  url,
  data,
  body,
  axios,
  enabled,
  cacheTime,
  retry,
  onError,
  onSuccess,
  onSettled,
  refetchOnWindowFocus,
  instance,
}) {
  const query = watchers ? [QueryName, ...watchers] : QueryName

  const axiosRequest = () =>
    instance.request({ method, url, data, headers, params })

  const fetchCall = async () => {
    const request = await fetch(url, {
      method,
      headers,
      body,
    })
    const response = request.json()
    return response
  }

  const axiosOrFetchCall = axios ? axiosRequest : fetchCall

  const api = useQuery(query, axiosOrFetchCall, {
    enabled,
    cacheTime,
    retry,
    onError,
    onSuccess,
    onSettled,
    refetchOnWindowFocus,
  })

  return api
}

export default CallAPi
