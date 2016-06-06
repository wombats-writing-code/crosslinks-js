
var directive = require('./searchSubject.directive.js');
var service = require('./searchSubject.service.js');
var searchSubjectController = require('./searchSubject.controller.js');
require('./searchSubject.scss');

module.exports = angular.module('cl3.common.components.searchSubject', [
])
.directive( 'searchSubject', directive)
.service( 'SearchSubjectService', ['$window', service])
.controller( 'SearchSubjectController', ['$scope', 'SearchSubjectService', searchSubjectController])
