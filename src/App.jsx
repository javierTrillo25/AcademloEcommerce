import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/App/ProtectedRoutes'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import Preload from './pages/Preload'
import ProductId from './pages/ProductId'
import Purchases from './pages/Purchases'

function App() {

<Preload />
  return (
    <div className="App">
      <Header />
      
      <Routes>
      <Route path='/' element={<Preload />}  />
        <Route path='/pre' element={<Home />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/products/:id' element={<ProductId />}  />
        
        <Route element ={<ProtectedRoutes/>}>
        <Route path='/purchases' element={<Purchases />}  />
        <Route path='/cart' element={<Cart />}  />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
