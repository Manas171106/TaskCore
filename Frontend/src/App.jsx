import "./index.css"
import Signin from './pages/Signin'
import Login from './pages/loginpage'
import AdminDashboard from "./pages/AdminDashboard"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

    <Signin/>
    <Login/>
    <AdminDashboard/>
    <EmployeeDashboard/>

    </>
  )
}

export default App
