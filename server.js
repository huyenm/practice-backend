if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')


const indexRouter = require('./routes/index')

/* set view engine & where it comes from */
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
/* hook up Express layout, don't have duplicate html header and footer in every file */
app.set('layout', 'layouts/layout')
app.use(expressLayout)
/* where public files will be: images, style sheet  */
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)