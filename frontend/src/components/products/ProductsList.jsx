import PropTypes from 'prop-types'
import ProductsListItems from './ProductsListItems'
import './Products.css'

function ProductList ({ artisan, products }) {
  if (!products || products.length < 1) {
    return 'No Products'
  }

  return (
    <>
      <div className='list-container'>
        <h2>Les produits de {artisan.name}</h2>
        <div className='card-list'>
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
