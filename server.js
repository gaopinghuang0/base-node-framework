var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var logger = require('morgan')
var path = require('path')
var config = require('./config/config')

var port = process.env.PORT || config.PORT

var app = express()

app.set('views', './server/views')
app.set('view engine', 'pug')

// use body-parser to grab info from POST
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

var env = process.env.NODE_ENV || 'development'
app.locals.node_env = env
if (env === 'development') {
	app.set('showStackError', true)
	app.use(logger(':method :url :status'))
	// prettify the page source
	app.locals.pretty = true
}

// set url_prefix when running on remote server 
app.locals.url_for = function(url) {
    var url_prefix = env === 'production' ? '/' + (''+port).slice(2) : '';
    return url_prefix + url;
}

// all routes
require('./server/routes')(app)
app.listen(port)

console.log('server started on port ' + port + ' in ' + env + ' mode');
