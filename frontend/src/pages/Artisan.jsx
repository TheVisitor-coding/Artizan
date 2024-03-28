import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/Api'
import ArtisanHeader from '../components/artisan/ArtisanHeader'
import ProductsList from '../components/products/ProductsList'

function Artisan () {
  const { artisanSlug } = useParams()

  const { response, error, isLoading } = useFetch(
    `${process.env.REACT_APP_API_URL}/artisans?filters[slug][$eq]=${artisanSlug}&populate=*`
  )

  const {
    response: products,
    error: productsError,
    isLoading: productsLoading
  } = useFetch(
    `${process.env.REACT_APP_API_URL}/products?filters[artisan][slug][$eq]=${artisanSlug}&populate=*`
  )

  if (isLoading || productsLoading) return <h2>Chargement...</h2>

  if (error || productsError) { return <pre>{JSON.stringify(error || productsError, null, 2)}</pre> }

  return (
    response && (
      <>
        <div className='flex flex-col ml-10 gap-10'>
          <ArtisanHeader artisan={response[0]?.attributes} />
          {products ? (<ProductsList products={products} artisan={response[0]?.attributes} />) : (<p>Aucun Produit Trouvé</p>)}
        </div>
      </>
    )
  )
}

export default Artisan
