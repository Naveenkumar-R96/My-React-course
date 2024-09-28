import React from 'react'

const Footer = () => {
    const year=new Date();
  return (
    <footer>
        copyright&copyright{year.getFullYear()}
    </footer>
  )
}

export default Footer