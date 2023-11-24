import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { addTodo } from "../../store/actions/todoActions";
//import  { getTodos} from '../../store/features/todosSlice'
import { addTodo, getTodos } from "../../store/actions/todoActions";


const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(todo))
    
    
    setTodo({
      name: "",
      isComplete: false,
    });
    dispatch(getTodos());
    e.target.value = "";
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          id="enter-todo"
          label="enterToDo"
          value={todo.name}
          onChange={(e) =>
            setTodo({ ...todo, name: e.target.value, date: new Date() })
          }
        />
        <button>Lägg till</button>
      </form>
    </>
  );
};

export default AddTodo;
