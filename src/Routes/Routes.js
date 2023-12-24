import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Error from '../Pages/Error'
import Navber from '../Components/Navber/Navber'
import MovieView from '../Features/MovieView'
import AddMovie from '../Pages/AddMovie'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Navber />
      <Routes>
        <Route path='/' element={<MovieView/>}/>
        <Route path='/add-movie' element={<AddMovie/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
