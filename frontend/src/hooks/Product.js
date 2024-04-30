import axios from 'axios'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

const useUpdateProduct = () => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const update = useCallback(async ({ nameProduct, descriptionProduct, priceProduct, id, token }) => {
    try {
      setIsLoading(true)

      const _response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ data: { name: nameProduct, description: descriptionProduct, price: priceProduct } })
        })
      const _responseJSON = await _response.json()
      if (_response.ok) {
        setIsLoading(false)
        setResponse(_responseJSON)
        toast.success('Vos informations ont bien été modifiées')
      } else {
        setError(_responseJSON?.error?.message)
        setIsLoading(false)
        toast.error(_responseJSON?.error?.message)
      }
    } catch (e) {
      setError(e)
      setIsLoading(false)
    }
  }, [])
  return { response, error, isLoading, update }
}

const useDeleteProduct = () => {
  const [deleteResponse, setDeleteResponse] = useState()
  const [error, setError] = useState()
  const [deleteIsLoading, setDeleteIsLoading] = useState(false)

  const deleteProduct = useCallback(async ({ _id, jwt }) => {
    try {
      setDeleteIsLoading(true)
      const _response = await axios.delete(`${process.env.REACT_APP_API_URL}/products/${_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${jwt}`
        }
      })
      if (_response.status === 200) {
        setDeleteIsLoading(false)
        toast.success('Le produit a été supprimé avec succès')
        setDeleteResponse(true)
      } else {
        setDeleteIsLoading(false)
        toast.error('Erreur lors de la suppression')
      }
    } catch (e) {
      setError(e)
      setDeleteIsLoading(false)
    }
  }, [])
  return { deleteIsLoading, error, deleteResponse, deleteProduct }
}

const useCreateProduct = () => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const create = useCallback(async ({ nameProduct, descriptionProduct, priceProduct, jwt, artisanId }) => {
    try {
      setIsLoading(true)

      const _response = await fetch(`${process.env.REACT_APP_API_URL}/products`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ data: { name: nameProduct, description: descriptionProduct, price: priceProduct, artisan: `${artisanId}` } })
        })
      const _responseJSON = await _response.json()
      if (_response.ok) {
        setIsLoading(false)
        setResponse(_responseJSON)
        toast.success('Votre produit a bien été ajouté')
      } else {
        setError(_responseJSON?.error?.message)
        setIsLoading(false)
        toast.error(_responseJSON?.error?.message)
      }
    } catch (e) {
      setError(e)
      setIsLoading(false)
    }
  }, [])
  return { response, error, isLoading, create }
}

export { useUpdateProduct, useDeleteProduct, useCreateProduct }
