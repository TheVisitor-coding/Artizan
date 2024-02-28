import PropTypes from 'prop-types'

function ArtisansListItems ({ artisan }) {
  const { name, description, imgProfile, slug } = artisan.attributes

  const imgUrl = 'http://localhost:1337' + imgProfile?.data?.attributes?.url

  return (
    <>
      <a className='card' href={`/artisans/${slug}`}>
        <span className='card-right'>
          <img src={imgUrl} />
        </span>
        <span className='card-left'>
          <h3>{name}</h3>
          <p>{description}</p>
        </span>
      </a>
    </>
  )
}

ArtisansListItems.propTypes = {
  artisan: PropTypes.object
}

export default ArtisansListItems
