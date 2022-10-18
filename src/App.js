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
import RequireAuth from './components/RequireAuth/RequireAuth';
import BlogDetails from './pages/News/BlogDetails/BlogDetails';
import Team from './pages/Team/Team';
import Error from './pages/Error/Error';
import Checkout from './pages/Checkout/Checkout';
import Orders from './pages/Orders/Orders';
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    <div className='ent-body'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/services' element={<Services></Services>} />
        <Route path='/appointment' element={<Appointment></Appointment>} />
        <Route path='/servicedetails/:serviceid' element=
          {
            <RequireAuth>
              <ServiceDetails></ServiceDetails>
            </RequireAuth>
          }
        />
        <Route path='/checkout' element=
          {
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        />
        <Route path='/orders' element={<Orders></Orders>} />
        <Route path='/blogs' element={<News></News>} />
        <Route path='blogs/blogdetails/:blogid' element={<BlogDetails></BlogDetails>} />
        <Route path='/team' element=
          {
            <RequireAuth>
              <Team></Team>
            </RequireAuth>
          }
        />
        <Route path='/about' element=
          {
            <RequireAuth>
              <Aboutus></Aboutus>
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Signup></Signup>} />
        <Route path='*' element={<Error></Error>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
