import PropTypes from 'prop-types'
import ArtisansListItems from './ArtisansListItems'
import './ArtisansList.css'

function ArtisansList ({ artisans }) {
  if (!artisans || artisans.length < 1) {
    return 'No Data'
  }

  console.log(artisans)

  return (
    <>
      <div className='list-container'>
        <h2>Artisans List</h2>
        <div className='card-list'>
          {artisans.map((artisan) => (
            <ArtisansListItems key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </div>
    </>
  )
}

ArtisansList.propTypes = {
  artisans: PropTypes.arrayOf(PropTypes.object)
}

export default ArtisansList
