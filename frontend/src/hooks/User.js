import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const useUpdateUser = () => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const update = useCallback(async ({ username, email, id, token }) => {
    try {
      setIsLoading(true)
      const requestData = {}

      if (username) {
        requestData.username = username
      }
      if (email) {
        requestData.email = email
      }

      if (Object.keys(requestData).length === 0) {
        throw new Error('Veuillez spécifier au moins un champ à modifier.')
      }

      const _response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(requestData)
      })
      const _responseJSON = await _response.json()
      if (_response.ok) {
        // Update informations in Local Storage
        const savedState = JSON.parse(window.localStorage.getItem('AUTH'))
        const updateUser = { ...savedState.user, ...requestData }
        window.localStorage.setItem('AUTH', JSON.stringify({ ...savedState, user: updateUser }))

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

const useDeleteUser = () => {
  const [error, setError] = useState()
  const [deleteIsLoading, setDeleteIsLoading] = useState(false)
  const [deleteResponse, setDeleteResponse] = useState(false)

  const deleteUser = useCallback(async ({ idUser, jwt, identifier, password }) => {
    try {
      setDeleteIsLoading(true)
      const _response = await axios.delete(`${process.env.REACT_APP_API_URL}/users/${idUser}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${jwt}`
        },
        data: { identifier, password }
      })
      if (_response.status === 200) {
        setDeleteIsLoading(false)
        toast.success('Votre compte a été supprimé avec succès')
        window.location.href = '/'
        setDeleteResponse(true)
      } else {
        setDeleteIsLoading(false)
        toast.error('Erreur lors de la suppression')
      }
    } catch (e) {
      setError(e)
      setDeleteIsLoading(false)
      toast.error(e)
    }
  }, [])
  return { deleteIsLoading, error, deleteUser, deleteResponse }
}

export { useUpdateUser, useDeleteUser }
