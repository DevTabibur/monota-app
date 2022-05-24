import Login from "./Pages/Shared/Login/Login";
import Register from "./Pages/Shared/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Pages/Shared/Footer/Footer";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import Blog from "./Pages/Blog/Blog";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Profile from "./Pages/Profile/Profile";
import MyOrder from "./Pages/My Orders/MyOrder";
import AddReview from "./Pages/Add Review/AddReview";
import Payment from "./Pages/Payment/Payment";
import Users from "./Pages/Shared/Users/Users";


// demo https://opencart.opencartworks.com/themes/so_monota/layout6/

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        }></Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
          <Route index element={<Profile/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="order" element={<MyOrder/>}></Route>
          <Route path="review" element={<AddReview/>}></Route>
          <Route path="users" element={<Users/>}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
