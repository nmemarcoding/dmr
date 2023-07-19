import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AddNewCar from './pages/AddNewCar/AddNewCar';
function App() {
  return (
    <Router>
    <div className="app ">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/admin/addnewcar" element={<AddNewCar/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
