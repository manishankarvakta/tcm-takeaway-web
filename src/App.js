import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from './Pages/Product/ProductDetails';
import Allproducts from './Pages/AllProducts/Allproducts';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/LogIn/Login';
import Register from './Pages/LogIn/Register';
import Footer from './Pages/Shared/Footer';
import Dashboard from './Pages/DashBoard/Dashboard';
import PersonalInfo from './Pages/DashBoard/PersonalInfo';
import PreviousOrder from './Pages/DashBoard/PreviousOrder';
import UpdatePersonalInfo from './Pages/DashBoard/UpdatePersonalInfo';
import ViewCart from './Pages/Order/ViewCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import ViewDrawerCart from './Pages/Home/ViewDrawerCart';
import { getStoredCart } from './hooks/localStorageCart3';


export const CountContext = createContext([]);
export const FoodCountContext = createContext([]);

function App() {

  const [nav, setNav] = useState([])

  const [cartCount, setCartCount] = useState(0);
  const [foodCount, setFoodCount] = useState(1);


  return (
    <div className="App font-serif">
      <CountContext.Provider value={[cartCount, setCartCount]}>
        <Navbar
          nav={nav}
        ></Navbar>


        <Routes>
          {/* <FoodCountContext.Provider value={[foodCount, setFoodCount]}> */}
          <Route path='/' element={<Home
            setNav={setNav}
          ></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>

          <Route path='/' element={<Home
            setNav={setNav}
          ></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>

          {/* </FoodCountContext.Provider> */}


          <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/allproducts' element={<Allproducts></Allproducts>}></Route>
          {/* <Route path='/viewcart' element={<ViewCart></ViewCart>}></Route> */}
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Register></Register>}></Route>

          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<PersonalInfo></PersonalInfo>}></Route>
            <Route path='perivousorders' element={<PreviousOrder></PreviousOrder>}></Route>
            <Route path='updatepersonalinfo' element={<UpdatePersonalInfo></UpdatePersonalInfo>}></Route>
          </Route>

        </Routes>
        <ToastContainer></ToastContainer>

        <Footer></Footer>

      </CountContext.Provider>

    </div>
  );
}

export default App;
