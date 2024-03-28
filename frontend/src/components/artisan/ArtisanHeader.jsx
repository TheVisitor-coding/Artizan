import PropTypes from 'prop-types'
import { Image } from '@nextui-org/react'

function ArtisanHeader ({ artisan }) {
  const { name, description } = artisan
  const imgUrl = process.env.REACT_APP_IMAGES_URL + artisan.imgProfile?.data?.attributes?.formats?.thumbnail?.url

  return (
    <>
      <div className='flex flex-row items-end gap-10 mt-10 w-full'>
        <div className=''>
          <Image
            className=' size-60 object-cover '
            alt='Profil'
            src={imgUrl}
          />
        </div>
        <div className='flex flex-col gap-2 w-3/5'>
          <h1 className='font-bold text-xl text-primary-500'>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <h2 className='font-semibold text-large mt-10'>Les produits de {artisan.name} :</h2>
    </>
  )
}

ArtisanHeader.propTypes = {
  artisan: PropTypes.object
}

export default ArtisanHeader
