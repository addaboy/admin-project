import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import SignUp from './Authenticate/SignUp'
import SignIn from './Authenticate/SignIn'
import Register from './Register'
import './App.css'

import Home from './Components/Home'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='./Authenticate/SignIn.jsx' element={<SignIn />} />
        <Route path='./Register.jsx' element={<Register />} />
      </Routes>
    </BrowserRouter>
    
    </>

  )
}

export default App
