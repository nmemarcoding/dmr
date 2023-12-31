import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AddNewCar from './pages/AddNewCar/AddNewCar';
import useStore from './store';
import CarSearchPage from './pages/CarSearchPage/CarSearchPage';
import ReviewPage from  './pages/ReviewPage/ReviewPage'
import OrderDetailsPage from './pages/OrderDetailsPage/OrderDetailsPage';
import ResrervedCars from './pages/resrervedCars/resrervedCars';
import OrderHistory from './pages/OrderHistory/OrderHistory';
import AdminCarsPage from './pages/AdminCarsPage/AdminCarsPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const userInfo = useStore((state) => state?.userInfo)
  const [admin, setAdmin] = useState(userInfo?.isAdmin)

 
  return (
    <Router>
    <div className="app ">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/search" element={<CarSearchPage/>}/>
        <Route path="/review" element={userInfo._id ? <ReviewPage/> : <LoginPage/>}/>
        <Route path="/orderdetails" element={userInfo._id ? <OrderDetailsPage/> : <LoginPage/>}/>
        <Route path="/orderhistory" element={userInfo._id ? <OrderHistory/> : <LoginPage/>}/>
        {admin && <Route path="/admin" element={<AdminDashboard/>}/>}
        {admin && <Route path="/admin/addnewcar" element={<AddNewCar/>}/>}
        {admin && <Route path="/admin/reservedcars" element={<ResrervedCars/>}/>}
        {admin && <Route path="/admin/cars" element={<AdminCarsPage/>}/>}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
