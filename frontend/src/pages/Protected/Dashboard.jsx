import { useEffect, useState } from 'react'
import ListArtisan from '../../components/artisan/dashboard/ListArtisan'
import { useAuth } from '../../contexts/authContext'
import { Spinner } from '@nextui-org/react'
import AddButton from '../../components/forms/buttons/AddButton'

function Dashboard () {
  const { state: { jwt, user } } = useAuth()
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const _response = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}?populate[0]=role&populate[1]=artisan&populate[2]=artisan.products`)
        const _responseJSON = await _response.json()
        setResponse(_responseJSON)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setError(e)
      }
    }
    getData()
  }, [user.id])

  return (
    <>
      {
        !response
          ? (error && <p>{error}</p>)
          : (
              isLoading
                ? (
                  <div className='flex justify-center items-center h-screen w-full'>
                    <Spinner />
                  </div>
                  )
                : (
                  <>
                    <div className='w-full flex items-center flex-col gap-4'>
                      <h2 className='text-2xl text-primary-500 font-semibold mb-2'>Bienvenue dans votre Dashboard</h2>
                    </div>
                    <div className='flex flex-col gap-4 p-10'>
                      <span className='flex flex-row justify-between'>
                        <p className='font-medium text-xl'>Voici vos produits :</p>
                        {
                          response.role.name === 'Artisan' &&
                            (
                              <AddButton user={response} id={response.artisan.id} token={jwt} />
                            )
                        }
                      </span>
                      <ListArtisan isLoading={isLoading} response={response} jwt={jwt} />
                    </div>
                  </>
                  )
            )
      }

    </>
  )
}

export default Dashboard
