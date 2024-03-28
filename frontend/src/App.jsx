import { NextUIProvider } from '@nextui-org/react'
import Header from './components/header/Header'
import { AuthProvider } from './contexts/authContext'
import Router from './navigation/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <AuthProvider>
        <NextUIProvider>
          <Header />
          <Router />
          <ToastContainer />
        </NextUIProvider>
      </AuthProvider>
    </>
  )
}

export default App
