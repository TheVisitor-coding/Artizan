import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute () {
  const auth = window.localStorage.getItem('AUTH')
  const authObject = JSON.parse(auth)

  const token = authObject?.jwt
  // TODO Valider token JWT (Expiration ? Valide ?)

  return (
    <>
      {
            token ? <Outlet /> : <Navigate to='/authentication' />
         }
    </>
  )
}

export default PrivateRoute
