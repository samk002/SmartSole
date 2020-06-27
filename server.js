const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const users = require('./routes/api/users')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./config/keys').mongoURI

mongoose.connect(db, ({ useNewUrlParser: true }))
    .then(res => console.log("MongoDB connected successfully"))
    .catch(err => console.log(err))

app.use(passport.initialize())
require('./config/passport')(passport)
app.use('/api/users', users)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up and runninng on port ${PORT}`))