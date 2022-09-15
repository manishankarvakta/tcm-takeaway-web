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


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/allproducts' element={<Allproducts></Allproducts>}></Route>
        <Route path='/viewcart' element={<ViewCart></ViewCart>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<PersonalInfo></PersonalInfo>}></Route>
          <Route path='perivousorders' element={<PreviousOrder></PreviousOrder>}></Route>
          <Route path='updatepersonalinfo' element={<UpdatePersonalInfo></UpdatePersonalInfo>}></Route>
        </Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
