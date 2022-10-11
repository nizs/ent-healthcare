import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from '../src/shared/Header/Header'
import Footer from './shared/Footer/Footer';
import Services from './pages/Services/Services';
import News from './pages/News/News';
import Aboutus from './pages/Aboutus/Aboutus';
import Login from './pages/Register/Login/Login';
import Signup from './pages/Register/Signup/Signup';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className='ent-body'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/services' element={<Services></Services>} />
        <Route path='/servicedetails' element={<ServiceDetails></ServiceDetails>} />
        <Route path='/servicedetails/:serviceid' element={<ServiceDetails></ServiceDetails>} />
        <Route path='/blogs' element={<News></News>} />
        <Route path='/about' element={<Aboutus></Aboutus>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Signup></Signup>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
