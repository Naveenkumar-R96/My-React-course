import React from 'react'
import Meals from './components/Meals'
import Calculator from './components/Calculator'
import Hidden from './components/Hidden'
import Testimonials from './components/Testimonials'
import Accordian from './components/Accordian'
import accordian from './components/acordian'
import { Form } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Meals/>
      <Calculator/> 
      <Hidden/>
        <Testimonials/>
      */}
    {/*  <div className="accordina">
      {
        accordian.map(({title,content})=>(
          <Accordian title={title} content={content}/>
        ))
      }
     </div> */}

    <Form/>    
      
     
    </div>
  )
}

export default App
