import axios from 'axios'
import { baseURL, setHeaders } from '../../api';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}todos`, setHeaders());
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);


/* export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${baseURL}todos`, setHeaders())
      .then((response) => {
        const data = response.data;
        dispatch({
          type: 'GET_TODOS',
          todos: data // Assuming the todos are in response.data
        });
      })
      .catch((error) => {
        console.log(error.response);
        // You might dispatch an error action here if needed
      });
  };
}; */
  
  export const addTodo = (todo) => {
    return (dispatch, getState) => {
        axios
            .post(`${baseURL}todos`, todo)
            .then((response) => {
                const newTodo = response.data;
                dispatch({
                    type: 'ADD_TODO',
                    todo: newTodo,
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
}