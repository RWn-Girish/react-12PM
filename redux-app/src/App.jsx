import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import AddProduct from './Components/AddProduct'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  )
}

export default App
