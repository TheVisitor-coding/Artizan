import { Input, Modal, ModalBody, ModalContent, useDisclosure, Button, ModalHeader, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import { useUpdateProduct } from '../../../hooks/Product'

function ModifyButton ({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { name, description, price } = product
  const [formData, setFormData] = useState({
    nameProduct: name,
    descriptionProduct: description,
    priceProduct: price,
    id: product.id,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTcxMzYyNjI1MiwiZXhwIjoxNzE2MjE4MjUyfQ.Id3HwEibi11f2OOplsHn20GoHsi7i6ADH8wfTPY_774'
  })

  const { update, response } = useUpdateProduct()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    update(formData)
  }

  if (response) {
    window.location.reload()
  }

  return (
    <>
      <Button color='primary' onClick={onOpen} className='text-white rounded-md' size='md'>
        Modifier
      </Button>

      <Modal isOpen={isOpen} placement='top-center' onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Modifier le Produit</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name='nameProduct'
                  label='Nom Produit'
                  variant='bordered'
                  value={formData.nameProduct}
                  onChange={handleChange}
                />
                <Textarea
                  name='descriptionProduct'
                  label='Description du Produit'
                  variant='bordered'
                  value={formData.descriptionProduct}
                  onChange={handleChange}
                />
                <Input
                  name='priceProduct'
                  label='Prix du Produit'
                  variant='bordered'
                  type='price'
                  value={formData.priceProduct}
                  onChange={handleChange}
                />

                <div className='flex flex-row gap-2'>
                  <Button variant='solid' color='primary' onClick={handleSubmit}>Modifier</Button>
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

export default ModifyButton
