(function($) {

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


Helper.initiate_ajax_handler = function(url, data, on_success, on_error) {
    var default_data = {'task_id':task_id, 'worker_id':worker_id};
    $.extend(default_data, data);
    console.log("Default data:", JSON.stringify(default_data), url);
    
    on_error = typeof on_error !== "undefined" ? on_error : default_on_error;

    $.ajax({
        url: Helper.url_for(url),
        type: "POST",
        dataType: "json",
        data: default_data,
        success: on_success,
        error: on_error
    });

    function default_on_error(jq_xhr, text_status, error_thrown) {
        // console.log("ERROR POSTING:", error_thrown);
    }
};

Helper.angular_http = function($http, url, data, on_success, on_error) {
    var default_data = {'task_id':task_id, 'worker_id':worker_id};
    $.extend(default_data, data);
    console.log("Default data:", JSON.stringify(default_data), url);
    
    on_error = typeof on_error !== "undefined" ? on_error : default_on_error;

    $http({
        method: "POST",
        url: Helper.url_for(url),
        // data: default_data,
        // below two are necessary for server to receive data
        data: $.param(default_data),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(on_success, on_error);

    function default_on_error(jq_xhr, text_status, error_thrown) {
        // console.log("ERROR POSTING:", error_thrown);
    }
};

Helper.url_for = function(url) {
    return url.indexOf('/') == 0 ? (g_url_prefix + url) : (g_url_prefix + '/' + url);
};

Helper.get_all_ids = function() {
    var $form = $('#main-form');

    function get_by_attr(attr) {
        return $form.data(attr);
    }
    
    function get_by_name(name) {
        var name = 'input[name='+ name + ']';
        return $form.find(name).val();
    }

    return {
        task_id: task_id,
        worker_id: worker_id,
        hit_id: get_by_attr('hit-id'),
        turkSubmitTo: get_by_attr('turksubmitto'),
        assign_id: get_by_name('assignmentId'),
    };
}

})(jQuery);