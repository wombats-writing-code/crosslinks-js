'use strict';

var mathjax = require('./mathjax.js');

module.exports = angular.module( 'cl3.common.directives.mathjax', [
])
.directive( 'mathjax', ['$timeout', '$window', mathjax ])
