import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

const useRegister = () => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const register = useCallback(async ({ username, email, password }) => {
    try {
      setIsLoading(true)
      const _response = await fetch(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      })
      const _responseJSON = await _response.json()
      if (_response.ok) {
        setResponse(_responseJSON)
        setIsLoading(false)
        toast.success('Compte créé avec succès')
      } else {
        setError(_responseJSON?.error?.message)
        toast.error(_responseJSON?.error?.message)
      }
    } catch (e) {
      setError(e)
      setIsLoading(false)
    }
  }, [])
  return { response, error, isLoading, register }
}

export { useRegister }
