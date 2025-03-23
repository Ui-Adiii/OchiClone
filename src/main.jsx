import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ContactUs,NavBar,App,NotFound,Services,OurWork,Insights,AboutUs} from "./index"
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path='' element={<App/>}/>
        <Route path='/services' element={<Services/>} />
        <Route path='/ourwork' element={<OurWork/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/insights' element={<Insights/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>

   
  </StrictMode>,
)
