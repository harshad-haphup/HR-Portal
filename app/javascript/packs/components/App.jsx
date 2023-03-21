import React from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import AddUser from './AddUser'
import UserList from './UserList'
import Header from './Header'
import { Container } from '@mui/material'

const App = () => {
  return (
      <>
       <Router>
        <Header/>
        <Container className='mt-8'>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<UserList/>}/>
        </Routes>
        </Container>
       </Router>
      </>

  )
}

export default App