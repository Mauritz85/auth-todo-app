import todos from './routes/todos.js';
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import signup from './routes/signup.js'
import signin from './routes/signin.js'

import { Todo } from './models/todo.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/todos', todos)
app.use('/api/signup', signup)
app.use('/api/signin', signin)

app.get('/', (req, res) => {
    res.send('Welcome to our todos api..')
})

const connection_string = process.env.CONNECTION_STRING || 5000
const port = process.env.PORT


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

mongoose.connect(connection_string)
    .then(() => console.log('MongoDB connection established...'))
    .catch((error) => console.error("MongoDB connection failed:", error.message))