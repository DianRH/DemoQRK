/*jslint indent:2, regexp:true*/
'use strict';
var sortedJSON = require('./sortedJSON');

module.exports = function httpRequest(opts, cb) {
  var http = 'https', request, strBody, xhr, XHR, url, timeout, amount, didTimeOut;
  
  amount = opts.timeout || 5000;
  timeout = setTimeout(function () {
    didTimeOut = true;
    if (typeof cb === 'function') {
      cb({ statusCode : 403, body : {code: 403, message: 'Timeout'}});
    }
  }, amount);

  strBody = '';
  XHR = global.XMLHttpRequest || false;

  if (opts.body) {
    strBody = typeof opts.body === 'object' ? sortedJSON(opts.body) : opts.body;
  }
  delete opts.body;

  if (global.fetch) {
    url = (opts.protocol || 'https') + '://' + opts.host + (opts.port ? ':' + opts.port : '') + opts.path;
    opts = {
      method  : opts.method,
      headers : {
        'Content-Type'    : 'application/json;charset=UTF-8',
        Accept            : 'application/json,*/*'
      }
    };

    if (strBody && (opts.method === 'POST' || opts.method === 'PUT')) {
      opts.body = strBody;
    }
    global.fetch(url, opts).then(function (res) {
      res.json().then(function (json) {
        clearTimeout(timeout);
        if (typeof cb === 'function') {
          cb({ statusCode : res.status, body : json });
        }
      }).catch(function (err) {
        if (didTimeOut) {
          return;
        }
        cb({ statusCode : 403, body : {code: 403, message: 'Bad Request'}});
      });
    }).catch((error)=>{
      cb({ statusCode : 503, body : {code: 503, message: 'Service Unavailable'}});
    });
  }

  if (XHR && !global.fetch) {
    xhr = new XHR();
    url = (opts.protocol || 'https') + '://' + opts.host + (opts.port ? ':' + opts.port : '') + opts.path;
    xhr.open(opts.method, url, true);
    xhr.onreadystatechange = function () {
      var value;

      clearTimeout(timeout);
      if (didTimeOut) {
        return;
      }
      if (xhr.readyState !== 4) {
        return;
      }

      try {
        value = JSON.parse(xhr.responseText);
      } catch (e) {
        value = xhr.responseText;
      }

      if (typeof cb === 'function') {
        cb({ statusCode : xhr.status, body : value });
      }
    };
    if (strBody && (opts.method === 'POST' || opts.method === 'PUT')) {
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(strBody);
    } else {
      xhr.send();
    }
  }
};

