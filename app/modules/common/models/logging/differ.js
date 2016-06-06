'use strict';

module.exports = function DifferService() {

	// different strategies to handle comparing each property of a Topic
	var strategies = {
		'displayName': function(val0, val1){
			return angular.equals(val0, val1);
		},
		'description': function(val0, val1){
			return angular.equals(val0, val1);
		},
		'prepare': function(val0, val1){
			var array0 = _.pluck(val0, 'id');
			var array1 = _.pluck(val1, 'id');
			return angular.equals(array0, array1);
		},
		'relate': function(val0, val1){
			var array0 = _.pluck(val0, 'id');
			var array1 = _.pluck(val1, 'id');
			return angular.equals(array0, array1);
		},
		'advance': function(val0, val1){
			var array0 = _.pluck(val0, 'id');
			var array1 = _.pluck(val1, 'id');
			return angular.equals(array0, array1);
		},
		'learn': function(array0, array1){
//			console.log(array0);
			var urls0 = _.pluck(array0, 'url');
			var urls1 = _.pluck(array1, 'url');
			var names0 = _.pluck(array0, 'displayName');
			var names1 = _.pluck(array1, 'displayName');
			return angular.equals(urls0, urls1) && angular.equals(names0, names1);
		},
		'apply': function(array0, array1){
			var urls0 = _.pluck(array0, 'url');
			var urls1 = _.pluck(array1, 'url');
			var names0 = _.pluck(array0, 'displayName');
			var names1 = _.pluck(array1, 'displayName');
			return angular.equals(urls0, urls1) && angular.equals(names0, names1);
		},
		'subject': function(array0, array1){
			var numbers0 = _.pluck(array0, 'number');
			var numbers1 = _.pluck(array1, 'number');
			return angular.equals(array0, array1);
		},
		'reference': function(array0, array1){
			var urls0 = _.pluck(array0, 'url');
			var urls1 = _.pluck(array1, 'url');
			var names0 = _.pluck(array0, 'displayName');
			var names1 = _.pluck(array1, 'displayName');
			return angular.equals(urls0, urls1) && angular.equals(names0, names1);
		},
	};

	this.getDifferentProperties = function(model0, model1) {
		var properties = _.keys(strategies);
		var result = _.filter( properties, function(prop) {
			var comparator = strategies[prop];
//			console.log('is ' + prop + ' different?:', !comparator(model0[prop], model1[prop]));
			return !comparator(model0[prop], model1[prop]);
		});
		return result;
	}

}
