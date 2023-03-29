import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import AddUser from './AddUser'
import UserList from './UserList'
import Header from './Header'
import Navbar from './Navbar'
import { Box, Container } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import UpdateUser from './UpdateUser'
import Deduction from './Deduction'
import Login from './Login'
import PrivateRoutes from './common/PrivateRoutes'
import PublicRoutes from './common/PublicRoutes'

const App = () => {
  const matches = useMediaQuery('(min-width:768px)');
  return (
      <Box className='h-screen w-full flex items-center'>
       <Router>
        <Container sx={!matches ? {paddingTop:25}:null}>
        <Routes>
           <Route element={<PrivateRoutes/>}>
              <Route element={<Home/>} path="/" exact/>
              <Route element={<AddUser/>} path="/add"/>
              <Route element={<UserList/>} path="/users"/>
              <Route element={<UpdateUser/>} path="/user/update/:id"/>
              <Route element={<Deduction/>} path="/deduction"/>
           </Route>
           <Route element={<PublicRoutes/>}>
              <Route path="/about" element={<About/>}/>
          </Route>
              <Route path="/login" element={<Login/>}/>
        </Routes>
        </Container>
       </Router>
      </Box>
  )
}

export default App