
// index page
exports.index = function(req, res) {

    res.render('index', {
        title: 'Index',
        amt_hit: req.amt_hit
    });

}
