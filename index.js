require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const mustache = require('mustache-express')


const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


const routes = {}
routes.index = require('./routes/index')
routes.short = require('./routes/short')
app.use('/', routes.index)
app.use('/short', routes.short)


app.listen(process.env.PORT || 3000, () => console.log('Listening...'))
