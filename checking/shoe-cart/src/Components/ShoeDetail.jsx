import React from 'react'
import { useParams } from 'react-router'

const ShoeDetail = ({value}) => {
  const params =useParams()
  return (
    <div>
     <h1 style={{fontSize:'50rem'}}>{value}</h1>
    </div>
  )
}

export default ShoeDetail
