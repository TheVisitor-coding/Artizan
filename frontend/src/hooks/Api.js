import { useEffect, useState } from 'react'

// Hook Custom React pour Fetch de la data depuis une URL
const useFetch = (url) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const _response = await fetch(url)
        const _responseJSON = await _response.json()
        setResponse(_responseJSON.data)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setError(e)
      }
    }
    getData()
  }, [url])

  return { response, error, isLoading }
}

export {
  useFetch
}
