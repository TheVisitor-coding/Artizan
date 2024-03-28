import PropTypes from 'prop-types'
import ProductsListItems from './ProductsListItems'
import './Products.css'

function ProductList ({ products }) {
  if (!products || products.length < 1) {
    return 'No Products'
  }
  return (
    <>
      <div className='list-container'>
        <div className='flex flex-row flex-wrap gap-4'>
          {
                products.map((product) => (
                  <ProductsListItems key={product.id} product={product} />
                ))
            }
        </div>
      </div>
    </>
  )
}

ProductList.propTypes = {
  artisan: PropTypes.object,
  products: PropTypes.arrayOf(PropTypes.object)
}

export default ProductList
