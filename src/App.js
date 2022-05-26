import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Student from './component/Student';
import Contact from './component/Contact';
import './Style.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>

        <Navbar />

          <Routes>

            <Route path='/home' element={<Home />} />
            <Route path='/student' element={<Student />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>
      
      
      </BrowserRouter>

    </div>
  )
}

export default App;