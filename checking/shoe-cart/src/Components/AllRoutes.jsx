import React from 'react'
import ShoeDetail from './ShoeDetail'
import { Routes,Route } from 'react-router'
import PageNotFound from './PageNotFound'
import Product from '../Pages/Products/Product'
import Heart from './Heart'
import Cart from './Cart'
import { useState } from 'react'
const AllRoutes = ({filterdData,selectedoption,products}) => {
  const [cart,setCart]=useState([])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Product filterdData={filterdData}/>}/>
        <Route path='/details/:id' element={<ShoeDetail value={'hai'} cart={cart} setCart={setCart}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/heart' element={<Heart/>}/>
        <Route path='/cart'  element={<Cart cart={cart} setCart={setCart}/> } />
      </Routes>
    </div>
  )
}

export default AllRoutes
