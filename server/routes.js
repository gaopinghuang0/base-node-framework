// get all controllers
var Index = require('./controllers/index');


module.exports = function(app) {

	/*** Index */

    // Add AMT.parseInfo for each GET request, not for ajax call
	app.get('/', Index.index);

}