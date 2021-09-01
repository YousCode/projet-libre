const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
var cors = require('cors')

const PORT = 4000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const apiRouter = require('./Routes/welcome')
app.use('/api', apiRouter)

const usersRouter = require('./Routes/users')
app.use('/api/users', usersRouter)

app.listen(PORT, () => console.log('Server Started on port ' + PORT));