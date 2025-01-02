import React, { useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      quate: "naan than",
      author: "nk",
    },
    {
      quate: "na illa",
      author: "kn",
    },
    {
      quate: "illa na",
      author: "kk",
    },
  ]);

  const [currentIndex,setCurrentIndex]=useState(0)

  const handleNext=()=>{
    setCurrentIndex(( currentIndex + 1)%testimonials.length)
    console.log(currentIndex)
  }

  const handlePrev=()=>{

  }

  return <div>
    <section>
        <h1>{testimonials[currentIndex].quate}</h1>
        <p>{testimonials[currentIndex].author}</p>
        <button onClick={handleNext}>next</button>
        <button onClick={handlePrev}>prev</button>
    </section>
  </div>;
};

export default Testimonials;
