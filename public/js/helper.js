(function() {

// which will be exported to other js files
var Helper = window.Helper = window.Helper || {};
// pass from pre-written script
var task_id = Helper.task_id, 
    worker_id = Helper.worker_id;

var g_url_prefix = get_url_prefix();

function get_url_prefix() {
    console.log(window.location.pathname);
    // NOT localhost, get url prefix
    if (window.location.host.indexOf('localhost:') < 0) {
        var pathname = window.location.pathname;
        var port = pathname.split('/')[1];
        if ($.isNumeric(port)) {
            return '/' + port;
        }
    }
    return '';
}

// return true if the key is undefined or empty
// normally, web is running in test mode
Helper.is_empty = function(key) {
    return key == "None" || key == undefined || key == "" || key == {} || key == [];
};


Helper.url_for = function(url) {
    return url.indexOf('/') == 0 ? (g_url_prefix + url) : (g_url_prefix + '/' + url);
};


})();