import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Navbar from './ShareComponents/Navbar'
import Dashboard from './components/Dashboard'
import { Incidents } from './components/Incidents'
import { GetStart } from './components/GetStart'
import { Location } from './components/Location'
import Describes from './components/Describes'
import IncidentsData from './components/IncidentsData'
import FinishPage from './components/FinishPage'


function App() {
  
  return (
    <main className='font-Onest'>
     <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbar/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Incidents' element={<Incidents/>}/>
        <Route path='/get-start' element={<GetStart/>}/>
        <Route path='/describes' element={<Describes/>}/>
        <Route path='/incidentsData' element={<IncidentsData/>}/>
        <Route path='/finished' element={<FinishPage/>}/>
        <Route path='/Locations' element={<Location/>}/>
        
        
        
      </Routes>
     </BrowserRouter>
    
    </main>
    
  )
}

export default App
