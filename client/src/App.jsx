import './App.css'
import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import Register from './pages/Register'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import Account from './pages/Account'
import NewCarForm from './pages/NewCarForm'
import CarsPage from './pages/CarsPage'
import SingleCar from './pages/SingleCar'
import Bookings from './pages/Bookings'
import SingleBooking from './pages/SingleBooking'
import About from './pages/About'
import Spares from './pages/Spares'
import NewSpareForm from './pages/spares/NewSpareForm'
import Toyota from './pages/spares/Toyota'
import SingleSpare from './pages/spares/SingleSpare'
import Mercedes from './pages/spares/Mercedes'
import Admin from './components/admin/Admin'
import styled from "styled-components"
import Cart from './components/cart/Cart'
import Payment from './pages/spares/Payment'
import Careers from './pages/careers/Careers'
import NewJobForm from './pages/careers/NewJobForm'
import Contact from './pages/Contact'

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;


function App() {
  const Div = styled.div`
  position: relative;
`;
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account/bookings' element={<Bookings />} />
          <Route path='/account/bookings/:id' element={<SingleBooking />} />
          <Route path='/account/cars' element={<CarsPage />} />
          <Route path="/account/cars/new" element={<NewCarForm />} />
          <Route path="/account/cars/:id" element={<NewCarForm />} />
          <Route path="/cars/:id" element={<SingleCar />} />
          <Route path='/about' element={<About />} />
          <Route path='/spares' element={<Spares />} />
          <Route path='/spares/new' element={<NewSpareForm />} />
          <Route path='/spares/toyota' element={<Toyota />} />
          <Route path='/spares/mercedes' element={<Mercedes />} />
          <Route path='/spares/:id' element={<SingleSpare />} />
          <Route path='/spares/cart' element={<Cart />} />
          <Route path='/spares/payment' element={<Payment />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/careers/new' element={<NewJobForm />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
