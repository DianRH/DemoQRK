/*jslint indent:2, regexp:true*/
/*global XMLHttpRequest*/
(function (global) {
  'use strict';
  var httpRequest = require('./lib/httpRequest'),
    main = require('./main')(httpRequest);
    
    module.exports = main;
}(this));
