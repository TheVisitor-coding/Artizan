import { AiFillDelete } from 'react-icons/ai'
import { deleteFromCart } from '../../services/cartUtils'
import { toast } from 'react-toastify'
import { Button } from '@nextui-org/react'

function ProductCard ({ item, index }) {
  const handleDeleteFromCart = () => {
    toast.done(`Produit ${item.attributes.name} supprimé du panier`)
    deleteFromCart(index)
  }
  return (
    <>
      <div className='flex flex-col w-64 justify-between bg-white rounded-lg p-4 shadow-md'>
        <div>
          <img className='w-full h-[150px] object-cover object-top rounded-lg mb-4' src={process.env.REACT_APP_IMAGES_URL + item.attributes.images.data[0].attributes.url} alt='product' />
          <div>
            <p className='font-bold text-lg'>{item.attributes.name}</p>
            <p className='font-bold text-xl text-primary mt-2'>{item.attributes.price} €</p>
          </div>
        </div>
        <Button onClick={() => handleDeleteFromCart()} color='danger' variant='shadow' className='mt-4'>
          Supprimer <AiFillDelete className='ml-2 size-4' />
        </Button>
      </div>
    </>
  )
}

export default ProductCard
