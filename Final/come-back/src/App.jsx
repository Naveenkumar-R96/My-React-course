import React, { useState } from "react";
import UseState from "./Components/UseState";
import Counter from "./Components/Counter";
import Todolist from "./Components/Todolist";

const App = () => {

  //normal usestate
  
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  const increment = () => {
    return setCount(count + 1);
  };
  const decrement = () => {
    return setCount(count - 1);
  };

  //Array useState

  const [friends, setFriends] = useState(["Alex", "john"]);

  const addNewFriend = () => {
    return setFriends([...friends, "naveen"]);
  };

  const removeFriend = () => {
    return setFriends(friends.filter((f) => f !== "john"));
  };

  const updateOnefriend = () => {
    return setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));
  };

  //object useState

  const [movie, setMovie] = useState({
    title: "RRR",
    rating: 5,
  });

  const handleRating = () => {
    setMovie({ ...movie, rating: 9 });
  };

  //Array with object useState

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "spiderman",
      rating: 8,
    },
    {
      id: 2,
      title: "AntMan",
      rating: 8,
    },
    {
      id: 3,
      title: "superMan",
      rating: 8,
    },
  ]);

  const movieChange = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? {...movies, title: "naveenMan"   } : m))

    );
  };

  return (
    <div>
      <section>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <p>
          {friends.map((names) => (
            <li key={Math.random()}>{names}</li>
          ))}
        </p>

        <button onClick={addNewFriend}>Add a New Friend</button>
        <button onClick={removeFriend}>remove Friend</button>
        <button onClick={updateOnefriend}>update one frined</button>

        <h1>{movie.title}</h1>
        <p>{movie.rating}</p>

        <button onClick={handleRating}>increase movie rating</button>

        <br />
        <br />

        <p>
          {movies.map((move) => (
            <ul key={move.id}>
              <li>{move.title}</li>
              <li>{move.rating}</li>
            </ul>
          ))}
        </p>

        <button onClick={movieChange}>Change Name</button>
      </section>

      <UseState/>
      <Counter/>
      <Todolist/>
    </div>
  );
};

export default App;
