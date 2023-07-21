import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AddNewCar from './pages/AddNewCar/AddNewCar';
import useStore from './store';
import CarSearchPage from './pages/CarSearchPage/CarSearchPage';

function App() {
  const userInfo = useStore((state) => state.userInfo)
  const [admin, setAdmin] = useState(userInfo.isAdmin)
 
  return (
    <Router>
    <div className="app ">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/search" element={<CarSearchPage/>}/>
        {admin && <Route path="/admin" element={<AdminDashboard/>}/>}
        {admin && <Route path="/admin/addnewcar" element={<AddNewCar/>}/>}
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
