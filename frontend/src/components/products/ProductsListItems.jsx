import PropTypes from 'prop-types'
import './Products.css'

function ProductsListItems ({ product }) {
  const { name, description, price, images, artisan } = product.attributes

  const artisanData = artisan?.data?.attributes

  // Get Image
  const imgUrl = process.env.REACT_APP_IMAGES_URL + images?.data[0]?.attributes?.url
  const avatarArtisan = process.env.REACT_APP_IMAGES_URL + artisanData?.imgProfile?.data?.attributes.formats?.thumbnail?.url

  return (
    <>
      <div className='w-[270px] h-[330px] min-h-fit rounded-2xl cursor-pointer shadow-lg'>
        <div className='relative'>
          <img className='w-full h-[180px] object-cover aspect-auto rounded-t-2xl' src={imgUrl} alt='product' />
        </div>
        <div className='mx-4 mt-2 flex flex-col gap-4 relative'>
          <div className='text-left'>
            <h4 className='font-bold'>{name.substring(0, 27)}...</h4>
            <p>{description.substring(0, 60)}...</p>
          </div>
          <div className='flex flex-row w-full justify-between items-center'>
            <p className='text-primary-600 font-bold'>{price} €</p>
            {
            artisanData?.imgProfile && (
              <a href={`/artisans/${artisan.data.attributes.slug}`}>
                <img src={avatarArtisan} className='size-11 p-[2px] object-cover rounded-full hover:-translate-y-1 transition-transform border-primary-500 border-2' />
              </a>
            )
          }
          </div>
        </div>
      </div>
    </>
  )
}

ProductsListItems.propTypes = {
  product: PropTypes.object
}

export default ProductsListItems
