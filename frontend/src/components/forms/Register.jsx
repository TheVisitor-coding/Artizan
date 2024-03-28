import { useEffect, useState } from 'react'
import { Input, Button, Spinner } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

function Register () {
  const [formData, setFormData] = useState({
    username: 'hello-world',
    email: 'helloworld@gmail.com',
    password: 'test'
  })

  const navigate = useNavigate()
  const { state: { user, jwt, error, loading }, register } = useAuth()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard')
    }
  }, [user, jwt])

  const handleSubmit = (e) => {
    e.preventDefault()
    register(formData)
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
        <h2 className='text-2xl text-primary-500 font-semibold mb-2'>Inscription</h2>

        <Input
          name='username'
          isRequired
          label="Nom d'utilisateur"
          placeholder="Entrez votre Nom d'utilisateur ..."
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          name='email'
          label='E-mail'
          isRequired
          placeholder='Entrez votre adresse mail ...'
          value={formData.email}
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          label='Mot de Passe'
          isRequired
          placeholder='Entrez votre Mot de Passe ...'
          value={formData.password}
          onChange={handleChange}
          type='password'
        />
        {error && <p style={{ color: 'red' }}>{JSON.stringify(error)}</p>}
        <Button className='bg-primary text-primary-50' type='submit'>S'enregistrer</Button>
      </form>
    </>
  )
}

export default Register
