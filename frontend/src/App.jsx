import AuthPage from './components/AuthPage.jsx'
import './App.css'
import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <div>
      <NavBar />
      <div className='flex items-center justify-around h-[90vh] bg-[#E5D9F2]'>
        <div className='h-100 w-100 rounded-full'>
          <img src="./src/images/login.jpg" alt="image" className='rounded-full' />
        </div>
        <div className='h-100 w-100 rounded-2xl bg-[#CDC1FF] shadow-2xl'>
          <AuthPage />
        </div>
      </div>
    </div>
  )
}

export default App
