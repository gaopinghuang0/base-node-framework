// get all controllers
var Index = require('./controllers/index');
var AMT = require('./controllers/AMT');


module.exports = function(app) {

	// pre-handle user, so that every page can check session
	// app.use(function(req, res, next) {
	// 	var _user = req.session.user

	// 	app.locals.user = _user

	// 	next()
	// })

	// Index
    // Add AMT.parseInfo for each GET request, not for ajax call
	app.get('/', AMT.parseInfo, Index.index);

}