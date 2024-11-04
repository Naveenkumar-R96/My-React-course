import React from 'react'

const Footer = ({length}) => {
   
  return (
    <footer>Your lis has {length} {length ===1  ? 'item' : "items"} </footer>
  )
}

export default Footer
