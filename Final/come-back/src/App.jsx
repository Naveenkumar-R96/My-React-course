import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Weather from "./Components/Weather"
import UserStatus from './Components/UserStatus'

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer />
      <UserStatus loggedIn={true} isAdmin={true}/>

    </div>
  )
}

export default App
