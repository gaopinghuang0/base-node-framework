
exports.parseInfo = function(req, res, next) {
    var info = req.query;
    console.log(req.query)

    var amt_hit = {
        worker_id: info.workerId || 'AAAA',  // default
        turkSubmitTo: info.turkSubmitTo,
        hitId: info.hitId,
        assignmentId: info.assignmentId,
        task_id: info.task_id || 1
    };

    console.log(amt_hit)

    req.amt_hit = amt_hit;

    next();
}