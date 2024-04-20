import { Button } from '@nextui-org/react'

function CartTotal ({ cart }) {
  let total = 0
  if (cart) {
    total = cart.reduce((prev, item) => prev + item.attributes.price, 0)
  }
  return (
    <>
      <div className='p-4 flex flex-col items-center justify-center gap-2'>
        <p className='font-bold text-xl mb-2'>Total: {total.toFixed(2)} €</p>
        <div>
          {
            total > 0 &&
              <Button color='primary' variant='shadow'>
                Valider le panier
              </Button>
            }
        </div>
      </div>
    </>
  )
}

export default CartTotal
