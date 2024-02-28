import { useEffect, useState } from 'react'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import { useNavigate } from 'react-router-dom'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Récupération du Token
    const auth = window.localStorage.getItem('AUTH')
    const authObject = JSON.parse(auth)
    const token = authObject?.jwt
    if (token) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <>
      {isRegister ? <Login /> : <Register />}
      <a onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Je n'ai pas de compte" : "J'ai déjà un compte"}
      </a>
    </>
  )
}

export default Auth
