const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://Ayoub_test:Ayoub_test@cluster0.ee3il.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)
const blocRouter = require('./routes/blocs')
app.use('/blocs',blocRouter)
const salleRouter = require('./routes/salles')
app.use('/salles',salleRouter)



app.listen(9000, () => {
    console.log('Server started')
})