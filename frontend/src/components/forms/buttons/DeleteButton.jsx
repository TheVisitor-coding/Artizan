import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { useState } from 'react'

function DeleteButton ({ deleteUser, id, token, deleteIsLoading }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDelete = (e) => {
    e.preventDefault()
    deleteUser(formData)
  }

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    idUser: id,
    jwt: token
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <>
      <Button color='danger' onPress={onOpen}>Supprimer Votre Compte</Button>
      <Modal
        isOpen={isOpen}
        placement='top-center'
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Etes vous sur de vouloir supprimer votre compte ?</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name='identifier'
                  label='Email ou pseudo'
                  value={formData.identifier}
                  onChange={handleChange}
                  variant='bordered'
                />
                <Input
                  name='password'
                  label='Mot de Passe'
                  value={formData.password}
                  onChange={handleChange}
                  variant='bordered'
                  type='password'
                />
                <div className='flex flex-row gap-2'>
                  <Button variant='solid' color='danger' onClick={handleDelete} isLoading={deleteIsLoading}>Je supprime mon compte</Button>
                  <Button variant='solid' color='primary' onPress={onClose}>Non</Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteButton
