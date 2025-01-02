import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Meals = () => {

    const [items,setItems]=useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                const data = await res.json();
                setItems(data.meals);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMeals();
    }, []);

  return (
    <div>
      {items.map(({strMeal,strMealThumb,idMeal})=>{
        return(
            <div>
                <img src={strMealThumb} alt="" />
                <section>
                    <p>{strMeal}</p>
                    <p>{idMeal}</p>
                </section>
            </div>
        )
    })}
    </div>
  )
}

export default Meals
