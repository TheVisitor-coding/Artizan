import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/Api'
import ArtisanHeader from '../components/artisan/ArtisanHeader'
import ProductsList from '../components/products/ProductsList'

function Artisan () {
  const { artisanSlug } = useParams()

  const { response, error, isLoading } = useFetch(
    `http://localhost:1337/api/artisans?filters[slug][$eq]=${artisanSlug}&populate=*`
  )

  const {
    response: products,
    error: productsError,
    isLoading: productsLoading
  } = useFetch(
    `http://localhost:1337/api/products?filters[artisan][slug][$eq]=${artisanSlug}&populate=*`
  )

  if (isLoading || productsLoading) return <h2>Chargement...</h2>

  if (error || productsError) { return <pre>{JSON.stringify(error || productsError, null, 2)}</pre> }

  return (
    response && (
      <>
        <ArtisanHeader artisan={response[0]?.attributes} />
        {products ? (<ProductsList products={products} artisan={response[0]?.attributes} />) : (<p>Aucun Produit Trouvé</p>)}
      </>
    )
  )
}

export default Artisan
