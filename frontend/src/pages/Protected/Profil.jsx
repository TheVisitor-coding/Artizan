import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { IoMail } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { useAuth } from '../../contexts/authContext'
import { useEffect, useState } from 'react'
import validator from 'validator'
import { useDeleteUser, useUpdateUser } from '../../hooks/User'
import { toast } from 'react-toastify'
import DeleteButton from '../../components/forms/buttons/DeleteButton'

function Profil () {
  const { state: { user, jwt }, setUser, logout } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { response, isLoading, update } = useUpdateUser()
  const { deleteUser, deleteResponse, deleteIsLoading } = useDeleteUser()

  if (deleteResponse) {
    logout()
  }

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    id: user.id,
    token: jwt
  })

  useEffect(() => {
    if (response && !isLoading) {
      setUser({ ...user, username: formData.username, email: formData.email })
      onClose()
    }
  }, [response])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleClick = (event) => {
    event.preventDefault()
    if (validator.matches(formData.email, /\S+@\S+\.\S+/)) {
      update(formData)
    } else {
      toast.error('Veuillez entrer une adresse email valide')
    }
  }
  return (
    <>
      <section className='mx-20 flex flex-col items-center mt-12 gap-14'>
        <h1 className='text-4xl font-bold text-center'>Vos Informations Personnelles</h1>
        <div className='flex flex-col gap-2 *:text-center'>
          <h2 className='text-xl'>Nom D'utilisateur : {user.username}</h2>
          <p className='text-lg'>Adresse E_mail : {user.email}</p>
        </div>
        <span className='flex flex-row gap-4'>
          <Button
            className='bg-primary text-white' onPress={onOpen}
          >Modifier vos informations
          </Button>
          <DeleteButton deleteFunction={deleteUser} id={user.id} token={jwt} deleteIsLoading={deleteIsLoading} isUser />
        </span>
      </section>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement='top-center'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Modification de vos Informations</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <IoMail className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  name='email'
                  label='Email'
                  value={formData.email}
                  onChange={handleChange}
                  variant='bordered'
                />
                <Input
                  endContent={
                    <FaUser className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  label="Nom d'utilisateur"
                  variant='bordered'
                />
              </ModalBody>
              <ModalFooter>
                <Button className='text-red-700 border-red-700' variant='bordered' onPress={onClose}>
                  Fermer
                </Button>
                <Button
                  color='primary'
                  isLoading={isLoading}
                  onPress={onClose} onClick={handleClick}
                >
                  Sauvegarder
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Profil
