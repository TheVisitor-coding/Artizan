import { useFetch } from '../../hooks/Api'
import ProductList from '../products/ProductsList'

function HomeSection () {
  const { response, error, isLoading } = useFetch(
    `${process.env.REACT_APP_API_URL}/products?populate[0]=images&populate[1]=artisan.imgProfile`
  )

  if (isLoading) return <h2>Chargement...</h2>

  if (error) { return <pre>{JSON.stringify(error, null, 2)}</pre> }
  return (
    <>
      <div className='m-10 mt-12 flex justify-center flex-col gap-4'>
        <h1 className='text-4xl font-bold'>Bienvenue</h1>
        <div>
          <h2>Les Produits de nos Artisans :</h2>
        </div>
        <ProductList products={response} />
      </div>
    </>
  )
}

export default HomeSection
