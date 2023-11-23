import axios from 'axios'
import { backendUrl } from '../../api'

export const getTodos = () => {
    return (dispatch) => {
      axios
        .get(`${backendUrl}/todos`)
        .then((todos) => {
            
          dispatch({
            type: 'GET_TODO',
            todos: todos
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
  };
  
  export const addTodo = (todo) => {
    return (dispatch, getState) => {
      axios
        .post(`${backendUrl}/todos`, todo)
        .then((response) => {
          const newTodo = response.data; // Extract the data from the response
          dispatch({
            type: 'ADD_TODO',
            todo: newTodo, // Dispatch only the necessary serializable data
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
}