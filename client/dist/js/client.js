(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _index = require('./index');

var _helper = require('./helper');

console.log(_index.a);
console.log(_helper.urlPrefix);
console.log((0, _helper.isEmpty)(_index.a));
console.log((0, _helper.urlFor)('/hello'));

},{"./helper":2,"./index":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmpty = isEmpty;
exports.urlFor = urlFor;

function getUrlPrefix() {
    // console.log(window.location.pathname);
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

var urlPrefix = exports.urlPrefix = getUrlPrefix();

// return true if the key is undefined or empty
// normally, web is running in test mode
function isEmpty(key) {
    return key == "None" || key == undefined || key == "" || key == {} || key == [];
};

function urlFor(url) {
    return url.indexOf('/') == 0 ? urlPrefix + url : urlPrefix + '/' + url;
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = exports.a = 'hello world';

},{}]},{},[1]);
