import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Navbar from './ShareComponents/Navbar'
import Dashboard from './components/Dashboard'

function App() {
  
  return (
    <main className='font-Onest'>
     <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbar/>}>
        
        </Route>
        
      </Routes>
     </BrowserRouter>
    </main>
  )
}

export default App
