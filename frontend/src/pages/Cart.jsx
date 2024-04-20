import ProductCart from '../components/cart/ProductCart'

function Cart () {
  return (
    <>
      <div className='m-10 mt-12 flex justify-center flex-col gap-4'>
        <h1 className='text-4xl font-bold'>Panier</h1>
        <ProductCart />
      </div>
    </>
  )
}

export default Cart
