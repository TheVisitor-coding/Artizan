import { useEffect, useState } from 'react'
import { Input, Button, Spinner } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

function Login () {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  })

  const navigate = useNavigate()
  const { state: { user, jwt, error, loading }, login } = useAuth()

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard')
    }
  }, [user, jwt])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
  }

  return (
    <>
      {
      loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center'>
          <Spinner />
        </div>
      )
    }
      <form className='flex flex-col justify-center gap-3 w-6/12 xl:w-3/12' onSubmit={handleSubmit}>
        <h2 className='text-2xl text-primary-500 font-semibold mb-2'>Connexion</h2>
        <Input
          name='identifier'
          isRequired
          label='Email'
          type='email'
          placeholder='mail@provider.com'
          value={formData.identifier}
          onChange={handleChange}
        />
        <Input
          isRequired
          name='password'
          type='password'
          label='Mot de Passe'
          placeholder='xxxxxxxxx'
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: 'red' }}>{JSON.stringify(error)}</p>}
        <Button className='bg-primary text-primary-50' type='submit'>Se Connecter</Button>
      </form>
    </>
  )
}

export default Login
