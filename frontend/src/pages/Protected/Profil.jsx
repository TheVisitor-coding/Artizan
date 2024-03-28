import { useAuth } from '../../contexts/authContext'

function Profil () {
  const { state: { user } } = useAuth()
  return (
    <>
      <section className='mx-20 flex flex-col items-center mt-12 gap-14'>
        <h1 className='text-4xl font-bold text-center'>Vos Informations Personnelles</h1>
        <div className='flex flex-col gap-2 *:text-center'>
          <h2 className='text-xl'>Nom D'utilisateur : {user.username}</h2>
          <p className='text-lg'>Adresse E_mail : {user.email}</p>
        </div>
      </section>
    </>
  )
}

export default Profil
