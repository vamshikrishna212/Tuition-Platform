import AuthPage from './components/AuthPage.jsx'
import NavBar from './components/NavBar.jsx'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
//helllo
function App() {
  const [imgUrl, setImgUrl] = useState('./src/images/2534028.jpg');
  const [role, setRole] = useState('');
  const [loginOrRegister, setLoginOrRegister] = useState('login');
  const handleRegister = () => {
    setImgUrl('./src/images/2319575.jpg');
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/aboutus' element={<About />}></Route>
        <Route path='/contactus' element={<Contact />}></Route>
        <Route path='/login'
          element={<AuthPage
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
            role={role}
            setRole={setRole}
            loginOrRegister={loginOrRegister}
            setLoginOrRegister={setLoginOrRegister}
            handleRegister={handleRegister}
          />}
        >
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
