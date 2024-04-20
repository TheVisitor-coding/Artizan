const addToCart = (item) => {
  const savedCart = window.localStorage.getItem('CART')
  const cart = savedCart ? JSON.parse(savedCart) : []
  cart.push(item)
  window.localStorage.setItem('CART', JSON.stringify(cart))
  window.dispatchEvent(new Event('storage'))
}

const deleteFromCart = (index) => {
  const savedCart = window.localStorage.getItem('CART')
  if (savedCart) {
    const cart = JSON.parse(savedCart)
    cart.splice(index, 1)
    window.localStorage.setItem('CART', JSON.stringify(cart))
    window.dispatchEvent(new Event('storage'))
  }
}

export {
  addToCart,
  deleteFromCart
}
