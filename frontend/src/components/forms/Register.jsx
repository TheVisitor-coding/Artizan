import { useState } from 'react'
import Button from './buttons/Button'
import Input from './input/Input'
import './Register.css'
import { validateRegisterForm } from '../../services/formAuthValidation'

function Register () {
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null
  })
  const [formData, setFormData] = useState({
    firstName: 'Mattéo',
    lastName: 'ROSSI',
    username: 'JackieChan',
    email: 'jackiechan@gmail.com',
    password: 'test'
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const _errors = validateRegisterForm(formData)
    if (Object.keys(_errors).length > 0) {
      setErrors(_errors)
    } else {
      window.alert(`Formulaire Soumis : ${formData.firstName} ${formData.lastName}`)
    }
  }

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <Input
          name='lastName'
          label='Nom'
          placeholder='Entrez votre Nom ...'
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <Input
          name='firstName'
          label='Prenom'
          placeholder='Entrez votre Prénom ...'
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          name='username'
          label="Nom d'utilisateur"
          placeholder="Entrez votre Nom d'utilisateur ..."
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          name='email'
          label='E-mail'
          placeholder='Entrez votre adresse mail ...'
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name='password'
          label='Mot de Passe'
          placeholder='Entrez votre Mot de Passe ...'
          value={formData.password}
          onChange={handleChange}
        />
        <Button type='submit'>S'enregistrer</Button>
      </form>
    </>
  )
}

export default Register
