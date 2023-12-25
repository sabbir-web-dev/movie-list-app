import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Error from '../Pages/Error'
import Navber from '../Components/Navber/Navber'
import MovieView from '../Features/MovieView'
import ToopRated from '../Pages/RopRated'
import Upcomming from '../Pages/Upcomming'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Navber />
      <Routes>
        <Route path='/' element={<MovieView/>}/>
        <Route path='/top-rated' element={<ToopRated/>}/>
        <Route path='/up-comming' element={<Upcomming/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
