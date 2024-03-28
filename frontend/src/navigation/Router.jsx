import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* Import Pages */
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Artisans from '../pages/Artisans'
import Home from '../pages/Home'
import Artisan from '../pages/Artisan'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Protected/Dashboard'
import PrivateRoute from './PrivateRouteMiddleware'
import Cart from '../pages/Cart'
import Profil from '../pages/Protected/Profil'

/* Router */
function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='artisans'>
          <Route index element={<Artisans />} /> {/** Route <domaine> /artisans */}
          <Route path=':artisanSlug' element={<Artisan />} /> {/** Route <domaine>/artisans/<Id> */}
        </Route>
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='authentication' element={<Auth />} />
        <Route path='dashboard' element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='cart' element={<PrivateRoute />}>
          <Route index element={<Cart />} />
        </Route>
        <Route path='profil' element={<PrivateRoute />}>
          <Route index element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
