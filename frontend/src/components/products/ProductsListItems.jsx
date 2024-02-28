import PropTypes from 'prop-types'
import './Products.css'

function ProductsListItems ({ product }) {
  const { name, description, price, images } = product.attributes
  const imgUrl = 'http://localhost:1337' + images?.data[0]?.attributes?.url

  return (
    <>
      <div className='product-card'>
        <div className='head'>
          <img src={imgUrl} alt='product' />
        </div>
        <div className='content'>
          <div className='info'>
            <h4>{name}</h4>
            <p>{description.substring(0, 60)}...</p>
          </div>
          <p className='price'>{price} €</p>
        </div>
      </div>
    </>
  )
}

ProductsListItems.propTypes = {
  product: PropTypes.object
}

export default ProductsListItems
