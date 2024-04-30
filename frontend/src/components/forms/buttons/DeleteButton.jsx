import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { useState } from 'react'

function DeleteButton ({ deleteFunction, id, token, deleteIsLoading, isUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDelete = (e) => {
    e.preventDefault()
    deleteFunction(formData)
  }

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    _id: id,
    jwt: token
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <>
      <Button color='danger' onPress={onOpen}>{isUser ? 'Supprimer Votre Compte' : 'Supprimer ce Produit'}</Button>
      <Modal
        isOpen={isOpen}
        placement='top-center'
        onClose={onClose}
        className='p-6'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Etes vous sur de vouloir supprimer {isUser ? 'votre compte' : 'ce produit'} ?</ModalHeader>
              <ModalBody>
                {
                  isUser && (
                    <>
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
                    </>
                  )
                }

                <div className='flex flex-row gap-2'>
                  <Button variant='solid' color='danger' onClick={handleDelete} isLoading={deleteIsLoading}>Je supprime {isUser ? 'mon compte' : 'le produit'}</Button>
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
