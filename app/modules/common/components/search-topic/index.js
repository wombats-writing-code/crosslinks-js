'use strict';

var directive  = require('./searchTopic.directive.js');
var service = require('./searchTopic.service.js');
var controller = require('./searchTopic.controller.js');
//var rabinKarp = require('./rabinKarp.js');
require("./searchTopic.scss");


module.exports = angular.module('cl3.common.components.searchTopic', [
	'cl3.common.utils'
])
.directive( 'searchTopic', directive )
//.service( 'RabinKarp', rabinKarp)
.service( 'SearchTopicService', ['$window', 'Utils', service])
.controller( 'SearchTopicController', ['$timeout', '$scope', 'SearchTopicService', controller])

