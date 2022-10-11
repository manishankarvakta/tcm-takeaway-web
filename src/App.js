import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from './Pages/Product/ProductDetails';
import Allproducts from './Pages/AllProducts/Allproducts';
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
import OrderConfirm from './Pages/OrderConfirm/OrderConfirm';
import AboutUs from './Pages/FooterPages/AboutUs';
import Career from './Pages/FooterPages/Career';
import TermsOfUse from './Pages/FooterPages/TermsOfUse';
import PrivacyPolicy from './Pages/FooterPages/PrivacyPolicy';
import ReturnPolicy from './Pages/FooterPages/ReturnPolicy';
import RequireAuth from './Pages/LogIn/RequireAuth';



export const CountContext = createContext([]);


function App() {

  const [nav, setNav] = useState([])

  const [cartCount, setCartCount] = useState(0);
  // console.log(cartCount)

  return (
    <div className="App font-serif overflow-y-scroll no-scrollbar scrollbar-hide">
      <CountContext.Provider value={[cartCount, setCartCount]}>
        <Navbar
          nav={nav}
        ></Navbar>
        <Routes>

          <Route path='/' element={<Home
            setNav={setNav}
          ></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>

          <Route path='/orderConfirmation' element={
            <RequireAuth>
              <OrderConfirm></OrderConfirm>
            </RequireAuth>}></Route>

          {/* <Route path='/orderConfirmation' element={<OrderConfirm></OrderConfirm>}></Route> */}
          <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/allproducts' element={<Allproducts></Allproducts>}></Route>
          {/* <Route path='/viewcart' element={<ViewCart></ViewCart>}></Route> */}
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/career' element={<Career></Career>}></Route>
          <Route path='/termsofuse' element={<TermsOfUse></TermsOfUse>}></Route>
          <Route path='/privacypolicy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path='/returnpolicy' element={<ReturnPolicy></ReturnPolicy>}></Route>

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
