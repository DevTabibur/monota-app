import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Pages/Shared/HeaderNav/HeaderNav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Blog from './Pages/Blog/Blog';

// demo https://opencart.opencartworks.com/themes/so_monota/layout6/

function App() {
  return (
    <>
    <HeaderNav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>

      <Route path="/contact" element={
        <RequireAuth>
          <Contact/>
        </RequireAuth>
      }></Route>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    {/* <Footer/> */}
    </>
  );
}

export default App;
