import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct'
import SignIN from './Components/SignIN/SignIn'
import SignUP from './Components/SignIN/SignUp'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIN />} />
        <Route path="/signUp" element={<SignUP />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </>
  )
}

export default App
