import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Login from './Components/AuthPages/Login';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './Components/AuthPages/Signup';
import DatalListpage from './Components/listingPages/DatalListpage';
import Error from './Components/404/Error';
import Header from './Components/Header';
import { ListItems } from './Components/Data/Data';
import ListItemDetails from './Components/listingPages/ListItemDetails';
function App() {

  const [auth, setAuth] = useState(false)

  return (
    <>
      <Router>

      {
        auth && <Header setAuth={setAuth}/>
      }
      {auth ? <Routes>
        <Route path='/' element={<DatalListpage />} /> 
        <Route path='/dataDetail/:id' element={<ListItemDetails />} /> 
        </Routes> :
       <Routes>   
       <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signUp" element={<Signup />} />
      </Routes>}
      </Router>
    </>
  )
}

export default App
