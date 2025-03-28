import {useState, useCallback} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'GET', formData = null, headers = {}) => {
    setLoading(true)
    try {
         headers['Accept'] = 'application/json'

      const response = await fetch(url, {method, body: formData, headers})
      const data = await response.json();
      if (!response.ok) {

        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)

      return data;
    } catch (e) {
      setLoading(false)
      setError(e.message)
       throw e
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])
  return { loading, request, error, clearError, setError }
}