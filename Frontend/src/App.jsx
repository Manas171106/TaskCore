import "./index.css"
import Signin from './pages/Signin'
import Login from './pages/loginpage'
import AdminDashboard from "./pages/AdminDashboard"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/Admin" element={<AdminDashboard/>}/>
        <Route path="employee" element={<EmployeeDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
