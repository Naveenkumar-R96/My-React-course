import React from 'react'
import ShoeDetail from './ShoeDetail'
import { Routes,Route } from 'react-router'
import PageNotFound from './PageNotFound'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='details' element={<ShoeDetail/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
