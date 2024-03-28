import { Card, CardHeader, Image } from '@nextui-org/react'
import PropTypes from 'prop-types'

function ArtisansListItems ({ artisan }) {
  const { name, description, imgProfile, slug } = artisan.attributes

  const imgUrl = process.env.REACT_APP_IMAGES_URL + imgProfile?.data?.attributes?.url

  return (
    <>
      <a href={`/artisans/${slug}`}>
        <Card isPressable className='col-span-12 sm:col-span-4 h-[300px]'>
          <CardHeader className='absolute p-6 z-10 top-1 flex-col items-start'>
            <h3 className='text-large text-white uppercase font-bold'>{name}</h3>
            <p className='text-white font-medium text-tiny text-left text-balance'>{description.substring(0, 75)}...</p>
          </CardHeader>
          <Image
            removeWrapper
            className='z-0 w-full h-full object-cover brightness-75 blur-[1px] hover:scale-110'
            src={imgUrl}
          />
        </Card>
      </a>
    </>
  )
}

ArtisansListItems.propTypes = {
  artisan: PropTypes.object
}

export default ArtisansListItems
