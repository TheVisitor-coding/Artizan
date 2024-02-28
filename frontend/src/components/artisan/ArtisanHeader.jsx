import PropTypes from 'prop-types'
import './Artisan.css'

function ArtisanHeader ({ artisan }) {
  const { name, description } = artisan
  const imgUrl = 'http://localhost:1337' + artisan.imgProfile?.data?.attributes?.formats?.thumbnail?.url

  return (
    <>
      <div className='artisan-header'>
        <div className='left-section'>
          <img src={imgUrl} alt='profil' />
        </div>
        <div className='right-section'>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

ArtisanHeader.propTypes = {
  artisan: PropTypes.object
}

export default ArtisanHeader
