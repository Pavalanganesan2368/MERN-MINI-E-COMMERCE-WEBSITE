import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import ProductDetails from './pages/ProductDetails'
import { ToastContainer } from 'react-toastify'
import Cart from './pages/Cart'

function App() {
  // const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <div className="App">
        <div>
        <ToastContainer theme='dark' position='top-center'/>
        <Header 
          cartItems = {cartItems}
        />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/search' element={<Home />}/>
            <Route path='/product/:id' element={
              <ProductDetails 
                cartItems = {cartItems}
                setCartItems={setCartItems}
              />
            }/>
            <Route path='/cart' element={
              <Cart 
                cartItems = {cartItems}
                setCartItems={setCartItems}
              />
            }/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App