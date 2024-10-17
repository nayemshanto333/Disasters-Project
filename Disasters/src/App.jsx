import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Navbar from './ShareComponents/Navbar'
import Dashboard from './components/Dashboard'
import { MobileMenu } from './ShareComponents/MobileMenu'
import { Incidents } from './components/Incidents'

function App() {
  
  return (
    <main className='font-Onest'>
     <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbar/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Incidents' element={<Incidents/>}/>
        
       
        
      </Routes>
     </BrowserRouter>
    
    </main>
  )
}

export default App
