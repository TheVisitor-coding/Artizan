import PropTypes from 'prop-types'
import ArtisansListItems from './ArtisansListItems'

function ArtisansList ({ artisans }) {
  if (!artisans || artisans.length < 1) {
    return 'No Data'
  }

  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <h2 className='text-2xl text-primary-500 font-semibold mb-4'>Liste des Artisans</h2>
        <div className='flex flex-row flex-wrap flex-start gap-6'>
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
