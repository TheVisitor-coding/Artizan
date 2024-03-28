import { useEffect, useState } from 'react'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)
  const navigate = useNavigate()

  const { state: { jwt, user } } = useAuth()

  useEffect(() => {
    if (jwt && user) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <>
      <div className='w-full justify-center flex items-center flex-col mt-12 gap-4'>
        {isRegister ? <Login /> : <Register />}
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Je n'ai pas de compte" : "J'ai déjà un compte"}
        </a>
      </div>
    </>
  )
}

export default Auth
