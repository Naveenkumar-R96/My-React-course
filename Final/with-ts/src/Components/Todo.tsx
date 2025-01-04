import React from "react";
import { useState } from "react";
interface Todo {
  task: string;
  id: number;

  completed: boolean;
}

const Todo = () => {
  const [todo, setTodo] = useState<Todo[]>([
    {
      task: "",
      id: 0,
      completed: false,
    }
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue=e.target.value;
    setTodo([{ ...todo[0], task: newValue }]);
  };

  const AddingEvent=()=>{
    
  }

  return (
    <div>
      <input
        type="text"
        value={todo[0].task}
        onChange={(e) => handleChange(e)}
        placeholder="Ener"
      />
      <button onClick={AddingEvent}>Add Now</button>
      {todo[0].task}
    </div>
  );
};

export default Todo;
