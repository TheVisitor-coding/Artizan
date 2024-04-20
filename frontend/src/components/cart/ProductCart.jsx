import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import CartTotal from './CartTotal'

function ProductCart () {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = window.localStorage.getItem('CART')

    if (savedCart) {
      const _cart = JSON.parse(savedCart)
      setCart(_cart)
    }

    window.addEventListener('storage', (e) => {
      const savedCart = window.localStorage.getItem('CART')
      if (savedCart) {
        const _cart = JSON.parse(savedCart)
        setCart(_cart)
      }
    })
  }, [])

  return (
    <>
      <div className='flex flex-col gap-10 p-4'>
        <div className='flex flex-row flex-wrap gap-4'>
          {cart.map((item, index) => (
            <ProductCard key={index} item={item} index={index} />
          ))}
        </div>
        <CartTotal cart={cart} />
      </div>
    </>
  )
}

export default ProductCart
