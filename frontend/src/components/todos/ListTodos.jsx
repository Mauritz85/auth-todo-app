import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTodo, getTodos } from "../../store/features/todosSlice";

const ListTodos = ({ setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);

  const { todos } = todosState;

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2> You have {todos && todos.length} tasks </h2>

      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.name}</h3>
          <button onClick={() => setTodo({ ...todo })}>Ändra</button>
          <button onClick={() => handleDelete(todo._id)}>Ta bort</button>
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
