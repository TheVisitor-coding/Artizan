import { useEffect, useState } from 'react'
import Button from './buttons/Button'
import Input from './input/Input'
import { useLogin } from '../../hooks/Auth'
import { useNavigate } from 'react-router-dom'

function Login () {
  const [formData, setFormData] = useState({
    identifier: 'jackiechan@gmail.com',
    password: 'kungfu'
  })

  const navigate = useNavigate()
  const { response, error, login } = useLogin()

  useEffect(() => {
    if (response && response.jwt) {
      navigate('/dashboard')
    }
  }, [response])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
  }

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <h2>Se Connecter</h2>
        <Input
          name='identifier'
          label='Email'
          type='email'
          placeholder='mail@provider.com'
          value={formData.identifier}
          onChange={handleChange}
        />
        <Input
          name='password'
          type='password'
          label='Mot de Passe'
          placeholder='xxxxxxxxx'
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type='submit'>Se Connecter</Button>
      </form>
    </>
  )
}

export default Login
