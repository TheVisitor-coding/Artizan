import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { useState } from 'react'
import { useCreateProduct } from '../../../hooks/Product'
import { toast } from 'react-toastify'

function AddButton ({ id, token, user }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { response, create } = useCreateProduct()

  const [formData, setFormData] = useState({
    nameProduct: '',
    descriptionProduct: '',
    priceProduct: '',
    artisanId: id,
    jwt: token
  })

  if (response) {
    window.location.reload()
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.role.name === 'Artisan') {
      create(formData)
    } else {
      toast.error('Vous n\'êtes pas autorisé à ajouter un produit')
    }
  }

  return (
    <>
      <Button color='primary' onPress={onOpen}>Ajouter un produit</Button>

      <Modal isOpen={isOpen} placement='top-center' onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Création d'un nouveau produit</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name='nameProduct'
                  label='Nom Produit'
                  variant='bordered'
                  handleChange={handleChange}
                />
                <Input
                  name='descriptionProduct'
                  label='Description du Produit'
                  variant='bordered'
                  handleChange={handleChange}
                />
                <Input
                  name='priceProduct'
                  label='Prix du Produit'
                  variant='bordered'
                  type='number'
                  handleChange={handleChange}
                />
                <div className='flex flex-row gap-2'>
                  <Button variant='solid' color='primary' onClick={handleSubmit}>Ajouter</Button>
                  <Button variant='solid' color='error' onPress={onClose}>Annuler</Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddButton
