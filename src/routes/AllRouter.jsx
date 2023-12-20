import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Room from '../Pages/Room'
const AllRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/room/:id' element={<Room/>} />
    </Routes>
  )
}

export default AllRouter