import React from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import AddUser from './AddUser'

const App = () => {
  return (
   
       <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
       </Router>

  )
}

export default App