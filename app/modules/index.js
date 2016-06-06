'use strict';

if (location.protocol === 'https:') {
	__webpack_public_path__ = 'https://' + window.location.host + '/';
} else {
	__webpack_public_path__ = 'http://' + window.location.host + '/';
}

// globally-needed
require('./common/alias');
require('./common/utils');
require('./common/auth');
require('./common/interceptors');
require('./common/components/navigation');
require('./common/directives/mathjax');

// common styles
require('./common/styles/normalize.css');
require('./common/styles/foundation.css');
require('./common/styles/components.scss');

// separate 'pages'
require('./main');
require('./topic-list');

var crosslinks3App = angular.module('crosslinks3App', ['ngAnimate', 'ngSanitize', 'ui.router', 'oc.lazyLoad',
	'cl3.common.alias',
	'cl3.common.auth',
	'cl3.common.utils',
	'cl3.common.interceptors',
	'cl3.common.components.navigation',
	'cl3.common.directives.mathjax',

	'cl3.main',
	'cl3.topicList',
])

.config( ['$compileProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$ocLazyLoadProvider', function($compileProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $ocLazyLoadProvider) {

	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
	$httpProvider.interceptors.push('middlemanUrl');
	$ocLazyLoadProvider.config({
		debug: true
	});

	$urlRouterProvider.rule(function ($injector, $location) {
		var path = $location.url();
		// check to see if the path already has a slash where it should be
		if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) return;
		if (path.indexOf('?') > -1) {
			return path.replace('?', '/?');
		}

		return path + '/';
	});

	$stateProvider
	.state('main', {
		url: '/?query',
		templateUrl: 'main.html',
		controller: 'MainController',
	})

	.state('topic-list', {
		url: '/topics/?query',
		templateUrl: 'topicList.html',
		controller: 'TopicListController',
		reloadOnSearch: false
	})

	.state('topic-read', {
		url: '/topic/:topicIdentifier/',
		templateProvider: ['foo', function(foo) {
			return foo.template;
		}],
		controller: 'TopicReadController',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				var deferred = $q.defer();
				require.ensure(['./topic-read'], function(require) {
					var mod = require('./topic-read');
					console.info('required topic-read module');
					$ocLazyLoad.load({
						name: 'cl3.topicRead',
					})
					.then( function() {
						console.info('oclazyloaded topic-read');
						deferred.resolve(mod);
					});
				});
				return deferred.promise;
			}]
		},
		params: {topicId: ''}
	})

	.state('topic-edit', {
		url: '/topic/:topicIdentifier/edit/',
		templateProvider: ['foo', function(foo) {
			return foo.template;
		}],
		controller: 'TopicEditController',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				var deferred = $q.defer();
				require.ensure(['./topic-edit'], function(require) {
					var mod = require('./topic-edit');
					console.info('required topic-edit module');
					$ocLazyLoad.load({
						name: 'cl3.topicEdit',
					})
					.then( function() {
						console.info('oclazyloaded topic-edit');
						deferred.resolve(mod);
					});
				});
				return deferred.promise;
			}]
		}
	})

	.state('topic-history', {
		url: '/topic/:topicIdentifier/history/',
		templateProvider: ['foo', function(foo) {
			return foo.template;
		}],
		controller: 'TopicHistoryController',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				var deferred = $q.defer();
				require.ensure(['./topic-history'], function(require) {
					var mod = require('./topic-history');
					console.info('required topic-history module');
					$ocLazyLoad.load({
						name: 'cl3.topicHistory',
					})
					.then( function() {
						console.info('oclazyloaded topic-history');
						deferred.resolve(mod);
					});
				});
				return deferred.promise;
			}]
		}
	})

	.state('topic-add', {
		url: '/topics/add/',
		templateProvider: ['foo', function(foo) {
			return foo.template;
		}],
		controller: 'TopicAddController',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				var deferred = $q.defer();
				require.ensure(['./topic-add'], function(require) {
					var mod = require('./topic-add');
					console.info('required topic-add module');
					$ocLazyLoad.load({
						name: 'cl3.topicAdd',
					})
					.then( function() {
						console.info('ocLazyLoad loaded topic-add');
						deferred.resolve(mod);
					});
				});
				return deferred.promise;
			}]
		}
	})

	.state('edit-list', {
		url: '/edits/',
		templateProvider: ['foo', function(foo) {
			return foo.template;
		}],
		controller: 'EditListController',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				var deferred = $q.defer();
				require.ensure(['./edit-list'], function(require) {
					var mod = require('./edit-list');
					console.info('required edit-list module');
					$ocLazyLoad.load({
						name: 'cl3.editList',
					})
					.then( function() {
						console.info('ocLazyLoad loaded edit-list');
						deferred.resolve(mod);
					});
				});
				return deferred.promise;
			}]
		}
	})

	.state('team', {
		url: '/team/',
		templateProvider: ['foo', function(foo) {
			return foo.template;
		}],
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				var deferred = $q.defer();
				require.ensure(['./team'], function(require) {
					var mod = require('./team');
					console.info('required team module');
					$ocLazyLoad.load({
						name: 'cl3.team',
					})
					.then( function() {
						console.info('ocLazyLoad loaded team');
						deferred.resolve(mod);
					});
				});
				return deferred.promise;
			}]
		}
	})

	.state('about', {
		url: '/about/',
		templateProvider: ['foo', function(foo) {
			return foo.template;
		}],
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				var deferred = $q.defer();
				require.ensure(['./about'], function(require) {
					var mod = require('./about');
					console.info('required about module');
					$ocLazyLoad.load({
						name: 'cl3.about',
					})
					.then( function() {
						console.info('ocLazyLoad loaded about');
						deferred.resolve(mod);
					});
				});
				return deferred.promise;
			}]
		}
	})

	.state('faqs', {
		url: '/faqs/',
		templateProvider: ['foo', function(foo) {
			return foo.template;
		}],
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				var deferred = $q.defer();
				require.ensure(['./faqs'], function(require) {
					var mod = require('./faqs');
					console.info('required about faqs');
					$ocLazyLoad.load({
						name: 'cl3.faqs',
					})
					.then( function() {
						console.info('ocLazyLoad loaded faqs');
						deferred.resolve(mod);
					});
				});
				return deferred.promise;
			}]
		}
	})

	$locationProvider.html5Mode(true);
}])
