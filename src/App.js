import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from './Pages/Product/ProductDetails';
import Allproducts from './Pages/AllProducts/Allproducts';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/LogIn/Login';
import Register from './Pages/LogIn/Register';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/allproducts' element={<Allproducts></Allproducts>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
