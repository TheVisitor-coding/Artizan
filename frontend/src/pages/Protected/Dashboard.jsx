import { useNavigate } from 'react-router-dom'
import Button from '../../components/forms/buttons/Button'

function Dashboard () {
  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.removeItem('AUTH')
    navigate('/')
  }

  return (
    <>
      <h2>Dashboard</h2>
      <Button onClick={logout}>Déconnexion</Button>
    </>
  )
}

export default Dashboard
