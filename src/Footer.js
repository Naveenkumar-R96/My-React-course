import React from 'react'

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>
        copyright&copyright
        {length}List items {length=== 1?"item":"items"}

    </footer>
  )
}

export default Footer