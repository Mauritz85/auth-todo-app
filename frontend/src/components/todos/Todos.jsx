import React, {useState}  from 'react';
import AddTodo from './AddTodo'
import ListTodos from './ListTodos';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Todos = () => {
    const auth= useSelector(state => state.auth)
    const [todo, setTodo] = useState({
        name: '',
        isComplete: false
    })

    if(!auth._id) return <Navigate to='signin'/>
    return (
        <>
        <AddTodo/>
        <ListTodos/>
        </>
    )
}

export default Todos