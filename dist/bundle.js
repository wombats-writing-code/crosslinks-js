/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			var _m = moreModules[moduleId];

/******/ 			// Check if module is deduplicated
/******/ 			switch(typeof _m) {
/******/ 			case "object":
/******/ 				// Module can be created from a template
/******/ 				modules[moduleId] = (function(_m) {
/******/ 					var args = _m.slice(1), templateId = _m[0];
/******/ 					return function (a,b,c) {
/******/ 						modules[templateId].apply(this, [a,b,c].concat(args));
/******/ 					};
/******/ 				}(_m));
/******/ 				break;
/******/ 			case "function":
/******/ 				// Normal module
/******/ 				modules[moduleId] = _m;
/******/ 				break;
/******/ 			default:
/******/ 				// Module is a copy of another module
/******/ 				modules[moduleId] = modules[_m];
/******/ 				break;
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (location.protocol === 'https:') {
		__webpack_require__.p = 'https://' + window.location.host + '/';
	} else {
		__webpack_require__.p = 'http://' + window.location.host + '/';
	}

	// globally-needed
	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(41);

	// common styles
	__webpack_require__(43);
	__webpack_require__(45);
	__webpack_require__(47);

	// separate 'pages'
	__webpack_require__(49);
	__webpack_require__(82);

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
					__webpack_require__.e/* nsure */(1, function(require) {
						var mod = __webpack_require__(96);
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
					__webpack_require__.e/* nsure */(2, function(require) {
						var mod = __webpack_require__(162);
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
					__webpack_require__.e/* nsure */(3, function(require) {
						var mod = __webpack_require__(186);
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
					__webpack_require__.e/* nsure */(4, function(require) {
						var mod = __webpack_require__(189);
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
					__webpack_require__.e/* nsure */(5, function(require) {
						var mod = __webpack_require__(195);
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
					__webpack_require__.e/* nsure */(6, function(require) {
						var mod = __webpack_require__(198);
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
					__webpack_require__.e/* nsure */(7, function(require) {
						var mod = __webpack_require__(202);
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
					__webpack_require__.e/* nsure */(8, function(require) {
						var mod = __webpack_require__(204);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var alias = __webpack_require__(2);

	module.exports = angular.module( 'cl3.common.alias', [
	])
	.service( 'Alias', alias)




/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function AliasService() {

		var Alias = {
			createAlias: function(displayName) {
				var formatted = displayName.toLowerCase().split(' ').join('-');
				formatted = formatted.replace(/[^a-zA-Z0-9\-\_]/gi, '');
	//			console.log(formatted);
				return formatted;
			}
		}

		return Alias;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var service = __webpack_require__(4);

	module.exports = angular.module( 'cl3.common.utils', [
	])
	.service( 'Utils', ['$q', '$window', service])


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function($q, $window) {

		_.maybe = function(fn) {
			return function() {
				var i;
				if (arguments.length === 0) {
					return
				}
				else {
					for (i = 0; i < arguments.length; ++i) {
						if (arguments[i] == null) return arguments[i];
					}
					return fn.apply(this, arguments)
				}
			}
		}

	        var isHttps = function() {
	                return $window.location.protocol == 'https:';
	        }

		// === public api 

		this.isMobile = function() {
			// device detection
			if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) return true;

			return false;
		}

		this.isInt = function(value) {
			return !isNaN(value) && 
				parseInt(Number(value)) == value && 
				!isNaN(parseInt(value, 10));
		}

		this.isHttps = isHttps;

		this.goToHttps = function() {
			if (!isHttps()) return $window.location.href.replace('http', 'https');
		}

		this.isLocal = function() {
			return $window.location.hostname.indexOf('localhost') > -1;
		}

		this.isProd = function() {
			return $window.location.host == 'crosslinks.mit.edu';
		}

		this.loadD3 = function() {
	                var deferred = $q.defer();
			var d3 = d3 || undefined;
			if (d3) {
				deferred.resolve(d3);
			} else {
				window.initD3 = function() {                                                                         
					deferred.resolve();
				}
				var script = document.createElement('script');
				document.body.appendChild(script);
				script.onload = window.initD3;
				script.onreadystatechange = window.initD3;
				script.src = isHttps ? 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.js' : 'http://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.js';
			}

	                return deferred.promise;
		}

		this.rewriteToAlias = function(alias) {
			var newPath = '/topic/' + alias + '/';
			$window.location.pathname = newPath;
		}

		this.isTopicId = function(str) {
			return str.indexOf('mc3-objective') == 0;
		}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.9.3 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
	 * Build: `lodash category="collection,function,array,object"`
	 */
	;(function(){function n(n,r){if(n!==r){var t=null===n,e=n===Dr,u=n===n,o=null===r,i=r===Dr,f=r===r;if(n>r&&!o||!u||t&&!i&&f||e&&f)return 1;if(n<r&&!t||!f||o&&!e&&u||i&&u)return-1}return 0}function r(n,r,t){for(var e=n.length,u=t?e:-1;t?u--:++u<e;)if(r(n[u],u,n))return u;return-1}function t(n,r,t){if(r!==r)return i(n,t);t-=1;for(var e=n.length;++t<e;)if(n[t]===r)return t;return-1}function e(n){return typeof n=="function"||false}function u(n){return typeof n=="string"?n:null==n?"":n+""}function o(r,t){return n(r.a,t.a)||r.b-t.b;
	}function i(n,r,t){var e=n.length;for(r+=t?0:-1;t?r--:++r<e;){var u=n[r];if(u!==u)return r}return-1}function f(n){return!!n&&typeof n=="object"}function l(n,r){for(var t=-1,e=n.length,u=-1,o=[];++t<e;)n[t]===r&&(n[t]=rt,o[++u]=t);return o}function a(){}function c(){}function s(n,r,t){this.__wrapped__=n,this.__actions__=t||[],this.__chain__=!!r}function p(n){this.__wrapped__=n,this.__actions__=null,this.__dir__=1,this.__filtered__=false,this.__iteratees__=null,this.__takeCount__=de,this.__views__=null;
	}function h(){this.__data__={}}function v(n){var r=n?n.length:0;for(this.data={hash:le(null),set:new ee};r--;)this.push(n[r])}function g(n,r){var t=n.data;return(typeof r=="string"||Er(r)?t.set.has(r):t.hash[r])?0:-1}function y(n,r){var t=-1,e=n.length;for(r||(r=Array(e));++t<e;)r[t]=n[t];return r}function d(n,r){for(var t=-1,e=n.length;++t<e&&false!==r(n[t],t,n););return n}function m(n,r){for(var t=-1,e=n.length;++t<e;)if(!r(n[t],t,n))return false;return true}function b(n,r){for(var t=-1,e=n.length,u=-1,o=[];++t<e;){
	var i=n[t];r(i,t,n)&&(o[++u]=i)}return o}function _(n,r){for(var t=-1,e=n.length,u=Array(e);++t<e;)u[t]=r(n[t],t,n);return u}function w(n,r,t,e){var u=-1,o=n.length;for(e&&o&&(t=n[++u]);++u<o;)t=r(t,n[u],u,n);return t}function j(n,r){for(var t=-1,e=n.length;++t<e;)if(r(n[t],t,n))return true;return false}function A(n,r){return n===Dr?r:n}function x(n,r){return null==r?n:E(r,Ru(r),n)}function O(n,r){for(var t=-1,e=null==n,u=!e&&Vn(n),o=u?n.length:0,i=r.length,f=Array(i);++t<i;){var l=r[t];f[t]=u?Yn(l,o)?n[l]:Dr:e?Dr:n[l];
	}return f}function E(n,r,t){t||(t={});for(var e=-1,u=r.length;++e<u;){var o=r[e];t[o]=n[o]}return t}function T(n,r,t){var e=typeof n;return"function"==e?r===Dr?n:ln(n,r,t):null==n?Ur:"object"==e?K(n):r===Dr?Kr(n):D(n,r)}function I(n,r,t,e,u,o,i){var f;if(t&&(f=u?t(n,e,u):t(n)),f!==Dr)return f;if(!Er(n))return n;if(e=_u(n)){if(f=zn(n),!r)return y(n,f)}else{var l=Ht.call(n),a=l==ft;if(l!=at&&l!=tt&&(!a||u))return Wt[l]?Dn(n,l,r):u?n:{};if(zt(n))return u?n:{};if(f=Kn(a?{}:n),!r)return x(f,n)}for(o||(o=[]),
	i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?d:B)(n,function(e,u){f[u]=I(e,r,t,u,n,o,i)}),f}function k(n,r,t){if(typeof n!="function")throw new TypeError(nt);return setTimeout(function(){n.apply(Dr,t)},r)}function S(n,r){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=Ln(),f=i==t,l=f&&200<=r.length?We(r):null,a=r.length;l&&(i=g,f=false,r=l);n:for(;++o<e;)if(l=n[o],f&&l===l){for(var c=a;c--;)if(r[c]===l)continue n;u.push(l)}else 0>i(r,l,0)&&u.push(l);return u}function R(n,r){
	var t=true;return Ie(n,function(n,e,u){return t=!!r(n,e,u)}),t}function P(n,r,t,e){var u=e,o=u;return Ie(n,function(n,i,f){i=+r(n,i,f),(t(i,u)||i===e&&i===o)&&(u=i,o=n)}),o}function W(n,r){var t=[];return Ie(n,function(n,e,u){r(n,e,u)&&t.push(n)}),t}function F(n,r,t,e){var u;return t(n,function(n,t,o){return r(n,t,o)?(u=e?t:n,false):void 0}),u}function M(n,r,t){for(var e=-1,u=n.length,o=-1,i=[];++e<u;){var l=n[e];if(f(l)&&Vn(l)&&(t||_u(l)||Or(l))){r&&(l=M(l,r,t));for(var a=-1,c=l.length;++a<c;)i[++o]=l[a];
	}else t||(i[++o]=l)}return i}function N(n,r){Se(n,r,Fr)}function B(n,r){return Se(n,r,Ru)}function C(n,r){return Re(n,r,Ru)}function L(n,r,t){if(null!=n){n=tr(n),t!==Dr&&t in n&&(r=[t]),t=0;for(var e=r.length;null!=n&&t<e;)n=tr(n)[r[t++]];return t&&t==e?n:Dr}}function U(n,r,t,e,u,o){if(n===r)n=true;else if(null==n||null==r||!Er(n)&&!f(r))n=n!==n&&r!==r;else n:{var i=U,l=_u(n),a=_u(r),c=et,s=et;l||(c=Ht.call(n),c==tt?c=at:c!=at&&(l=kr(n))),a||(s=Ht.call(r),s==tt?s=at:s!=at&&kr(r));var p=c==at&&!zt(n),a=s==at&&!zt(r),s=c==s;
	if(!s||l||p){if(!e&&(c=p&&Gt.call(n,"__wrapped__"),a=a&&Gt.call(r,"__wrapped__"),c||a)){n=i(c?n.value():n,a?r.value():r,t,e,u,o);break n}if(s){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==r;break n}u.push(n),o.push(r),n=(l?Fn:Nn)(n,r,i,t,e,u,o),u.pop(),o.pop()}else n=false}else n=Mn(n,r,c)}return n}function $(n,r){var t=r.length,e=t;if(null==n)return!e;for(n=tr(n);t--;){var u=r[t];if(u[2]?u[1]!==n[u[0]]:!(u[0]in n))return false}for(;++t<e;){var u=r[t],o=u[0],i=n[o],f=u[1];if(u[2]){if(i===Dr&&!(o in n))return false;
	}else if(u=Dr,u===Dr?!U(f,i,void 0,true):!u)return false}return true}function z(n,r){var t=-1,e=Vn(n)?Array(n.length):[];return Ie(n,function(n,u,o){e[++t]=r(n,u,o)}),e}function K(n){var r=Un(n);if(1==r.length&&r[0][2]){var t=r[0][0],e=r[0][1];return function(n){return null==n?false:(n=tr(n),n[t]===e&&(e!==Dr||t in n))}}return function(n){return $(n,r)}}function D(n,r){var t=_u(n),e=Gn(n)&&r===r&&!Er(r),u=n+"";return n=er(n),function(o){if(null==o)return false;var i=u;if(o=tr(o),!(!t&&e||i in o)){if(o=1==n.length?o:L(o,Q(n,0,-1)),
	null==o)return false;i=lr(n),o=tr(o)}return o[i]===r?r!==Dr||i in o:U(r,o[i],Dr,true)}}function V(n,r,t,e,u){if(!Er(n))return n;var o=Vn(r)&&(_u(r)||kr(r)),i=o?null:Ru(r);return d(i||r,function(l,a){if(i&&(a=l,l=r[a]),f(l)){e||(e=[]),u||(u=[]);n:{for(var c=a,s=e,p=u,h=s.length,v=r[c];h--;)if(s[h]==v){n[c]=p[h];break n}var h=n[c],g=t?t(h,v,c,n,r):Dr,d=g===Dr;d&&(g=v,Vn(v)&&(_u(v)||kr(v))?g=_u(h)?h:Vn(h)?y(h):[]:ju(v)||Or(v)?g=Or(h)?Pr(h):ju(h)?h:{}:d=false),s.push(v),p.push(g),d?n[c]=V(g,v,t,s,p):(g===g?g!==h:h===h)&&(n[c]=g);
	}}else c=n[a],s=t?t(c,l,a,n,r):Dr,(p=s===Dr)&&(s=l),s===Dr&&(!o||a in n)||!p&&(s===s?s===c:c!==c)||(n[a]=s)}),n}function Y(n){return function(r){return null==r?Dr:tr(r)[n]}}function q(n){var r=n+"";return n=er(n),function(t){return L(t,n,r)}}function G(n,r){for(var t=n?r.length:0;t--;){var e=r[t];if(e!=u&&Yn(e)){var u=e;ue.call(n,e,1)}}}function H(n,r){return n+ne(ge()*(r-n+1))}function J(n,r,t,e,u){return u(n,function(n,u,o){t=e?(e=false,n):r(t,n,u,o)}),t}function Q(n,r,t){var e=-1,u=n.length;for(r=null==r?0:+r||0,
	0>r&&(r=-r>u?0:u+r),t=t===Dr||t>u?u:+t||0,0>t&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0,t=Array(u);++e<u;)t[e]=n[e+r];return t}function X(n,r){var t;return Ie(n,function(n,e,u){return t=r(n,e,u),!t}),!!t}function Z(n,r){var t=n.length;for(n.sort(r);t--;)n[t]=n[t].c;return n}function nn(r,t,e){var u=Bn(),o=-1;return t=_(t,function(n){return u(n)}),r=z(r,function(n){return{a:_(t,function(r){return r(n)}),b:++o,c:n}}),Z(r,function(r,t){var u;n:{u=-1;for(var o=r.a,i=t.a,f=o.length,l=e.length;++u<f;){var a=n(o[u],i[u]);
	if(a){u=u<l?a*(e[u]?1:-1):a;break n}}u=r.b-t.b}return u})}function rn(n,r){var t=0;return Ie(n,function(n,e,u){t+=+r(n,e,u)||0}),t}function tn(n,r){var e=-1,u=Ln(),o=n.length,i=u==t,f=i&&200<=o,l=f?We():null,a=[];l?(u=g,i=false):(f=false,l=r?[]:a);n:for(;++e<o;){var c=n[e],s=r?r(c,e,n):c;if(i&&c===c){for(var p=l.length;p--;)if(l[p]===s)continue n;r&&l.push(s),a.push(c)}else 0>u(l,s,0)&&((r||f)&&l.push(s),a.push(c))}return a}function en(n,r){for(var t=-1,e=r.length,u=Array(e);++t<e;)u[t]=n[r[t]];return u;
	}function un(n,r,t,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&r(n[o],o,n););return t?Q(n,e?0:o,e?o+1:u):Q(n,e?o+1:0,e?u:o)}function on(n,r,t){var e=0,u=n?n.length:e;if(typeof r=="number"&&r===r&&u<=be){for(;e<u;){var o=e+u>>>1,i=n[o];(t?i<=r:i<r)&&null!==i?e=o+1:u=o}return u}return fn(n,r,Ur,t)}function fn(n,r,t,e){r=t(r);for(var u=0,o=n?n.length:0,i=r!==r,f=null===r,l=r===Dr;u<o;){var a=ne((u+o)/2),c=t(n[a]),s=c!==Dr,p=c===c;(i?p||e:f?p&&s&&(e||null!=c):l?p&&(e||s):null==c?0:e?c<=r:c<r)?u=a+1:o=a;
	}return he(o,me)}function ln(n,r,t){if(typeof n!="function")return Ur;if(r===Dr)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)};case 5:return function(t,e,u,o,i){return n.call(r,t,e,u,o,i)}}return function(){return n.apply(r,arguments)}}function an(n){return Xt.call(n,0)}function cn(n,r,t){for(var e=t.length,u=-1,o=pe(n.length-e,0),i=-1,f=r.length,l=Array(o+f);++i<f;)l[i]=r[i];
	for(;++u<e;)l[t[u]]=n[u];for(;o--;)l[i++]=n[u++];return l}function sn(n,r,t){for(var e=-1,u=t.length,o=-1,i=pe(n.length-u,0),f=-1,l=r.length,a=Array(i+l);++o<i;)a[o]=n[o];for(i=o;++f<l;)a[i+f]=r[f];for(;++e<u;)a[i+t[e]]=n[o++];return a}function pn(n,r){return function(t,e,u){var o=r?r():{};if(e=Bn(e,u,3),_u(t)){u=-1;for(var i=t.length;++u<i;){var f=t[u];n(o,f,e(f,u,t),t)}}else Ie(t,function(r,t,u){n(o,r,e(r,t,u),u)});return o}}function hn(n){return Ar(function(r,t){var e=-1,u=null==r?0:t.length,o=2<u?t[u-2]:Dr,i=2<u?t[2]:Dr,f=1<u?t[u-1]:Dr;
	for(typeof o=="function"?(o=ln(o,f,5),u-=2):(o=typeof f=="function"?f:Dr,u-=o?1:0),i&&qn(t[0],t[1],i)&&(o=3>u?Dr:o,u=1);++e<u;)(i=t[e])&&n(r,i,o);return r})}function vn(n,r){return function(t,e){var u=t?Me(t):0;if(!Jn(u))return n(t,e);for(var o=r?u:-1,i=tr(t);(r?o--:++o<u)&&false!==e(i[o],o,i););return t}}function gn(n){return function(r,t,e){var u=tr(r);e=e(r);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){var f=e[i];if(false===t(u[f],f,u))break}return r}}function yn(n,r){function t(){return(this&&this!==$t&&this instanceof t?e:n).apply(r,arguments);
	}var e=dn(n);return t}function dn(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4])}var t=Te(n.prototype),r=n.apply(t,r);return Er(r)?r:t}}function mn(n){function r(t,e,u){return u&&qn(t,e,u)&&(e=null),t=Wn(t,n,null,null,null,null,null,e),t.placeholder=r.placeholder,t}return r}function bn(n,r){return function(t,e,u){
	if(u&&qn(t,e,u)&&(e=null),e=Bn(e,u,3),1==e.length){u=t=rr(t);for(var o=e,i=-1,f=u.length,l=r,a=l;++i<f;){var c=u[i],s=+o(c);n(s,l)&&(l=s,a=c)}if(u=a,!t.length||u!==r)return u}return P(t,e,n,r)}}function _n(n,t){return function(e,u,o){return u=Bn(u,o,3),_u(e)?(u=r(e,u,t),-1<u?e[u]:Dr):F(e,u,n)}}function wn(n){return function(t,e,u){return t&&t.length?(e=Bn(e,u,3),r(t,e,n)):-1}}function jn(n){return function(r,t,e){return t=Bn(t,e,3),F(r,t,n,true)}}function An(n){return function(){for(var r,t=arguments.length,e=n?t:-1,u=0,o=Array(t);n?e--:++e<t;){
	var i=o[u++]=arguments[e];if(typeof i!="function")throw new TypeError(nt);!r&&s.prototype.thru&&"wrapper"==Cn(i)&&(r=new s([]))}for(e=r?-1:t;++e<t;){var i=o[e],u=Cn(i),f="wrapper"==u?Fe(i):null;r=f&&Hn(f[0])&&f[1]==(Xr|Gr|Jr|Zr)&&!f[4].length&&1==f[9]?r[Cn(f[0])].apply(r,f[3]):1==i.length&&Hn(i)?r[u]():r.thru(i)}return function(){var n=arguments;if(r&&1==n.length&&_u(n[0]))return r.plant(n[0]).value();for(var e=0,n=t?o[e].apply(this,n):n[0];++e<t;)n=o[e].call(this,n);return n}}}function xn(n,r){return function(t,e,u){
	return typeof e=="function"&&u===Dr&&_u(t)?n(t,e):r(t,ln(e,u,3))}}function On(n){return function(r,t,e){return(typeof t!="function"||e!==Dr)&&(t=ln(t,e,3)),n(r,t,Fr)}}function En(n){return function(r,t,e){return(typeof t!="function"||e!==Dr)&&(t=ln(t,e,3)),n(r,t)}}function Tn(n){return function(r,t,e){var u={};return t=Bn(t,e,3),B(r,function(r,e,o){o=t(r,e,o),e=n?o:e,r=n?r:o,u[e]=r}),u}}function In(n){var r=Ar(function(t,e){var u=l(e,r.placeholder);return Wn(t,n,null,e,u)});return r}function kn(n,r){
	return function(t,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===Dr&&_u(t)?n(t,e,u,i):J(t,Bn(e,o,4),u,i,r)}}function Sn(n,r,t,e,u,o,i,f,a,c){function s(){for(var _=arguments.length,w=_,j=Array(_);w--;)j[w]=arguments[w];if(e&&(j=cn(j,e,u)),o&&(j=sn(j,o,i)),g||m){var w=s.placeholder,A=l(j,w),_=_-A.length;if(_<c){var x=f?y(f):null,_=pe(c-_,0),O=g?A:null,A=g?null:A,E=g?j:null,j=g?null:j;return r|=g?Jr:Qr,r&=~(g?Qr:Jr),d||(r&=~(Vr|Yr)),j=[n,r,t,E,O,j,A,x,a,_],x=Sn.apply(Dr,j),Hn(n)&&Ne(x,j),
	x.placeholder=w,x}}if(w=h?t:this,x=v?w[n]:n,f)for(_=j.length,O=he(f.length,_),A=y(j);O--;)E=f[O],j[O]=Yn(E,_)?A[E]:Dr;return p&&a<j.length&&(j.length=a),this&&this!==$t&&this instanceof s&&(x=b||dn(n)),x.apply(w,j)}var p=r&Xr,h=r&Vr,v=r&Yr,g=r&Gr,d=r&qr,m=r&Hr,b=v?null:dn(n);return s}function Rn(n,r,t,e){function u(){for(var r=-1,f=arguments.length,l=-1,a=e.length,c=Array(f+a);++l<a;)c[l]=e[l];for(;f--;)c[l++]=arguments[++r];return(this&&this!==$t&&this instanceof u?i:n).apply(o?t:this,c)}var o=r&Vr,i=dn(n);
	return u}function Pn(n){return function(r,t,e,u){var o=Bn(e);return null==e&&o===T?on(r,t,n):fn(r,t,o(e,u,1),n)}}function Wn(n,r,t,e,u,o,i,f){var a=r&Yr;if(!a&&typeof n!="function")throw new TypeError(nt);var c=e?e.length:0;if(c||(r&=~(Jr|Qr),e=u=null),c-=u?u.length:0,r&Qr){var s=e,p=u;e=u=null}var h=a?null:Fe(n);return t=[n,r,t,e,u,s,p,o,i,f],h&&(e=t[1],r=h[1],f=e|r,u=r==Xr&&e==Gr||r==Xr&&e==Zr&&t[7].length<=h[8]||r==(Xr|Zr)&&e==Gr,(f<Xr||u)&&(r&Vr&&(t[2]=h[2],f|=e&Vr?0:qr),(e=h[3])&&(u=t[3],t[3]=u?cn(u,e,h[4]):y(e),
	t[4]=u?l(t[3],rt):y(h[4])),(e=h[5])&&(u=t[5],t[5]=u?sn(u,e,h[6]):y(e),t[6]=u?l(t[5],rt):y(h[6])),(e=h[7])&&(t[7]=y(e)),r&Xr&&(t[8]=null==t[8]?h[8]:he(t[8],h[8])),null==t[9]&&(t[9]=h[9]),t[0]=h[0],t[1]=f),r=t[1],f=t[9]),t[9]=null==f?a?0:n.length:pe(f-c,0)||0,(h?Pe:Ne)(r==Vr?yn(t[0],t[2]):r!=Jr&&r!=(Vr|Jr)||t[4].length?Sn.apply(Dr,t):Rn.apply(Dr,t),t)}function Fn(n,r,t,e,u,o,i){var f=-1,l=n.length,a=r.length;if(l!=a&&(!u||a<=l))return false;for(;++f<l;){var c=n[f],a=r[f],s=e?e(u?a:c,u?c:a,f):Dr;if(s!==Dr){
	if(s)continue;return false}if(u){if(!j(r,function(n){return c===n||t(c,n,e,u,o,i)}))return false}else if(c!==a&&!t(c,a,e,u,o,i))return false}return true}function Mn(n,r,t){switch(t){case ut:case ot:return+n==+r;case it:return n.name==r.name&&n.message==r.message;case lt:return n!=+n?r!=+r:n==+r;case ct:case st:return n==r+""}return false}function Nn(n,r,t,e,u,o,i){var f=Ru(n),l=f.length,a=Ru(r).length;if(l!=a&&!u)return false;for(a=l;a--;){var c=f[a];if(!(u?c in r:Gt.call(r,c)))return false}for(var s=u;++a<l;){var c=f[a],p=n[c],h=r[c],v=e?e(u?h:p,u?p:h,c):Dr;
	if(v===Dr?!t(p,h,e,u,o,i):!v)return false;s||(s="constructor"==c)}return s||(t=n.constructor,e=r.constructor,!(t!=e&&"constructor"in n&&"constructor"in r)||typeof t=="function"&&t instanceof t&&typeof e=="function"&&e instanceof e)?true:false}function Bn(n,r,t){var e=a.callback||Cr,e=e===Cr?T:e;return t?e(n,r,t):e}function Cn(n){for(var r=n.name,t=Ae[r],e=t?t.length:0;e--;){var u=t[e],o=u.func;if(null==o||o==n)return u.name}return r}function Ln(n,r,e){var u=a.indexOf||fr,u=u===fr?t:u;return n?u(n,r,e):u}function Un(n){
	n=Mr(n);for(var r=n.length;r--;){var t=n[r][1];n[r][2]=t===t&&!Er(t)}return n}function $n(n,r){var t=null==n?Dr:n[r];return Tr(t)?t:Dr}function zn(n){var r=n.length,t=new n.constructor(r);return r&&"string"==typeof n[0]&&Gt.call(n,"index")&&(t.index=n.index,t.input=n.input),t}function Kn(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Object),new n}function Dn(n,r,t){var e=n.constructor;switch(r){case pt:return an(n);case ut:case ot:return new e(+n);case ht:case vt:case gt:case yt:
	case dt:case mt:case bt:case _t:case wt:return e instanceof e&&(e=xe[r]),r=n.buffer,new e(t?an(r):r,n.byteOffset,n.length);case lt:case st:return new e(n);case ct:var u=new e(n.source,It.exec(n));u.lastIndex=n.lastIndex}return u}function Vn(n){return null!=n&&Jn(Me(n))}function Yn(n,r){return n=typeof n=="number"||St.test(n)?+n:-1,r=null==r?we:r,-1<n&&0==n%1&&n<r}function qn(n,r,t){if(!Er(t))return false;var e=typeof r;return("number"==e?Vn(t)&&Yn(r,t.length):"string"==e&&r in t)?(r=t[r],n===n?n===r:r!==r):false;
	}function Gn(n,r){var t=typeof n;return"string"==t&&At.test(n)||"number"==t?true:_u(n)?false:!jt.test(n)||null!=r&&n in tr(r)}function Hn(n){var r=Cn(n);return r in p.prototype?(r=a[r],n===r?true:(r=Fe(r),!!r&&n===r[0])):false}function Jn(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=we}function Qn(n,r){n=tr(n);for(var t=-1,e=r.length,u={};++t<e;){var o=r[t];o in n&&(u[o]=n[o])}return u}function Xn(n,r){var t={};return N(n,function(n,e,u){r(n,e,u)&&(t[e]=n)}),t}function Zn(n){var r,t=a.support;if(!f(n)||Ht.call(n)!=at||zt(n)||!(Gt.call(n,"constructor")||(r=n.constructor,
	typeof r!="function"||r instanceof r))||!t.argsTag&&Or(n))return false;var e;return t.ownLast?(N(n,function(n,r,t){return e=Gt.call(t,r),false}),false!==e):(N(n,function(n,r){e=r}),e===Dr||Gt.call(n,e))}function nr(n){for(var r=Fr(n),t=r.length,e=t&&n.length,u=!!e&&Jn(e)&&(_u(n)||Or(n)||Ir(n)),o=-1,i=[];++o<t;){var f=r[o];(u&&Yn(f,e)||Gt.call(n,f))&&i.push(f)}return i}function rr(n){return null==n?[]:Vn(n)?a.support.unindexedChars&&Ir(n)?n.split(""):Er(n)?n:Object(n):Nr(n)}function tr(n){if(a.support.unindexedChars&&Ir(n)){
	for(var r=-1,t=n.length,e=Object(n);++r<t;)e[r]=n.charAt(r);return e}return Er(n)?n:Object(n)}function er(n){if(_u(n))return n;var r=[];return u(n).replace(xt,function(n,t,e,u){r.push(e?u.replace(Tt,"$1"):t||n)}),r}function ur(n,r,t){return n&&n.length?((t?qn(n,r,t):null==r)&&(r=1),Q(n,0>r?0:r)):[]}function or(n,r,t){var e=n?n.length:0;return e?((t?qn(n,r,t):null==r)&&(r=1),r=e-(+r||0),Q(n,0,0>r?0:r)):[]}function ir(n){return n?n[0]:Dr}function fr(n,r,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?pe(u+e,0):e;else if(e)return e=on(n,r),
	n=n[e],(r===r?r===n:n!==n)?e:-1;return t(n,r,e||0)}function lr(n){var r=n?n.length:0;return r?n[r-1]:Dr}function ar(n){return ur(n,1)}function cr(n,r,e,u){if(!n||!n.length)return[];null!=r&&typeof r!="boolean"&&(u=e,e=qn(n,r,u)?null:r,r=false);var o=Bn();if((null!=e||o!==T)&&(e=o(e,u,3)),r&&Ln()==t){r=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var l=n[e],a=r?r(l,e,n):l;e&&i===a||(i=a,f[++o]=l)}n=f}else n=tn(n,e);return n}function sr(n){if(!n||!n.length)return[];var r=-1,t=0;n=b(n,function(n){
	return Vn(n)?(t=pe(n.length,t),true):void 0});for(var e=Array(t);++r<t;)e[r]=_(n,Y(r));return e}function pr(n,r,t){return n&&n.length?(n=sr(n),null==r?n:(r=ln(r,t,4),_(n,function(n){return w(n,r,Dr,true)}))):[]}function hr(n,r){var t=-1,e=n?n.length:0,u={};for(!e||r||_u(n[0])||(r=[]);++t<e;){var o=n[t];r?u[o]=r[t]:o&&(u[o[0]]=o[1])}return u}function vr(n,r,t){var e=_u(n)?m:R;return t&&qn(n,r,t)&&(r=null),(typeof r!="function"||t!==Dr)&&(r=Bn(r,t,3)),e(n,r)}function gr(n,r,t){var e=_u(n)?b:W;return r=Bn(r,t,3),
	e(n,r)}function yr(n,r,t,e){var u=n?Me(n):0;return Jn(u)||(n=Nr(n),u=n.length),u?(t=typeof t!="number"||e&&qn(r,t,e)?0:0>t?pe(u+t,0):t||0,typeof n=="string"||!_u(n)&&Ir(n)?t<u&&-1<n.indexOf(r,t):-1<Ln(n,r,t)):false}function dr(n,r,t){var e=_u(n)?_:z;return r=Bn(r,t,3),e(n,r)}function mr(n,r,t){if(t?qn(n,r,t):null==r){n=rr(n);var e=n.length;return 0<e?n[H(0,e-1)]:Dr}t=-1,n=Rr(n);var e=n.length,u=e-1;for(r=he(0>r?0:+r||0,e);++t<r;){var e=H(t,u),o=n[e];n[e]=n[t],n[t]=o}return n.length=r,n}function br(n,r,t){
	var e=_u(n)?j:X;return t&&qn(n,r,t)&&(r=null),(typeof r!="function"||t!==Dr)&&(r=Bn(r,t,3)),e(n,r)}function _r(n,r){var t;if(typeof r!="function"){if(typeof n!="function")throw new TypeError(nt);var e=n;n=r,r=e}return function(){return 0<--n&&(t=r.apply(this,arguments)),1>=n&&(r=null),t}}function wr(n,r,t){function e(){var t=r-(fu()-a);0>=t||t>r?(f&&clearTimeout(f),t=p,f=s=p=Dr,t&&(h=fu(),l=n.apply(c,i),s||f||(i=c=null))):s=setTimeout(e,t)}function u(){s&&clearTimeout(s),f=s=p=Dr,(g||v!==r)&&(h=fu(),
	l=n.apply(c,i),s||f||(i=c=null))}function o(){if(i=arguments,a=fu(),c=this,p=g&&(s||!y),false===v)var t=y&&!s;else{f||y||(h=a);var o=v-(a-h),d=0>=o||o>v;d?(f&&(f=clearTimeout(f)),h=a,l=n.apply(c,i)):f||(f=setTimeout(u,o))}return d&&s?s=clearTimeout(s):s||r===v||(s=setTimeout(e,r)),t&&(d=true,l=n.apply(c,i)),!d||s||f||(i=c=null),l}var i,f,l,a,c,s,p,h=0,v=false,g=true;if(typeof n!="function")throw new TypeError(nt);if(r=0>r?0:+r||0,true===t)var y=true,g=false;else Er(t)&&(y=t.leading,v="maxWait"in t&&pe(+t.maxWait||0,r),
	g="trailing"in t?t.trailing:g);return o.cancel=function(){s&&clearTimeout(s),f&&clearTimeout(f),f=s=p=Dr},o}function jr(n,r){function t(){var e=arguments,u=r?r.apply(this,e):e[0],o=t.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),t.cache=o.set(u,e),e)}if(typeof n!="function"||r&&typeof r!="function")throw new TypeError(nt);return t.cache=new jr.Cache,t}function Ar(n,r){if(typeof n!="function")throw new TypeError(nt);return r=pe(r===Dr?n.length-1:+r||0,0),function(){for(var t=arguments,e=-1,u=pe(t.length-r,0),o=Array(u);++e<u;)o[e]=t[r+e];
	switch(r){case 0:return n.call(this,o);case 1:return n.call(this,t[0],o);case 2:return n.call(this,t[0],t[1],o)}for(u=Array(r+1),e=-1;++e<r;)u[e]=t[e];return u[r]=o,n.apply(this,u)}}function xr(n,r){return n>r}function Or(n){return f(n)&&Vn(n)&&Ht.call(n)==tt}function Er(n){var r=typeof n;return!!n&&("object"==r||"function"==r)}function Tr(n){return null==n?false:Ht.call(n)==ft?Jt.test(qt.call(n)):f(n)&&(zt(n)?Jt:kt).test(n)}function Ir(n){return typeof n=="string"||f(n)&&Ht.call(n)==st}function kr(n){
	return f(n)&&Jn(n.length)&&!!Pt[Ht.call(n)]}function Sr(n,r){return n<r}function Rr(n){var r=n?Me(n):0;return Jn(r)?r?a.support.unindexedChars&&Ir(n)?n.split(""):y(n):[]:Nr(n)}function Pr(n){return E(n,Fr(n))}function Wr(n){for(var r=Fr(n),t=-1,e=r.length,u=-1,o=[];++t<e;){var i=r[t];wu(n[i])&&(o[++u]=i)}return o}function Fr(n){if(null==n)return[];Er(n)||(n=Object(n));for(var r=n.length,t=a.support,r=r&&Jn(r)&&(_u(n)||Or(n)||Ir(n))&&r||0,e=n.constructor,u=-1,e=wu(e)&&e.prototype||Vt,o=e===n,i=Array(r),f=0<r,l=t.enumErrorProps&&(n===Dt||n instanceof Error),c=t.enumPrototypes&&wu(n);++u<r;)i[u]=u+"";
	for(var s in n)c&&"prototype"==s||l&&("message"==s||"name"==s)||f&&Yn(s,r)||"constructor"==s&&(o||!Gt.call(n,s))||i.push(s);if(t.nonEnumShadows&&n!==Vt)for(r=n===Yt?st:n===Dt?it:Ht.call(n),t=Oe[r]||Oe[at],r==at&&(e=Vt),r=Rt.length;r--;)s=Rt[r],u=t[s],o&&u||(u?!Gt.call(n,s):n[s]===e[s])||i.push(s);return i}function Mr(n){n=tr(n);for(var r=-1,t=Ru(n),e=t.length,u=Array(e);++r<e;){var o=t[r];u[r]=[o,n[o]]}return u}function Nr(n){return en(n,Ru(n))}function Br(n){return(n=u(n))&&Et.test(n)?n.replace(Ot,"\\$&"):n;
	}function Cr(n,r,t){return t&&qn(n,r,t)&&(r=null),f(n)?$r(n):T(n,r)}function Lr(n){return function(){return n}}function Ur(n){return n}function $r(n){return K(I(n,true))}function zr(){}function Kr(n){return Gn(n)?Y(n):q(n)}var Dr,Vr=1,Yr=2,qr=4,Gr=8,Hr=16,Jr=32,Qr=64,Xr=128,Zr=256,nt="Expected a function",rt="__lodash_placeholder__",tt="[object Arguments]",et="[object Array]",ut="[object Boolean]",ot="[object Date]",it="[object Error]",ft="[object Function]",lt="[object Number]",at="[object Object]",ct="[object RegExp]",st="[object String]",pt="[object ArrayBuffer]",ht="[object Float32Array]",vt="[object Float64Array]",gt="[object Int8Array]",yt="[object Int16Array]",dt="[object Int32Array]",mt="[object Uint8Array]",bt="[object Uint8ClampedArray]",_t="[object Uint16Array]",wt="[object Uint32Array]",jt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,At=/^\w*$/,xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,Ot=/[.*+?^${}()|[\]\/\\]/g,Et=RegExp(Ot.source),Tt=/\\(\\)?/g,It=/\w*$/,kt=/^\[object .+?Constructor\]$/,St=/^\d+$/,Rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Pt={};
	Pt[ht]=Pt[vt]=Pt[gt]=Pt[yt]=Pt[dt]=Pt[mt]=Pt[bt]=Pt[_t]=Pt[wt]=true,Pt[tt]=Pt[et]=Pt[pt]=Pt[ut]=Pt[ot]=Pt[it]=Pt[ft]=Pt["[object Map]"]=Pt[lt]=Pt[at]=Pt[ct]=Pt["[object Set]"]=Pt[st]=Pt["[object WeakMap]"]=false;var Wt={};Wt[tt]=Wt[et]=Wt[pt]=Wt[ut]=Wt[ot]=Wt[ht]=Wt[vt]=Wt[gt]=Wt[yt]=Wt[dt]=Wt[lt]=Wt[at]=Wt[ct]=Wt[st]=Wt[mt]=Wt[bt]=Wt[_t]=Wt[wt]=true,Wt[it]=Wt[ft]=Wt["[object Map]"]=Wt["[object Set]"]=Wt["[object WeakMap]"]=false;var Ft={leading:false,maxWait:0,trailing:false},Mt={"function":true,object:true},Nt=Mt[typeof exports]&&exports&&!exports.nodeType&&exports,Bt=Mt[typeof module]&&module&&!module.nodeType&&module,Ct=Mt[typeof self]&&self&&self.Object&&self,Lt=Mt[typeof window]&&window&&window.Object&&window,Ut=Bt&&Bt.exports===Nt&&Nt,$t=Nt&&Bt&&typeof global=="object"&&global&&global.Object&&global||Lt!==(this&&this.window)&&Lt||Ct||this,zt=function(){
	try{Object({toString:0}+"")}catch(n){return function(){return false}}return function(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}}(),Kt=Array.prototype,Dt=Error.prototype,Vt=Object.prototype,Yt=String.prototype,qt=Function.prototype.toString,Gt=Vt.hasOwnProperty,Ht=Vt.toString,Jt=RegExp("^"+Br(qt.call(Gt)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qt=$n($t,"ArrayBuffer"),Xt=$n(Qt&&new Qt(0),"slice"),Zt=Math.ceil,ne=Math.floor,re=$n(Object,"getPrototypeOf"),te=Vt.propertyIsEnumerable,ee=$n($t,"Set"),ue=Kt.splice,oe=$n($t,"Uint8Array"),ie=$n($t,"WeakMap"),fe=function(){
	try{var n=$n($t,"Float64Array"),r=new n(new Qt(10),0,1)&&n}catch(t){}return r||null}(),le=$n(Object,"create"),ae=$n(Array,"isArray"),ce=$t.isFinite,se=$n(Object,"keys"),pe=Math.max,he=Math.min,ve=$n(Date,"now"),ge=Math.random,ye=Number.NEGATIVE_INFINITY,de=Number.POSITIVE_INFINITY,me=4294967294,be=2147483647,_e=fe?fe.BYTES_PER_ELEMENT:0,we=9007199254740991,je=ie&&new ie,Ae={},xe={};xe[ht]=$t.Float32Array,xe[vt]=$t.Float64Array,xe[gt]=$t.Int8Array,xe[yt]=$t.Int16Array,xe[dt]=$t.Int32Array,xe[mt]=$t.Uint8Array,
	xe[bt]=$t.Uint8ClampedArray,xe[_t]=$t.Uint16Array,xe[wt]=$t.Uint32Array;var Oe={};Oe[et]=Oe[ot]=Oe[lt]={constructor:true,toLocaleString:true,toString:true,valueOf:true},Oe[ut]=Oe[st]={constructor:true,toString:true,valueOf:true},Oe[it]=Oe[ft]=Oe[ct]={constructor:true,toString:true},Oe[at]={constructor:true},d(Rt,function(n){for(var r in Oe)if(Gt.call(Oe,r)){var t=Oe[r];t[n]=Gt.call(t,n)}});var Ee=a.support={};!function(n){function r(){this.x=n}var t={0:n,length:n},e=[];r.prototype={valueOf:n,y:n};for(var u in new r)e.push(u);
	Ee.argsTag=Ht.call(arguments)==tt,Ee.enumErrorProps=te.call(Dt,"message")||te.call(Dt,"name"),Ee.enumPrototypes=te.call(r,"prototype"),Ee.nonEnumShadows=!/valueOf/.test(e),Ee.ownLast="x"!=e[0],Ee.spliceObjects=(ue.call(t,0,1),!t[0]),Ee.unindexedChars="xx"!="x"[0]+Object("x")[0]}(1,0);var Te=function(){function n(){}return function(r){if(Er(r)){n.prototype=r;var t=new n;n.prototype=null}return t||{}}}(),Ie=vn(B),ke=vn(C,true),Se=gn(),Re=gn(true),Pe=je?function(n,r){return je.set(n,r),n}:Ur;Xt||(an=Qt&&oe?function(n){
	var r=n.byteLength,t=fe?ne(r/_e):0,e=t*_e,u=new Qt(r);if(t){var o=new fe(u,0,t);o.set(new fe(n,0,t))}return r!=e&&(o=new oe(u,e),o.set(new oe(n,e))),u}:Lr(null));var We=le&&ee?function(n){return new v(n)}:Lr(null),Fe=je?function(n){return je.get(n)}:zr,Me=Y("length"),Ne=function(){var n=0,r=0;return function(t,e){var u=fu(),o=16-(u-r);if(r=u,0<o){if(150<=++n)return t}else n=0;return Pe(t,e)}}(),Be=Ar(function(n,r){return Vn(n)?S(n,M(r,false,true)):[]}),Ce=wn(),Le=wn(true),Ue=Ar(function(n){for(var r=n.length,e=r,u=Array(c),o=Ln(),i=o==t,f=[];e--;){
	var l=n[e]=Vn(l=n[e])?l:[];u[e]=i&&120<=l.length?We(e&&l):null}var i=n[0],a=-1,c=i?i.length:0,s=u[0];n:for(;++a<c;)if(l=i[a],0>(s?g(s,l):o(f,l,0))){for(e=r;--e;){var p=u[e];if(0>(p?g(p,l):o(n[e],l,0)))continue n}s&&s.push(l),f.push(l)}return f}),$e=Ar(function(r,t){t=M(t);var e=O(r,t);return G(r,t.sort(n)),e}),ze=Pn(),Ke=Pn(true),De=Ar(function(n){return tn(M(n,false,true))}),Ve=Ar(function(n,r){return Vn(n)?S(n,r):[]}),Ye=Ar(sr),qe=Ar(function(n){var r=n.length,t=2<r?n[r-2]:Dr,e=1<r?n[r-1]:Dr;return 2<r&&typeof t=="function"?r-=2:(t=1<r&&typeof e=="function"?(--r,
	e):Dr,e=Dr),n.length=r,pr(n,t,e)}),Ge=Ar(function(n,r){return Vn(n)&&(n=rr(n)),O(n,M(r))}),He=pn(function(n,r,t){Gt.call(n,t)?++n[t]:n[t]=1}),Je=_n(Ie),Qe=_n(ke,true),Xe=xn(d,Ie),Ze=xn(function(n,r){for(var t=n.length;t--&&false!==r(n[t],t,n););return n},ke),nu=pn(function(n,r,t){Gt.call(n,t)?n[t].push(r):n[t]=[r]}),ru=pn(function(n,r,t){n[t]=r}),tu=Ar(function(n,r,t){var e=-1,u=typeof r=="function",o=Gn(r),i=Vn(n)?Array(n.length):[];return Ie(n,function(n){var f=u?r:o&&null!=n?n[r]:null,l=++e;f?n=f.apply(n,t):(f=r,
	null==n||Gn(f,n)||(f=er(f),n=1==f.length?n:L(n,Q(f,0,-1)),f=lr(f)),f=null==n?n:n[f],n=null==f?Dr:f.apply(n,t)),i[l]=n}),i}),eu=pn(function(n,r,t){n[t?0:1].push(r)},function(){return[[],[]]}),uu=kn(w,Ie),ou=kn(function(n,r,t,e){var u=n.length;for(e&&u&&(t=n[--u]);u--;)t=r(t,n[u],u,n);return t},ke),iu=Ar(function(n,r){if(null==n)return[];var t=r[2];return t&&qn(r[0],r[1],t)&&(r.length=1),nn(n,M(r),[])}),fu=ve||function(){return(new Date).getTime()},lu=Ar(function(n,r,t){var e=Vr;if(t.length)var u=l(t,lu.placeholder),e=e|Jr;
	return Wn(n,e,r,t,u)}),au=Ar(function(n,r){r=r.length?M(r):Wr(n);for(var t=-1,e=r.length;++t<e;){var u=r[t];n[u]=Wn(n[u],Vr,n)}return n}),cu=Ar(function(n,r,t){var e=Vr|Yr;if(t.length)var u=l(t,cu.placeholder),e=e|Jr;return Wn(r,e,n,t,u)}),su=mn(Gr),pu=mn(Hr),hu=Ar(function(n,r){return k(n,1,r)}),vu=Ar(function(n,r,t){return k(n,r,t)}),gu=An(),yu=An(true),du=In(Jr),mu=In(Qr),bu=Ar(function(n,r){return Wn(n,Zr,null,null,null,M(r))});Ee.argsTag||(Or=function(n){return f(n)&&Vn(n)&&Gt.call(n,"callee")&&!te.call(n,"callee");
	});var _u=ae||function(n){return f(n)&&Jn(n.length)&&Ht.call(n)==et},wu=e(/x/)||oe&&!e(oe)?function(n){return Ht.call(n)==ft}:e,ju=re?function(n){if(!n||Ht.call(n)!=at||!a.support.argsTag&&Or(n))return false;var r=$n(n,"valueOf"),t=r&&(t=re(r))&&re(t);return t?n==t||re(n)==t:Zn(n)}:Zn,Au=hn(function(n,r,t){if(t)for(var e=-1,u=Ru(r),o=u.length;++e<o;){var i=u[e],f=n[i],l=t(f,r[i],i,n,r);(l===l?l===f:f!==f)&&(f!==Dr||i in n)||(n[i]=l)}else n=x(n,r);return n}),xu=Ar(function(n){var r=n[0];return null==r?r:(n.push(A),
	Au.apply(Dr,n))}),Ou=jn(B),Eu=jn(C),Tu=On(Se),Iu=On(Re),ku=En(B),Su=En(C),Ru=se?function(n){var r=null==n?null:n.constructor;return typeof r=="function"&&r.prototype===n||(typeof n=="function"?a.support.enumPrototypes:Vn(n))?nr(n):Er(n)?se(n):[]}:nr,Pu=Tn(true),Wu=Tn(),Fu=hn(V),Mu=Ar(function(n,r){if(null==n)return{};if("function"!=typeof r[0])return r=_(M(r),String),Qn(n,S(Fr(n),r));var t=ln(r[0],r[1],3);return Xn(n,function(n,r,e){return!t(n,r,e)})}),Nu=Ar(function(n,r){return null==n?{}:"function"==typeof r[0]?Xn(n,ln(r[0],r[1],3)):Qn(n,M(r));
	}),Bu=bn(xr,ye),Cu=bn(Sr,de);s.prototype=Te(c.prototype),s.prototype.constructor=s,p.prototype=Te(c.prototype),p.prototype.constructor=p,h.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},h.prototype.get=function(n){return"__proto__"==n?Dr:this.__data__[n]},h.prototype.has=function(n){return"__proto__"!=n&&Gt.call(this.__data__,n)},h.prototype.set=function(n,r){return"__proto__"!=n&&(this.__data__[n]=r),this},v.prototype.push=function(n){var r=this.data;typeof n=="string"||Er(n)?r.set.add(n):r.hash[n]=true;
	},jr.Cache=h,a.after=function(n,r){if(typeof r!="function"){if(typeof n!="function")throw new TypeError(nt);var t=n;n=r,r=t}return n=ce(n=+n)?n:0,function(){return 1>--n?r.apply(this,arguments):void 0}},a.ary=function(n,r,t){return t&&qn(n,r,t)&&(r=null),r=n&&null==r?n.length:pe(+r||0,0),Wn(n,Xr,null,null,null,null,r)},a.assign=Au,a.at=Ge,a.before=_r,a.bind=lu,a.bindAll=au,a.bindKey=cu,a.callback=Cr,a.chunk=function(n,r,t){r=(t?qn(n,r,t):null==r)?1:pe(+r||1,1),t=0;for(var e=n?n.length:0,u=-1,o=Array(Zt(e/r));t<e;)o[++u]=Q(n,t,t+=r);
	return o},a.compact=function(n){for(var r=-1,t=n?n.length:0,e=-1,u=[];++r<t;){var o=n[r];o&&(u[++e]=o)}return u},a.constant=Lr,a.countBy=He,a.create=function(n,r,t){var e=Te(n);return t&&qn(n,r,t)&&(r=null),r?x(e,r):e},a.curry=su,a.curryRight=pu,a.debounce=wr,a.defaults=xu,a.defer=hu,a.delay=vu,a.difference=Be,a.drop=ur,a.dropRight=or,a.dropRightWhile=function(n,r,t){return n&&n.length?un(n,Bn(r,t,3),true,true):[]},a.dropWhile=function(n,r,t){return n&&n.length?un(n,Bn(r,t,3),true):[]},a.fill=function(n,r,t,e){
	var u=n?n.length:0;if(!u)return[];for(t&&typeof t!="number"&&qn(n,r,t)&&(t=0,e=u),u=n.length,t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),e=e===Dr||e>u?u:+e||0,0>e&&(e+=u),u=t>e?0:e>>>0,t>>>=0;t<u;)n[t++]=r;return n},a.filter=gr,a.flatten=function(n,r,t){var e=n?n.length:0;return t&&qn(n,r,t)&&(r=false),e?M(n,r):[]},a.flattenDeep=function(n){return n&&n.length?M(n,true):[]},a.flow=gu,a.flowRight=yu,a.forEach=Xe,a.forEachRight=Ze,a.forIn=Tu,a.forInRight=Iu,a.forOwn=ku,a.forOwnRight=Su,a.functions=Wr,a.groupBy=nu,
	a.indexBy=ru,a.initial=function(n){return or(n,1)},a.intersection=Ue,a.invert=function(n,r,t){t&&qn(n,r,t)&&(r=null),t=-1;for(var e=Ru(n),u=e.length,o={};++t<u;){var i=e[t],f=n[i];r?Gt.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},a.invoke=tu,a.keys=Ru,a.keysIn=Fr,a.map=dr,a.mapKeys=Pu,a.mapValues=Wu,a.matches=$r,a.memoize=jr,a.merge=Fu,a.negate=function(n){if(typeof n!="function")throw new TypeError(nt);return function(){return!n.apply(this,arguments)}},a.omit=Mu,a.once=function(n){return _r(2,n);
	},a.pairs=Mr,a.partial=du,a.partialRight=mu,a.partition=eu,a.pick=Nu,a.pluck=function(n,r){return dr(n,Kr(r))},a.property=Kr,a.pull=function(){var n=arguments,r=n[0];if(!r||!r.length)return r;for(var t=0,e=Ln(),u=n.length;++t<u;)for(var o=0,i=n[t];-1<(o=e(r,i,o));)ue.call(r,o,1);return r},a.pullAt=$e,a.rearg=bu,a.reject=function(n,r,t){var e=_u(n)?b:W;return r=Bn(r,t,3),e(n,function(n,t,e){return!r(n,t,e)})},a.remove=function(n,r,t){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(r=Bn(r,t,3);++u<i;)t=n[u],
	r(t,u,n)&&(e.push(t),o.push(u));return G(n,o),e},a.rest=ar,a.restParam=Ar,a.set=function(n,r,t){if(null==n)return n;var e=r+"";r=null!=n[e]||Gn(r,n)?[e]:er(r);for(var e=-1,u=r.length,o=u-1,i=n;null!=i&&++e<u;){var f=r[e];Er(i)&&(e==o?i[f]=t:null==i[f]&&(i[f]=Yn(r[e+1])?[]:{})),i=i[f]}return n},a.shuffle=function(n){return mr(n,de)},a.slice=function(n,r,t){var e=n?n.length:0;return e?(t&&typeof t!="number"&&qn(n,r,t)&&(r=0,t=e),Q(n,r,t)):[]},a.sortBy=function(n,r,t){if(null==n)return[];t&&qn(n,r,t)&&(r=null);
	var e=-1;return r=Bn(r,t,3),n=z(n,function(n,t,u){return{a:r(n,t,u),b:++e,c:n}}),Z(n,o)},a.sortByAll=iu,a.sortByOrder=function(n,r,t,e){return null==n?[]:(e&&qn(r,t,e)&&(t=null),_u(r)||(r=null==r?[]:[r]),_u(t)||(t=null==t?[]:[t]),nn(n,r,t))},a.spread=function(n){if(typeof n!="function")throw new TypeError(nt);return function(r){return n.apply(this,r)}},a.take=function(n,r,t){return n&&n.length?((t?qn(n,r,t):null==r)&&(r=1),Q(n,0,0>r?0:r)):[]},a.takeRight=function(n,r,t){var e=n?n.length:0;return e?((t?qn(n,r,t):null==r)&&(r=1),
	r=e-(+r||0),Q(n,0>r?0:r)):[]},a.takeRightWhile=function(n,r,t){return n&&n.length?un(n,Bn(r,t,3),false,true):[]},a.takeWhile=function(n,r,t){return n&&n.length?un(n,Bn(r,t,3)):[]},a.throttle=function(n,r,t){var e=true,u=true;if(typeof n!="function")throw new TypeError(nt);return false===t?e=false:Er(t)&&(e="leading"in t?!!t.leading:e,u="trailing"in t?!!t.trailing:u),Ft.leading=e,Ft.maxWait=+r,Ft.trailing=u,wr(n,r,Ft)},a.toArray=Rr,a.toPlainObject=Pr,a.transform=function(n,r,t,e){var u=_u(n)||kr(n);return r=Bn(r,e,4),
	null==t&&(u||Er(n)?(e=n.constructor,t=u?_u(n)?new e:[]:Te(wu(e)?e.prototype:null)):t={}),(u?d:B)(n,function(n,e,u){return r(t,n,e,u)}),t},a.union=De,a.uniq=cr,a.unzip=sr,a.unzipWith=pr,a.values=Nr,a.valuesIn=function(n){return en(n,Fr(n))},a.where=function(n,r){return gr(n,K(r))},a.without=Ve,a.wrap=function(n,r){return r=null==r?Ur:r,Wn(r,Jr,null,[n],[])},a.xor=function(){for(var n=-1,r=arguments.length;++n<r;){var t=arguments[n];if(Vn(t))var e=e?S(e,t).concat(S(t,e)):t}return e?tn(e):[]},a.zip=Ye,
	a.zipObject=hr,a.zipWith=qe,a.backflow=yu,a.collect=dr,a.compose=yu,a.each=Xe,a.eachRight=Ze,a.extend=Au,a.iteratee=Cr,a.methods=Wr,a.object=hr,a.select=gr,a.tail=ar,a.unique=cr,a.escapeRegExp=Br,a.every=vr,a.find=Je,a.findIndex=Ce,a.findKey=Ou,a.findLast=Qe,a.findLastIndex=Le,a.findLastKey=Eu,a.findWhere=function(n,r){return Je(n,K(r))},a.first=ir,a.get=function(n,r,t){return n=null==n?Dr:L(n,er(r),r+""),n===Dr?t:n},a.gt=xr,a.has=function(n,r){if(null==n)return false;var t=Gt.call(n,r);if(!t&&!Gn(r)){
	if(r=er(r),n=1==r.length?n:L(n,Q(r,0,-1)),null==n)return false;r=lr(r),t=Gt.call(n,r)}return t||Jn(n.length)&&Yn(r,n.length)&&(_u(n)||Or(n)||Ir(n))},a.identity=Ur,a.includes=yr,a.indexOf=fr,a.isArguments=Or,a.isArray=_u,a.isFunction=wu,a.isNative=Tr,a.isObject=Er,a.isPlainObject=ju,a.isString=Ir,a.isTypedArray=kr,a.last=lr,a.lastIndexOf=function(n,r,t){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof t=="number")u=(0>t?pe(e+t,0):he(t||0,e-1))+1;else if(t)return u=on(n,r,true)-1,n=n[u],(r===r?r===n:n!==n)?u:-1;
	if(r!==r)return i(n,u,true);for(;u--;)if(n[u]===r)return u;return-1},a.lt=Sr,a.max=Bu,a.min=Cu,a.noop=zr,a.now=fu,a.reduce=uu,a.reduceRight=ou,a.result=function(n,r,t){var e=null==n?Dr:tr(n)[r];return e===Dr&&(null==n||Gn(r,n)||(r=er(r),n=1==r.length?n:L(n,Q(r,0,-1)),e=null==n?Dr:tr(n)[lr(r)]),e=e===Dr?t:e),wu(e)?e.call(n):e},a.size=function(n){var r=n?Me(n):0;return Jn(r)?r:Ru(n).length},a.some=br,a.sortedIndex=ze,a.sortedLastIndex=Ke,a.sum=function(n,r,t){t&&qn(n,r,t)&&(r=null);var e=Bn(),u=null==r;
	if(u&&e===T||(u=false,r=e(r,t,3)),u){for(n=_u(n)?n:rr(n),r=n.length,t=0;r--;)t+=+n[r]||0;n=t}else n=rn(n,r);return n},a.all=vr,a.any=br,a.contains=yr,a.detect=Je,a.foldl=uu,a.foldr=ou,a.head=ir,a.include=yr,a.inject=uu,a.sample=mr,a.VERSION="3.9.3",d("bind bindKey curry curryRight partial partialRight".split(" "),function(n){a[n].placeholder=a}), true?($t._=a, !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return a}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):Nt&&Bt?Ut?(Bt.exports=a)._=a:Nt._=a:$t._=a}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module), (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var authentication = __webpack_require__(8);

	module.exports = angular.module('cl3.common.auth', [
	])
	.service( 'Authentication', ['$rootScope', '$http', '$q', '$window', 'Utils', authentication])


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function AuthenticationService($rootScope, $http, $q, $window, Utils) {

		var endpoint = '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT';	// change this to your own endpoint
		var user = {
			isLoggedIn: false
		};
		var clientId;

		if (Utils.isLocal()) {
			user.kerberosId = 'localhostUser';
			user.kerberosAddress = 'localhostUser@mit.edu';
			user.isLoggedIn = true;
		}

		var authenticate = function() {
			return $http.get(endpoint)
			.then( function(res) {
	//			console.log(res);
				return res.kerberos;
			});
		}

		var id_to_address = function(id) {
			return id + '@mit.edu';
		}

		var address_to_id = function(address) {
			return address ? address.split('@')[0] : '';
		}

		this.getUser = function() {
			// your own authentication code here, must return a Promise
			return $q.when( (user.isLoggedIn || !Utils.isHttps()) ? user :
				authenticate()
				.then(function(kerberos) {
					user.kerberosId = address_to_id(kerberos);
					user.kerberosAddress = kerberos;
					user.isLoggedIn = true;
					return user;
				})
			);
		}

	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var middleman = __webpack_require__(10);
	//var uniqueRequestAware = require('./unique-request-aware.interceptor.js');

	module.exports = angular.module('cl3.common.interceptors', [
	])
	.service( 'middlemanUrl', ['$q', '$window', 'Utils', middleman])
	//.service( 'uniqueRequestAware', ['$q', '$timeout', uniqueRequestAware])


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function middlemanInjector($q, $window, Utils) {

		var user_endpoint = '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT';		// note: this is a hack to just hit the middleman to get the kerberos

		var removeTrailingSlash = function(url) {
			if (url.substr(-1) == '/') return url.substr(0, url.length - 1);
			return url;
		}

		var handcar = function(config) {
			var credentialed = ['PUT', 'POST', 'DELETE'];
			var openService = {
				'localhost': 'https://mc3-dev.mit.edu',
				'crosslinks3-dev.mit.edu': 'https://mc3-dev.mit.edu',
				'crosslinks3-demo.mit.edu': 'https://mc3-demo.mit.edu',
				'crosslinks3.mit.edu': 'https://mc3.mit.edu',
				'crosslinks.mit.edu': 'https://mc3.mit.edu',
			};
			var touchstoneService = {
				'localhost': 'https://mc3-dev.mit.edu',
				'crosslinks3-dev.mit.edu': 'https://crosslinks3-dev.mit.edu/api/v2',
				'crosslinks3-demo.mit.edu': 'https://crosslinks3-demo.mit.edu/api/v2',
				'crosslinks3.mit.edu': 'https://crosslinks3.mit.edu/api/v2',
				'crosslinks.mit.edu': 'https://crosslinks.mit.edu/api/v2',
			};

			return {
				getDomain: function() {
	//				console.log(config);
					if (_.contains(credentialed, config.method) || config.url == user_endpoint) {
						return touchstoneService[$window.location.hostname];
					} 
					return openService[$window.location.hostname];
				},
				getCredentials: function() {
					// TODO: fix;
					return false;
					if (_.contains(credentialed, config.method)) return true;
				},
				isAuthenticated: function() {
					return _.contains(credentialed, config.method) || _.contains(config.url, 'api/v2');
				},
				getName: function() {return 'handcar';}
			}
		};

		var qbank = function(config) {
			var openService = {
				'localhost': 'http://crosslinks3-dev.mit.edu/api/v2',
				'crosslinks3-dev.mit.edu': 'http://crosslinks3-dev.mit.edu/api/v2',
				'crosslinks3-demo.mit.edu': 'http://crosslinks3-demo.mit.edu/api/v2',
				'crosslinks3.mit.edu': 'http://crosslinks3.mit.edu/api/v2',
				'crosslinks.mit.edu': 'http://crosslinks.mit.edu/api/v2',
			};
			var touchstoneService = {
				'localhost': 'https://qbank-dev.mit.edu/api/v2',
				'crosslinks3-dev.mit.edu': 'https://crosslinks3-dev.mit.edu/api/v2',
				'crosslinks3-demo.mit.edu': 'https://crosslinks3-demo.mit.edu/api/v2',
				'crosslinks3.mit.edu': 'https://crosslinks3.mit.edu/api/v2',
				'crosslinks.mit.edu': 'https://crosslinks.mit.edu/api/v2',
			};
			return {
				getDomain: function() {
					if (Utils.isHttps()) return touchstoneService[$window.location.hostname];
					return openService[$window.location.hostname];
				},
				getCredentials: function() {return false;},
				isAuthenticated: function() {
					return _.contains(config.url, 'api/v2');
				},
				getName: function() {return 'qbank';}
			}
		};

		var heroku = function(config) {
			var service = {
				'localhost': 'http://localhost:3000',
				'crosslinks3-dev.mit.edu': 'https://crosslinks3-api.herokuapp.com',
				'crosslinks3-demo.mit.edu': 'https:/crosslinks3-api.herokuapp.com',
				'crosslinks3.mit.edu': 'https://crosslinks3-api.herokuapp.com',
				'crosslinks.mit.edu': 'https://crosslinks3-api.herokuapp.com',
			};
			return {
				getDomain: function() {
					return service[$window.location.hostname];
				},
				getCredentials: function() {
					return false;
				},
				isAuthenticated: function() { return false;},
				getName: function() {return 'heroku';}
			}
		};

		var host = function(config) {
			return {
				getDomain: function() {
	//				return $window.location.href.split('//')[0] + '//' + $window.location.host + '/';
					return '';
				},
				getCredentials: function() {return true;},
				isAuthenticated: function() { return false;},
				getName: function() {return 'host';}
			}
		}

		var chooseStrategy = function(config) {
			if (_.contains(config.url, 'handcar/services')) {
				return handcar(config);
			} else if ( _.contains(config.url, 'assessment') || _.contains(config.url, 'resource.Bin') ) {
				return qbank(config);
			} else if (_.contains(config.url, 'crosslinks3-api')) {
				return heroku(config);
			}

			return host(config);
		}

		// appends the corrent domain to the request
		var middlemanInjector = {
			request: function(config) {
				var service = chooseStrategy(config);
				// solves the mysterious problem of why it's appending an extra trailing slash
				config.url = removeTrailingSlash(config.url);
				// point it to the correct service domain depending on the request
				config.url = service.getDomain() + config.url;
				config.withCredentials = service.getCredentials();

				return config;
			},
			response: function(response) {
				// we need to intercept the reponse to modify it
				// to return only the data and not the kerberos 
				// if it's not a GET and if it's not specifically asking for the user
				// because Cole's middleman wraps the data in an additional 'data' object

				var service = chooseStrategy(response.config);
	//			if ( !Utils.isLocal() && service.isAuthenticated() && (service.getName() == 'handcar' || service.getName() == 'qbank'))  {
				if ( service.isAuthenticated() && (service.getName() == 'handcar' || service.getName() == 'qbank'))  {
					return response.data;
				}
				return response;
			}
		};

		return middlemanInjector;

	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	// core side-bar
	var navigationDirective = __webpack_require__(12);
	var navigationController = __webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);

	// nested component: side-bar
	__webpack_require__(19);
	// nested component: search-select-topics
	__webpack_require__(23);
	__webpack_require__(30);

	module.exports = angular.module('cl3.common.components.navigation', [
		'cl3.common.models.topicRepository',
		'cl3.common.components.login',
		'cl3.common.components.searchTopic',
	])
	.directive( 'navigation', navigationDirective)
	.controller( 'NavigationController', ['$window', '$scope', '$state', 'TopicRepository', 'Authentication', navigationController])


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function() {
		return {
			restrict: 'E',
			templateUrl: 'navigation.html',
			transclude: true,
			scope: {},
			controller: 'NavigationController',
			link: function(scope, element, attrs, controller, transclude) {}
		}
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function sideBarController($window, $scope, $state, TopicRepository, Authentication) {

		$scope.isMinWidth = function() {
			var minWidth = 1065;
			return $window.innerWidth > minWidth || $window.clientWidth > minWidth;
		}

		$scope.setNavigation = function(value) {
			$scope.isNavigationVisible = $scope.isMinWidth() ? true : value;
		}

		Authentication.getUser()
		.then(function(res) {
			$scope.currentUser = res;
		});

		$scope.go = function(topic) {
			$state.go('topic-read', {topicIdentifier: topic.getIdentifier()});
			$scope.setNavigation(false);
		}

	        TopicRepository.getTopics()
	        .then( function(topics) {
	                $scope.isLoading = false;
	                $scope.topics = topics;
		});
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	var v1="<div class=\"navigation clearfix\"> <a ui-sref=\"main\"><img class=\"nav__crosslinks-logo\" src=\"https://res.cloudinary.com/crosslinks/image/upload/crosslinks_logo.v2.png\" alt=\"crosslinks logo\"></a>\n<button class=\"button button--flat nav__menu-button\" ng-click=\"isNavigationVisible = !isNavigationVisible\">Menu</button> <section class=\"nav__wrapper\" ng-class=\"{'js-invisible': !isNavigationVisible}\"> <ul class=\"nav-links\" ng-click=\"isNavigationVisible = false\"> <li class=\"nav-links__item\"><a class=\"nav-link\" ui-sref=\"main\" ui-sref-active=\"js-selected\">Main Page</a></li> <li class=\"nav-links__item\"><a class=\"nav-link\" ui-sref=\"topic-list\" ui-sref-active=\"js-selected\">All Topics</a></li> <li class=\"nav-links__item\"><a class=\"nav-link\" ui-sref=\"edit-list\" ui-sref-active=\"js-selected\">All Edits</a></li> <li class=\"nav-links__item\"><a class=\"nav-link\" ui-sref=\"topic-add\" ui-sref-active=\"js-selected\">Add a Topic</a></li> <li class=\"nav-links__item\"><a class=\"nav-link\" ui-sref=\"about\" ui-sref-active=\"js-selected\">About Crosslinks</a></li> <li class=\"nav-links__item\"><a class=\"nav-link\" ui-sref=\"team\" ui-sref-active=\"js-selected\">Team</a></li> <li class=\"nav-links__item\"><a class=\"nav-link\" ui-sref=\"faqs\" ui-sref-active=\"js-selected\">FAQs</a></li> </ul> <search-topic class=\"margin--bottom search-select\" topics=\"topics\" input-placeholder=\"Search topics\" upon-select=\"go(topic)\"></search-topic> <login class=\"columns\" user=\"currentUser\"></login> </section> </div>";
	angular.module(["ng"]).run(["$templateCache",function(c){c.put("navigation.html", v1)}]);
	module.exports=v1;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/navigation/navigation.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/navigation/navigation.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".nav-links {\n  list-style: none;\n  padding-left: 1em;\n  padding-top: 1.5em; }\n\n.nav-links__item {\n  line-height: 1.5em;\n  margin-bottom: 1.5em; }\n\n.nav-link.js-selected {\n  font-weight: 600; }\n\n@media all and (max-width: 1085px) {\n  .navigation {\n    z-index: 1;\n    position: absolute;\n    top: 0em;\n    left: 0;\n    width: 100%;\n    background: #f2f0e6;\n    padding-left: 0.75rem 0em;\n    padding-right: 0.75rem 0em; }\n    .navigation .nav__crosslinks-logo {\n      display: none; }\n    .navigation .nav__wrapper.js-visible {\n      display: block; }\n    .navigation .nav__wrapper.js-invisible {\n      display: none; }\n    .navigation .nav__wrapper .search-topic-wrapper {\n      padding-left: 1em; } }\n\n@media all and (min-width: 1085px) {\n  .navigation {\n    flex-shrink: 0;\n    width: 220px;\n    padding: 1.5rem 1em;\n    background-color: rgba(253, 251, 246, 0.5); }\n    .navigation .nav__menu-button {\n      display: none; } }\n\n.side-bar__nav {\n  margin-bottom: 1.5em; }\n\n.nav__crosslinks-logo {\n  margin-bottom: 3rem;\n  width: 133px;\n  height: 102px; }\n\n.button.nav__menu-button {\n  margin: 0;\n  background: #A31F34;\n  color: #fff;\n  border-radius: 0; }\n", ""]);

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(20);
	var controller = __webpack_require__(21);
	__webpack_require__(22);

	module.exports = angular.module('cl3.common.components.login', [
		'cl3.common.utils'
	])
	.controller( 'LoginController', ['$scope', 'Utils', controller])
	.directive( 'login', directive)


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function() {
		return {
			restrict: 'E',
			templateUrl: 'login.html',
			scope: {
				user: '='
			},
			controller: 'LoginController',
			link: function(scope, element, attrs, controller) {}
		}
	}


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function loginController($scope, Utils) {

		$scope.goToHttps = Utils.goToHttps;

	}


/***/ },
/* 22 */
/***/ function(module, exports) {

	var v1="<p class=\"bold\">Account</p> <p ng-if=\"!user.isLoggedIn\"><a class=\"nav-link\" ng-href=\"{{ goToHttps() }}\"> Login (MIT Kerberos)</a></p> <p ng-if=\"user.isLoggedIn\" class=\"muted\"> Logged in as <span class=\"bold\" ng-bind=\"user.kerberosId\"></span></p>";
	angular.module(["ng"]).run(["$templateCache",function(c){c.put("login.html", v1)}]);
	module.exports=v1;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive  = __webpack_require__(24);
	var service = __webpack_require__(26);
	var controller = __webpack_require__(27);
	//var rabinKarp = require('./rabinKarp.js');
	__webpack_require__(28);


	module.exports = angular.module('cl3.common.components.searchTopic', [
		'cl3.common.utils'
	])
	.directive( 'searchTopic', directive )
	//.service( 'RabinKarp', rabinKarp)
	.service( 'SearchTopicService', ['$window', 'Utils', service])
	.controller( 'SearchTopicController', ['$timeout', '$scope', 'SearchTopicService', controller])



/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = function searchTopicDirective() {
		return {
			restrict: 'E',
			template: __webpack_require__(25),
			scope: {
				topics: '=',
				inputPlaceholder: '@',
				uponSelect: '&',
			}, 
			controller: 'SearchTopicController',
			link: function(scope, element, attrs, controller, transclude) {
				element.on('keyup', function(e) {
					if (e.keyCode == 27) {
						scope.searchResults = [];
						scope.searchQuery = '';
						scope.$apply();
					}
				});
			}
		}
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search-topic-wrapper\" analytics-event=\"search\">\n\t<input name=\"search-topic-input\" class=\"input search-topic__input\" ng-model=\"searchQuery\" ng-model-options=\"{debounce: 200}\" ng-change=\"searchQuery.length > 2 && search(topics, searchQuery);\" placeholder=\"{{inputPlaceholder}}\" stop-event> \n\t<ul class=\"search-topic__dropdown\" ng-if=\"searchQuery.length > 2\" mathjax=\"searchResults.length\">\n\t\t<li class=\"search-topic__dropdown-item clearfix\" ng-show=\"searchResults.length == 0\">\n\t\t\t<p class=\"search-topic__dropdown--item__title columns\"> Nothing matches! Try looking at All Topics or searching for the class?</p>\n\t\t</li>\n\t\t<li class=\"search-topic__dropdown-item clearfix\" ng-repeat=\"topic in searchResults | orderBy:'displayName'\" ng-click=\"selectItem(topic);\" ng-attr-id=\"{{topic.id}}\">\n\t\t\t<p class=\"search-topic__dropdown-item__title small-12 medium-3 columns\" ng-bind=\"topic.displayName\"></p>\n\n\t\t\t<p class=\"search-topic__dropdown-item__description small-12 medium-9 columns\" ng-bind=\"truncateDescription(topic.description)\"></p>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function($window, Utils, RabinKarp) {

		// MIT topics are assumed to have a subject property, and name and description
		// you'll need to change this for your own search collection

		this.searchTopics = function(topics, query) {
			query = query.toLowerCase();

			// if it's a number, or if it starts with 'course'
			if (query.indexOf('course') == 0 || !isNaN(query)) {
				query = query.split(' ').pop();

				return topics.filter( function(item) {
					var subjects = item.subject;

					if (!subjects) return false;
					var matchesSubject = subjects.some( function(subject) {
						return (subject.number.indexOf(query) == 0);
					});
					return matchesSubject;
				});

			// if it's a text string
			} else if (query.length > 2) {
				// handy tool to test regex: https://regex101.com/

				// build regex to match either or both of individual words in the query
				// uses lookahead and lookaround to match all words in the query, ensures that only word beginnings (or whole words) are matched
				// e.g., 'chain rule' ---> \b(chain)(?=.*\brule)

				var parts = query.split(' ');
				var partQ = '';
				for (var i=0; i<parts.length; i++) {
					if (i==0) {
						//partQ = '\\b' + partQ + '(' + parts[i] + ')';
						partQ = '(?=.*\\b' + parts[i] + ')';
					} else {
						partQ = partQ + '(?=.*\\b' +  parts[i] + ')';
					}
				}
				//console.log(partQ);
				var re = new RegExp(partQ, 'gi')

				var matching = topics.filter( function(item) {
					var nameDescription = item.displayName + ' ' + item.description;
					var matches = nameDescription.match(re);
					return matches;

				});
				return matching;
			}
		}

		this.truncateDescription = function(description) {
			// set our max truncation length depending on window size
			// this needs to be made more robust for different font settings...someday.
			var maxTruncationLength = ($window.innerWidth <= 600) ? 75 : 150;
			description = description.slice(0, maxTruncationLength);

			// make a regex that matches either '$', '$$', '\(', '\)', '\[' or '\]'
			// then find all the matches in the description
			var re = /\$\$*|\\\[|\\\]|\\\(|\\\)/g;
			var matches = description.match(re) || [];
			var lastOpener = '', lastOpenerIndex = -1;

			// if there are an even number of matches, everything's nicely opened and closed
			if (matches.length % 2 == 0) {
				return description + '...';

			// if there's an odd number, we know the last one is the odd one out
			// so we find the place where it appears, and truncate it before that
			// ***note: we assume valid latex here. If the latex is not valid, then this fails,
			// but it doesn't matter, because if the latex isn't valid, then it's going to show up funny anyway
			} else {
				lastOpener = matches[matches.length-1];
				lastOpenerIndex = description.lastIndexOf(lastOpener);
			}

			return description.slice(0, lastOpenerIndex-lastOpener.length) + '...';
		}

	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function SearchTopicController($timeout, $scope, SearchTopicService ) {

		$scope.selectItem = function(arg) {
			$scope.uponSelect({topic: arg});
			$scope.searchResults = [];
			$timeout(function(){ $scope.searchQuery = ''; }, 1);
		}

		$scope.search = function(array, query) {
			$scope.searchResults = SearchTopicService.searchTopics(array, query);
		}

		$scope.cancelSearch = function() {
			$scope.searchQuery = '';
			$scope.searchResults = [];
		}

		$scope.truncateDescription = function(text) {
			return SearchTopicService.truncateDescription(text);
		}
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/search-topic/searchTopic.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/search-topic/searchTopic.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".search-topic-wrapper {\n  position: relative;\n  width: 100%; }\n\n.search-topic__input {\n  background-image: url(\"https://res.cloudinary.com/crosslinks/image/upload/search--dark.png\");\n  background-position: 0 50%;\n  padding-left: 2em;\n  background-size: 1em;\n  background-repeat: no-repeat; }\n\n.search-topic__dropdown {\n  position: absolute;\n  border: 1px solid #cacbcc;\n  box-shadow: 0px 1px 1px rgba(202, 202, 203, 0.8);\n  list-style: none;\n  padding-left: 0;\n  width: 100%;\n  z-index: 4; }\n  @media all and (min-width: 1085px) {\n    .search-topic__dropdown {\n      min-width: 48em; } }\n\n.search-topic__dropdown-item {\n  cursor: pointer;\n  width: 100%;\n  padding-top: .75em;\n  padding-bottom: .75em;\n  background: #fff;\n  z-index: 1; }\n\n.search-topic__dropdown-item:hover, .search-topic__dropdown-item.js-on-hover {\n  background-color: #F2F0E6; }\n\n.search-topic__dropdown-item__title {\n  color: #A31F34;\n  height: 100%;\n  margin-bottom: 0; }\n\n.search-topic__dropdown-item__description {\n  height: 100%;\n  margin-bottom: 0; }\n", ""]);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var topicRepository = __webpack_require__(31);
	var subjectRepository = __webpack_require__(32);

	__webpack_require__(33);

	module.exports = angular.module( 'cl3.common.models.topicRepository', [
		'cl3.common.models'
	])

	.service( 'TopicRepository', ['$http', '$q', 'Topic', 'Subject', topicRepository])
	.service( 'SubjectRepository', ['$http', '$q', 'Subject', subjectRepository])


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function TopicRepositoryService($http, $q, Topic, Subject) {

		var relationship_endpoint = '/handcar/services/relationship/families/mc3-family%3A1%40MIT-OEIT/relationships';
		var requisite_relationship = 'mc3-relationship%3Amc3.lo.2.lo.requisite%40MIT-OEIT';

		var createRelationship = function(data) {
			if (data.genusTypeId.indexOf('requisite') > -1) {
				data.linkType = 'requisite';
			} else if (data.genusTypeId.indexOf('relate') > -1) {
				data.linkType = 'relate';
			}               
					
			return {        
				id: data.id,
				sourceId: data.sourceId,
				destinationId: data.destinationId,
				linkType: data.linkType,
				genusTypeId: data.genusTypeId,
			};   
		}


		this.get = function(topicId) {
			return Topic.fetch(topicId)
			.then( function(res) {
				return Topic.createTopic(res);
			})
		};

		this.getTopics = function() {
			return $q.all([
				$http.get(Topic.constants.endpoint + '?genustypeid=' + Topic.constants.genusTypeId), $http.get(Topic.constants.extensionEndpoint + '?genustypeid=' + Topic.constants.genusTypeId)
			])
			.then( function(res) {
				var topics = res[0].data.map(Topic.createTopic);
				var subjectExts = _.flatten(_.pluck(res[1].data, 'recordProperties')).map(Subject.createSubject);
				_.forEach( subjectExts, function(ext) {
					var topic = _.find(topics, {'id': ext.associatedId});
					topic.add('subject', ext);
				});
				return topics;
			});
		}

		var relationships;
		this.getRelationships = function() {
			return $q.when( relationships ? relationships : $http.get(relationship_endpoint + '?genustypeid=' + requisite_relationship)
			.then( function(res) {
				relationships = res.data.map(createRelationship);
				return relationships;
			}));  
		}

		this.getTopicRequisites = function(topicId) {
			return $http.get(Topic.constants.endpoint + '/' + topicId + '/requisites/bulk?descendentLevels=1')
			.then( function(res) {
				return res.data;
			});  
		}
			
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function SubjectRepository($http, $q, Subject) {

		// this is a hack because at the time of Crosslinks,
		// Backstage didn't support subjects so we had to use another backend service
		// replace this with the endpoint of where you're storing your subjects
		var fetchSubjects = function() {
			return $http.get('/crosslinks3-api/subjects')
			.then( function(res) {
				return res.data;
			});
		}

		var subjectsDict = {}, subjectsArray;

		this.getSubjects = function() {
			return $q.when( subjectsArray ? subjectsArray : fetchSubjects())
			.then( function(res) {
				subjectsArray = res.map(Subject.createSubject);
				return subjectsArray;
			});
		}
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var topic = __webpack_require__(34);
	var subject = __webpack_require__(35);
	var reference = __webpack_require__(36);
	var resource = __webpack_require__(37);
	var proxyConstants = __webpack_require__(38);
	var requestProcessor = __webpack_require__(39);
	var proxy = __webpack_require__(40);

	module.exports = angular.module( 'cl3.common.models', [
		'cl3.common.auth'
	])
	.constant( 'ProxyConstants', proxyConstants)
	.service( 'RequestProcessor', ['ProxyConstants', requestProcessor])
	.service( 'Proxy', ['$http', '$q', 'ProxyConstants', 'RequestProcessor', 'Authentication', proxy])
	.factory( 'Subject', subject)
	.factory( 'Reference', reference)
	.factory( 'Resource', resource)

	.factory( 'Topic', ['$q', 'Proxy', 'Alias', 'Subject', 'Reference', 'Resource', topic])


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function TopicFactory($q, Proxy, Alias, Subject, Reference, Resource) {

		function Topic(data) {
			if (data) {
				this.id = data.id;
				this.displayName = data.displayName.text;
				this.description = data.description.text;
				this.assessmentId = data.assessmentId;
				this.genusTypeId = data.genusTypeId;
				this.alias = Alias.createAlias(data.displayName.text);
			} else {
				this.id = '';
				this.displayName = 'New topic title';
				this.description = 'This topic needs a description!';
			}
			this.prepare = [];
			this.relate = [];
			this.advance = [];
			this.learn = [];
			this.apply = [];
			this.subject = [];
		}

		var property_strategies = {
			'displayName': {
				'update': 'topic'
			},
			'description': {
				'update': 'topic'
			},
			'prepare': {
				'get': function(data) {
					return new Topic(data);
				},
				'update': 'prepare'
			},
			'relate': {
				'get': function(data) {
					return new Topic(data);
				},
				'update': 'relate'
			},
			'advance': {
				'get': function(data) {
					return new Topic(data);
				},
				'update': 'advance'
			},
			'learn': {
				'get': function(data) {
					return Resource.createResource(data);
				},
				'update': 'learn'
			},
			'apply': {
				'get': function(data) {
					return Resource.createResource(data);
				},
				'update': 'apply'
			},
			'reference': {
				'get': function(data) {
					return Reference.createReference(data);
				},
				'update': 'reference'
			},
			'subject': {
				'get': function(data) {
					return Subject.createSubject(data);
				},
				'update': 'subject'
			}
		};

		Topic.prototype = {
			get: function(prop) {
				var self = this;
				var build = property_strategies[prop]['get'];

				return Proxy.execute("get", prop, self)
				.then( function(res) {
					self[prop] = res.map( build );
					return self[prop];
				});
			},

			update: function(prop) {
				var self = this;
				var cmd = property_strategies[prop]['update'];
				if (prop == 'displayName') {
					self.alias = Alias.createAlias(self.displayName);
					Proxy.execute("update", "alias", self);
				}
				
				return Proxy.execute("update", cmd, self)
				.then( function(res) {
					return self;
				});
			},

			save: function() {
				this.alias = Alias.createAlias(this.displayName);
				var self = this;
				
				return Proxy.execute("save", "topic", self)
				.then( function(res) {
					self.id = res.id;
					return $q.all([ Proxy.execute("update", "prepare",self), Proxy.execute("update", "relate", self), Proxy.execute("update", "advance", self), 
							Proxy.execute("save", "learnApply", self), Proxy.execute("update", "subject", self), Proxy.execute("update", "reference", self),
							Proxy.execute("save", "alias", self)
					]);
				})
				.then( function(res) {
					return self;
				});

			},

			trash: function() {
				var self = this;
				return $q.all([Proxy.execute("delete", "topic", self), Proxy.execute("delete", "alias", self) ])
				.then( function(res) {
					console.log(res);
					return res[0];
				});
			},
			add: function(prop, model) {
				this[prop] = this[prop] || [];
				this[prop].push(model);
				return this;
				
			},
			remove: function(prop, model) {
				if (this[prop]) {
					_.remove(this[prop], model);
				}
				return this;
			},
			getIdentifier: function() {
				return this.alias || this.id;
			},
			// convenience methods
			getCourseTags: function() {
				return _.unique(_.map(this.subject, function(s) {
					return s.getCourseNumber();
				}));
			},
			getSubjectTags: function() {
				return _.unique( _.pluck(this.subject, 'number'));
			}
		};

		Topic.constants = {
			endpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/objectives',
			genusTypeId: 'mc3-objective%3Amc3.learning.topic%40MIT-OEIT',
			extensionEndpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/objectiveextensions'
		};

		Topic.fetch = function(topicId) {
			return Proxy.execute('get', 'topic', topicId);
		}

		Topic.createTopic = function(data) {
			return new Topic(data);
		}


		return Topic;
	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function SubjectFactory() {

		function Course(data) {
			this.number = data;
			this.name = 'Course ' + data;
		}

		function Subject(data) {
			if (data) {
				this.id = data.id;
				this.associatedId = data.associatedId;
				this.number = data.value || data.number; 
				this.name = (data.displayName && data.displayName.text) || data.name;
			} else { 
				this.name = 'No subject name ';
				this.number = 'No subject number';
				this.course = null;
			}
			if (this.number) {this.course = new Course(this.number.split('.')[0]); }
		}

		Subject.prototype.getCourseNumber = function() {
			return this.course.number;
		}


		Subject.createSubject = function(data) {
			return new Subject(data);
		}

		return Subject;

	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function ReferenceFactory() {

		var referenceTypes = {
			'wikipedia': {
				type: 'wikipedia',
				icon: 'wikipedia',
				is: function(url) {
					return _.includes(url, 'wikipedia');
				}
			},
			'wolfram': {
				type: 'wolfram',
				icon: 'wolfram',
				is: function(url) {
					return _.includes(url, 'wolfram');
				}
			},
		};

		var assignType = function(reference, type) {
			if (!type) {
				var typeTemplate = _.find( referenceTypes, function(type) {
					return type.is(reference.url);
				});
				reference.type = typeTemplate ? typeTemplate.type : '';
				reference.icon = typeTemplate ? typeTemplate.icon : '';
			} else {
				reference.type = referenceTypes[type].type;	
				reference.icon = referenceTypes[type].icon;	
			}
			return reference;
		}

		function Reference(data) {
			if (data) {
				this.id = data.id;
				this.displayName = data.assetContents[0].displayName.text || '';
				this.url = data.assetContents[0].url;
			} else {
				this.id = '';
				this.displayName = '';
				this.url = '';
			}
		}

		Reference.prototype.getIdentifier = function() {
			return this.type;
		};

		ReferenceFactory.createReference = function(data) {
			var reference = new Reference(data);
			reference = assignType(reference);
			return reference;
		}

		ReferenceFactory.createReferenceCollection = function(referenceCol) {
			var requiredTypes = _.keys(referenceTypes);
			referenceCol = referenceCol || [];
			_.forEach( referenceCol, function(reference) {
				if (!reference.type) {
	//				console.log('assigning this reference to type: ', requiredTypes[0]);
					reference = assignType(reference, requiredTypes[0]);
				}
				requiredTypes.splice(0, 1);
			});

			requiredTypes = _.keys(referenceTypes);
			_.forEach( requiredTypes, function(t) {
				var reference = _.find( referenceCol, {'type': t});
				if (!reference) {
	//				console.log('making reference of type: ', t);
					reference = new Reference();
					reference = assignType(reference, t);
					referenceCol.push(reference);
				}
			});
	//		console.log(referenceCol);
			return referenceCol;
		}

		return ReferenceFactory;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function ResourceFactory() {

		var resourceStrategies = {
			'ocw': function(resource) {
				return _.includes(resource.url, 'ocw'); 
			},
			'youtube': function(resource) {
				return _.includes(resource.url, 'youtube') || _.includes(resource.url, 'youtu.be'); 
			},
			'khan_academy': function(resource) {
				return _.includes(resource.url, 'khanacademy'); 
			},
			'mathlet': function(resource) {
				return _.includes(resource.url, 'mathlet') || _.includes(resource.displayName.toLowerCase(), 'mathlet'); 
			},
			'wolfram': function(resource) {
				return _.includes(resource.url, 'wolfram');
			},
			'lamar': function(resource) {
				return _.includes(resource.url, 'lamar.edu');
			},
			'berkeley': function(resource) {
				return _.includes(resource.url, 'berkeley');
			},
			'mit': function(resource) {
				return !_.includes(resource.url, 'ocw') && _.includes(resource.url, '.mit.edu');
			},
			'uc_davis': function(resource) {
				return _.includes(resource.url, 'ucdavis.edu');
			},
			'nature': function(resource) {
				return _.includes(resource.url, 'nature.com');
			},

		};
		var keys = _.keys(resourceStrategies);

		var decorateResource = function(resource) {
			resource.iconType = 'other_resource';
			for (var i=keys.length; i--;) {
				var isType = resourceStrategies[keys[i]](resource);
				if (isType) {
					resource.iconType = keys[i];
				}
			}
			return resource;
		}

		function Resource(data) {
			if (data) {
				this.id = data.id;
				this.genusTypeId = data.genusTypeId;
				this.displayName = data.assetContents[0].displayName.text || '';
				this.description = data.assetContents[0].description.text || '';
				this.url = data.assetContents[0].url;
			} else {
				this.displayName = 'New Resource';
				this.description = 'New Resource description';
				this.url = 'http://example.com';
			}
		}

		Resource.createResource = function(data) {
			var resource = decorateResource( new Resource(data) );
			return resource;
		}

		return Resource;

	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		TOPIC: {
			genusTypeId: 'mc3-objective%3Amc3.learning.topic%40MIT-OEIT',
			endpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/objectives',
		},
		BLOOM_TYPES: {
			APPLY: 'mc3.grade.system.cognitive.process.crosslinks%3Amc3.grade.bloom.apply%40MIT-OEIT',
			LEARN: 'mc3.grade.system.cognitive.process.crosslinks%3Amc3.grade.bloom.learn%40MIT-OEIT',
			genusTypeId: 'mc3-objective%3Amc3.learning.generic.outcome%40MIT-OEIT',
		},
		OUTCOME: {
			genusTypeId: 'mc3-objective%3Amc3.learning.generic.outcome%40MIT-OEIT',
		},
		SUBJECT: {
			
		},
		ASSET: {
			endpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/assets',
			genusTypeId: "mc3-asset%3Amc3.learning.asset.url%40MIT-OEIT",
		},
		ASSET_CONTENT: {
			genusTypeId: 'mc3-asset-content%3Amc3.learning.asset.content.unknown%40MIT-OEIT'
		},
		ACTIVITY: {
			endpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/activities',
			genusTypeId: 'mc3-activity%3Amc3.learning.activity.generic%40MIT-OEIT'
		},
		endpoints: {
			objective: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/objectives',
			
			user: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT',		// note: this is a hack to just hit the middleman to get the kerberos
			log: '/handcar/services/logging/logs/mc3-log%3A2%40MIT-OEIT/logentries',
			alias: '/handcar/services/id/aliases',
			relationship: '/handcar/services/relationship/families/mc3-family%3A1%40MIT-OEIT/relationships',
		},
		genusType: {
			related: 'mc3-relationship%3Amc3.lo.2.lo.related%40MIT-OEIT',
			requisite: 'mc3-relationship%3Amc3.lo.2.lo.requisite%40MIT-OEIT',
			activity: 'mc3-activity%3Amc3.learning.activity.generic%40MIT-OEIT',
			log: {
				info: "mc3-logentry%3Amc3.logentry.info%40MIT-OEIT",
				create: "mc3-logentry%3Amc3.logentry.create%40MIT-OEIT",
				read: "mc3-logentry%3Amc3.logentry.read%40MIT-OEIT",
				update: "mc3-logentry%3Amc3.logentry.update%40MIT-OEIT",
				delete: "mc3-logentry%3Amc3.logentry.delete%40MIT-OEIT"
			}
		},
		ASSESSMENT: {
			bankId: 'assessment.Bank%3A555f6760e7dde0cbd8c10c75%40bazzim.MIT.EDU'
		},
		priorityType: {
			fatal: 'mc3-log-entry-priority-type%3Amc3.logging.priority.1.fatal%40MIT-OEIT',
			error: 'mc3-log-entry-priority-type%3Amc3.logging.priority.2.error%40MIT-OEIT',
			warning: 'mc3-log-entry-priority-type%3Amc3.logging.priority.3.warning%40MIT-OEIT',
			info: 'mc3-log-entry-priority-type%3Amc3.logging.priority.4.info%40MIT-OEIT',
			debug: 'mc3-log-entry-priority-type%3Amc3.logging.priority.5.debug%40MIT-OEIT',
			trace: 'mc3-log-entry-priority-type%3Amc3.logging.priority.6.trace%40MIT-OEIT',
			none: 'mc3-log-entry-priority-type%3Amc3.logging.priority.0.none%40MIT-OEIT'
		},
		defaultKerberos: {
			address: 'dummyTest@mit.edu',
			id: 'dummyTest'
		}
	}


/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function RequestProcessor(ProxyConstants) {
		var strategyFns = {
			'TOPIC': function(data) {
				var result = {
					id: data.id,
					assessmentId: data.assessmentId,
					displayName: {text: data.displayName },
					description: {text: data.description},
					genusTypeId: ProxyConstants.TOPIC.genusTypeId
				};
				return result;
			},
			'SUBJECT': function(data) {
				var packed = {
					value: data.number,
					displayName: {
						text: data.name
					}
				};
				return packed;
			},
			'ASSET': function(item) {
				var packed = {
					id: item.id,
					genusTypeId: ProxyConstants.ASSET.genusTypeId,
					assetContents: [
						{
							genusTypeId: ProxyConstants.ASSET_CONTENT.genusTypeId,
							displayName: {text: item.displayName},
							description: {text: item.description},
							url: item.url
						},
					]
				};
				return packed;
			},	

			'LOGENTRY': function(data) {
				var packed = {
					genusTypeId: ProxyConstants.genusType.log.info,
					priorityTypeId: ProxyConstants.priorityType.info,
					agentId: data.agentId,
					resourceId: data.resourceId,
					displayName: {
						text: data.displayName || ''
					},      
					description: {  
						text: data.description || '',
					},              
					recordProperties: data.recordProperties
				};                      
				return packed;  
			}
		};

		this.pack = function(type) {
			return strategyFns[type];
		}
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function ProxyService($http, $q, ProxyConstants, RequestProcessor, Authentication) {

		var getObjectiveChildOfType = function(objectiveId, type) {
			return $http.get(ProxyConstants.TOPIC.endpoint + '/' + objectiveId + '/children?cognitiveprocessid=' + type)
			.then( function(res) {
				return res.data[0];
			});
		}

		var getObjectiveActivity = function(objectiveId) {
			return $http.get(ProxyConstants.TOPIC.endpoint + '/' + objectiveId + '/activities')
			.then( function(res) {
				return res.data[0];		// we only use the first activity in Crosslinks
			});
		}

		// wrapper function to get data from response instead of having to do res.data
		var promisePluck = function(promise, prop) {
			return promise
			.then( function(res) {
				return res[prop];
			});
		}

		// need a wrapper function around this to feed into $q.all 
		var getAsset = function(assetId) {
			return $http.get(ProxyConstants.ASSET.endpoint + '/' + assetId)
			.then( function(res) {
				return res.data;		
			});
		}

		var updateSaveAsset = function(item) {
			if (item.id) {
				return $http.put(ProxyConstants.ASSET.endpoint, item)
				.then( function(res) {
					item.id = res.data.id;
					return res.data;
				});
			} else {
				return $http.post(ProxyConstants.ASSET.endpoint, item)
				.then( function(res) {
					item.id = res.data.id;
					return res.data;
				});
			}
		}

		// Stamps out an empty objective for POSTing 
		var getBloomObjectiveTemplate = function(type) {
			return {
				id: '',
				cognitiveProcessId: type,
				genusTypeId: ProxyConstants.BLOOM_TYPES.genusTypeId
			};
		}
		var getActivityTemplate = function(topicId, bloomObjectiveId, type) {
			var activityLearnTemplate = {
				objectiveId: bloomObjectiveId,
				genusTypeId: ProxyConstants.ACTIVITY.genusTypeId,
				displayName: {text: type + ' activity for topic ' + topicId + ' (activity of bloomTypeChild ' + bloomObjectiveId + ')'},
			};
		};

		var manager = {
			'getTopic': function(topicId) {
				return $http.get(ProxyConstants.TOPIC.endpoint + '/' + topicId)
				.then( function(res) {
					return res.data;
				});
			},
			'getPrepare': function(topic) {
				return $http.get(ProxyConstants.TOPIC.endpoint + '/' + topic.id + '/requisites')
				.then( function(res) {
					return res.data;
				});
			},
			'getRelate': function(topic) {
				return $http.get(ProxyConstants.TOPIC.endpoint + '/' + topic.id + '/relatedobjectives' + '/' + ProxyConstants.genusType.related)
				.then( function(res) {
					return res.data;
				});
			},
			'getAdvance': function(topic) {
				return $http.get(ProxyConstants.TOPIC.endpoint + '/' + topic.id + '/dependents')
				.then( function(res) {
					return res.data;
				});
			},

			'getLearn': function(topic) {
				return getObjectiveChildOfType(topic.id, ProxyConstants.BLOOM_TYPES.LEARN)
				.then( function(child) {
	//				console.log('child of bloom type: ', res);
					return child ? getObjectiveActivity(child.id) : null;
				})
				.then( function(activity) {
	//				console.log('activity of bloom-type objective: ', activity);
					return activity ? $q.all( activity.assetIds.map(getAsset) ) : [];
				})
				.then( function(assets) {
					return assets;
				});
			},

			'getApply': function(topic) {
				return getObjectiveChildOfType(topic.id, ProxyConstants.BLOOM_TYPES.APPLY)
				.then( function(child) {
					return child ? getObjectiveActivity(child.id) : null;
				})
				.then( function(activity) {
					return activity ? $q.all( activity.assetIds.map(getAsset) ) : [];
				})
				.then( function(assets) {
					return assets;
				});
			},

			'getSubject': function(topic) {
				return $http.get(ProxyConstants.TOPIC.endpoint + '/' + topic.id + '/extension')
				.then( function(res) {
					return res.data.recordProperties;
				});
			},

			'getReference': function(topic) {
				return getObjectiveActivity(topic.id)
				.then( function(activity) {
					return activity ? $q.all( activity.assetIds.map(getAsset) ) : [];
				})
				.then( function(assets) {
					return assets;
				});
			},


			// PUT
			'updateTopic': function(item) {
				var packed = RequestProcessor.pack('TOPIC')(item);

				return $http.put(ProxyConstants.TOPIC.endpoint, packed)
				.then( function(res) {
					return res.data;
				});
			},

			'updatePrepare': function(data) {
				var idsOnly = _.pluck(data.prepare, 'id');

				return $http.put(ProxyConstants.TOPIC.endpoint + '/'+ data.id + '/requisiteids', {ids: idsOnly})
				.then( function(res) {
					return res.data.ids;
				}, function(err) {
					return err;
				});
			},
			'updateRelate': function(data) {
				var idsOnly = _.pluck(data.relate, 'id');

				return $http.put(ProxyConstants.TOPIC.endpoint + '/'+ data.id + '/relatedobjectiveids' + '/' + ProxyConstants.genusType.related, {ids: idsOnly})
				.then( function(res) {
					return res.data.ids;
				}, function(err) {
					return err;
				});
			
			},
			'updateAdvance': function(data) {
				var idsOnly = _.pluck(data.advance, 'id');

				return $http.put(ProxyConstants.TOPIC.endpoint + '/'+ data.id + '/dependentids', {ids: idsOnly})
				.then( function(res) {
					return res.data.ids;
				}, function(err) {
					return err;
				});
			},

			'updateLearn': function(data) {
				var topicId = data.id;
				var resources = data.learn;
				var packedResources = resources.map( RequestProcessor.pack('ASSET') );
				var bloomTypeChild, activityLearn;
				var childIds = {
					ids: []
				};

				return $http.get(ProxyConstants.TOPIC.endpoint + '/' + topicId + '/children')
				.then( function(res) {
					childIds.ids = _.pluck(res.data, 'id');
					bloomTypeChild = _.find( res.data, {'cognitiveProcessId': ProxyConstants.BLOOM_TYPES.LEARN});

					// this block ensures there is a bloom type objective child
					return $q.when( bloomTypeChild ? bloomTypeChild : promisePluck($http.post(ProxyConstants.TOPIC.endpoint, getBloomObjectiveTemplate(ProxyConstants.BLOOM_TYPES.LEARN)), 'data') );
				})
				.then( function(res) {
					// this block ensures the bloom type objective child is attached to the topic
					bloomTypeChild = res;
					console.log('resolved a bloomTypeChildLearn instance:', bloomTypeChild);

					childIds.ids = _.union(childIds.ids, [bloomTypeChild.id]);

					return $http.put(ProxyConstants.TOPIC.endpoint + '/' + topicId + '/childids', childIds);	
				})
				.then( function(res) {
					console.log('updated childids of topic with bloom type learn ', res.data);
					return getObjectiveActivity(bloomTypeChild.id);
				})
				.then( function(res) {
					// this block ensures that there is an activity, and that the activity is attached to the bloom type child
					activityLearn = res;

					return $q.when( activityLearn ? activityLearn : promisePluck($http.post(ProxyConstants.ACTIVITY.endpoint + '/', getActivityTemplate(topicId, activityLearn.id, ProxyConstants.BLOOM_TYPES.LEARN)),'data') );
				})
				.then( function(res) {
					// this block saves the resource assets
					activityLearn = res;
					console.log('resolve a activityLearn instance:', res);
					return $q.all( _.map( packedResources, updateSaveAsset) );
				})
				.then( function(res) {
					// this block assigns the assetIds of the newly-saved assets to the activity
					// and updates the activity
					_.forEach( res, function(item, index) {
						resources[index].id = item.id;
					});
					activityLearn.assetIds = _.pluck(resources, 'id');

					return $http.put(ProxyConstants.ACTIVITY.endpoint + '/', activityLearn);
				})
				.then( function(res) {
					console.log('updated learn and apply activities with updated assetIds', res);
					return data.learn;
				});

			},

			'updateApply': function(data) {
				var topicId = data.id;
				var resources = data.apply;
				var packedResources = resources.map( RequestProcessor.pack('ASSET') );
				var bloomTypeChild, activityApply;
				var childIds = {
					ids: []
				};

				return $http.get(ProxyConstants.TOPIC.endpoint + '/' + topicId + '/children')
				.then( function(res) {
					childIds.ids = _.pluck(res.data, 'id');
					bloomTypeChild = _.find( res.data, {'cognitiveProcessId': ProxyConstants.BLOOM_TYPES.APPLY});

					// this block ensures there is a bloom type objective child
					return $q.when( bloomTypeChild ? bloomTypeChild : promisePluck($http.post(ProxyConstants.TOPIC.endpoint, getBloomObjectiveTemplate(ProxyConstants.BLOOM_TYPES.APPLY)), 'data') );
				})
				.then( function(res) {
					// this block ensures the bloom type objective child is attached to the topic
					bloomTypeChild = res;
					console.log('resolved a bloomTypeChildApply instance:', bloomTypeChild);

					childIds.ids = _.union(childIds.ids, [bloomTypeChild.id]);

					return $http.put(ProxyConstants.TOPIC.endpoint + '/' + topicId + '/childids', childIds);	
				})
				.then( function(res) {
					console.log('updated childids of topic with bloom type learn ', res.data);
					return getObjectiveActivity(bloomTypeChild.id);
				})
				.then( function(res) {
					// this block ensures that there is an activity, and that the activity is attached to the bloom type child
					activityApply = res;

					return $q.when( activityApply ? activityApply : promisePluck($http.post(ProxyConstants.ACTIVITY.endpoint + '/', getActivityTemplate(topicId, activityLearn.id, ProxyConstants.BLOOM_TYPES.APPLY)),'data') );
				})
				.then( function(res) {
					// this block saves the resource assets
					activityApply = res;
					console.log('resolve a activityApply instance:', res);
					return $q.all( _.map( packedResources, updateSaveAsset) );
				})
				.then( function(res) {
					// this block assigns the assetIds of the newly-saved assets to the activity
					// and updates the activity
					_.forEach( res, function(item, index) {
						resources[index].id = item.id;
					});
					activityApply.assetIds = _.pluck(resources, 'id');

					return $http.put(ProxyConstants.ACTIVITY.endpoint + '/', activityApply);
				})
				.then( function(res) {
					console.log('updated apply activities with updated assetIds', res);
					return data.learn;
				});

			},

			'updateSubject': function(data) {
				var packed = data.subject.map( RequestProcessor.pack('SUBJECT') );

				return $http.put(ProxyConstants.TOPIC.endpoint + '/' + data.id + '/extension', {recordProperties: packed})
				.then( function(res) {
					return res.data;
				});
			},
			
			'updateReference': function(data) {
				var updatedAssetIds;
				var packed = data.reference.filter( function(ref) {
					return ref.displayName; 
				}).map( RequestProcessor.pack('ASSET') );

				// save the actual assets
				return $q.all( _.map( packed, function(item) {
						if (item.id) {
							return $http.put(ProxyConstants.ASSET.endpoint, item)
							.then( function(res) {
								item.id = res.data.id;
								return res.data;
							});
						} else {
							return $http.post(ProxyConstants.ASSET.endpoint, item)
							.then( function(res) {
								item.id = res.data.id;
								return res.data;
							});
						}
					})
				)		// then get the child activity of this topic
				.then( function(res) {
					updatedAssetIds = _.pluck(res, 'id');	
					return getObjectiveActivity(data.id);
				})
				.then( function(activity) {
					if (activity) {
						activity.assetIds = updatedAssetIds;
						return $http.put(ProxyConstants.ACTIVITY.endpoint, activity);
					} else {
						var newActivity = {
							objectiveId: data.id,
							genusTypeId: ProxyConstants.ACTIVITY.genusTypeId,
							displayName: {text: 'reference activity for topic ' + data.id},
						};
						return $http.post(ProxyConstants.ACTIVITY.endpoint, newActivity)
						.then( function(res) {
							res.data.assetIds = updatedAssetIds;
							return $http.put(ProxyConstants.ACTIVITY.endpoint, res.data);
						});

					}
				})
				.then( function(res) {
					return data.references;
				}, function(err) {
					console.error( 'error occured in updating topic wiki and wolfram links');
				});

			},
			
			// POST (save)
			'saveTopic': function(item) {
				var packed = RequestProcessor.pack('TOPIC')(item);

				return $http.post(ProxyConstants.TOPIC.endpoint, packed)
				.then( function(res) {
					return res.data;
				});
			},

			'saveLearnApply': function(data) {
				var topicId = data.id;
				var resources = data.learn.concat(data.apply);
				var packedResources = resources.map( RequestProcessor.pack('ASSET') );
				var activityLearn, activityApply;

				var bloomTypeChild = {
					id: '',
					cognitiveProcessId: ProxyConstants.BLOOM_TYPES.LEARN,
					genusTypeId: ProxyConstants.BLOOM_TYPES.genusTypeId
				};
				var bloomTypeChildApply = {
					id: '',
					cognitiveProcessId: ProxyConstants.BLOOM_TYPES.APPLY,
					genusTypeId: ProxyConstants.BLOOM_TYPES.genusTypeId
				};

				return $q.all([ $http.post(ProxyConstants.TOPIC.endpoint, bloomTypeChild), $http.post(ProxyConstants.TOPIC.endpoint, bloomTypeChildApply) ])
				.then( function(res) {
					bloomTypeChild = res[0].data;
					bloomTypeChildApply = res[1].data;
					var childIdsData = {
						ids: [bloomTypeChild.id, bloomTypeChildApply.id]
					};
					return $http.put(ProxyConstants.TOPIC.endpoint + '/' + topicId + '/childids', childIdsData);	
				})
				.then( function(res) {
	//				console.log('updated childids of topic with bloom type children learn and apply', res.data);

					var newActivityOfLearn = {
						objectiveId: bloomTypeChild.id,
						genusTypeId: ProxyConstants.ACTIVITY.genusTypeId,
						displayName: {text: 'Learn activity for topic ' + topicId + ' (activity of bloomTypeChild ' + bloomTypeChild.id + ')'},
					};
					var newActivityOfApply = {
						objectiveId: bloomTypeChildApply.id,
						genusTypeId: ProxyConstants.ACTIVITY.genusTypeId,
						displayName: {text: 'Apply activity for topic ' + topicId + ' (activity of bloomTypeChild ' + bloomTypeChildApply.id + ')'},
					};
					return $q.all([ $http.post(ProxyConstants.ACTIVITY.endpoint + '/', newActivityOfLearn), $http.post(ProxyConstants.ACTIVITY.endpoint + '/', newActivityOfApply) ])
				})
				.then( function(res) {
	//				console.log('created an activity each for bloom learn and bloom apply', res);
					activityLearn = res[0].data;
					activityApply = res[1].data;
					return $q.all( _.map( packedResources, updateSaveAsset) );
				})
				.then( function(res) {
					_.forEach( res, function(item, index) {
						resources[index].id = item.id;
					});
					var updatedAssetIdsLearn = _.pluck(data.learn, 'id');
					var updatedAssetIdsApply = _.pluck(data.apply, 'id');
					activityLearn.assetIds = updatedAssetIdsLearn;
					activityApply.assetIds = updatedAssetIdsApply;
					
					return $q.all([ $http.put(ProxyConstants.ACTIVITY.endpoint + '/', activityLearn), $http.put(ProxyConstants.ACTIVITY.endpoint + '/', activityApply) ]);
				})
				.then( function(res) {
	//				console.log('updated learn and apply activities with updated assetIds', res);
					return [data.learn, data.apply];	
				});
			},

			'saveAlias': function(data) {
				return $http.post(ProxyConstants.endpoints.alias + '/' + data.id + '/' + data.alias)
				.then( function(res) {
					return res.data;
				});
			},

			'saveLogEntry': function(item) {
				var packed = RequestProcessor.pack('LOGENTRY')(item);

				return $http.post(ProxyConstants.endpoints.log, packed)
				.then( function(res) {
					return res.status;
				});  
			},


			// DELETE

			'deleteTopic': function(data) {
				return $http.delete(ProxyConstants.TOPIC.endpoint + '/' + data.id + '?cascade=true' )
				.then( function(res) {
					console.log('topic deleted: ', res.data);
					return res.data;
				});
			},

			'updateAlias': function(data) {
				return $http.delete(ProxyConstants.endpoints.alias + '/' + data.id + '/mc3-objective%3A' + data.oldAlias + '%40USER-ALIAS')
				.then( function(res) {
					return $http.post(ProxyConstants.endpoints.alias + '/' + data.id + '/' + data.alias)
				})
				.then( function(res) {
					return res.data;
				});
			},

			'deleteAlias': function(data) {
				console.log(data);
				return $http.delete(ProxyConstants.endpoints.alias + '/' + data.id + '/mc3-objective%3A' + data.alias + '%40USER-ALIAS')
				.then( function(res) {
					return res.data;
				});
			},

			// this isn't used at the moment
			'getRequisiteHierarchy': function() {
				return $http.get(ProxyConstants.TOPIC.endpoint + '/beginners?genustypeid=' + ProxyConstants.TOPIC.genusTypeId)
				.then( function(res) {
					return res.data;
				});
			}
			
		}

		this.execute = function(command, property, data) {
			var fn = command + property.charAt(0).toUpperCase() + property.slice(1);
			if (!manager[fn]) throw "Function name " + fn + " doesn't exist in HandcarProxy"
			return manager[fn] && manager[fn](data);
		}

	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mathjax = __webpack_require__(42);

	module.exports = angular.module( 'cl3.common.directives.mathjax', [
	])
	.directive( 'mathjax', ['$timeout', '$window', mathjax ])


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function ($timeout, $window) {
		return { 
			scope: {
				mathjax: '=',
			},
			link: function(scope, element, attrs) { 
				if ($window.MathJax) {
					scope.$watch( 'mathjax', function(val) {
						if (val) {
							$timeout(function() { MathJax.Hub.Queue(["Typeset",MathJax.Hub, element[0]]); }, 200);
						}
					}, true);
				}

			}
		}
	}



/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/styles/normalize.css", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/styles/normalize.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}", ""]);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/styles/foundation.css", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/styles/foundation.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "meta.foundation-version {\n  font-family: \"/5.2.3/\"; }\n\nmeta.foundation-mq-small {\n  font-family: \"/only screen/\";\n  width: 0em; }\n\nmeta.foundation-mq-medium {\n  font-family: \"/only screen and (min-width:40.063em)/\";\n  width: 40.063em; }\n\nmeta.foundation-mq-large {\n  font-family: \"/only screen and (min-width:64.063em)/\";\n  width: 64.063em; }\n\nmeta.foundation-mq-xlarge {\n  font-family: \"/only screen and (min-width:90.063em)/\";\n  width: 90.063em; }\n\nmeta.foundation-mq-xxlarge {\n  font-family: \"/only screen and (min-width:120.063em)/\";\n  width: 120.063em; }\n\nmeta.foundation-data-attribute-namespace {\n  font-family: false; }\n\nhtml, body {\n  height: 100%; }\n\n*, *:before, *:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml, body {\n  font-size: 100%; }\n\nbody {\n  background: #fff;\n  color: #222;\n  padding: 0;\n  margin: 0;\n  font-family: \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  position: relative;\n  cursor: default; }\n\na:hover {\n  cursor: pointer; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\nimg {\n  -ms-interpolation-mode: bicubic; }\n\n#map_canvas img, #map_canvas embed, #map_canvas object, .map_canvas img, .map_canvas embed, .map_canvas object {\n  max-width: none !important; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n.clearfix:after {\n  clear: both; }\n\n.hide {\n  display: none; }\n\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px; }\n\nselect {\n  width: 100%; }\n\n.row {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 62.5rem; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n  .row.collapse > .column, .row.collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row .row {\n    width: auto;\n    margin-left: -0.9375rem;\n    margin-right: -0.9375rem;\n    margin-top: 0;\n    margin-bottom: 0;\n    max-width: none; }\n    .row .row:before, .row .row:after {\n      content: \" \";\n      display: table; }\n    .row .row:after {\n      clear: both; }\n    .row .row.collapse {\n      width: auto;\n      margin: 0;\n      max-width: none; }\n      .row .row.collapse:before, .row .row.collapse:after {\n        content: \" \";\n        display: table; }\n      .row .row.collapse:after {\n        clear: both; }\n\n.column, .columns {\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n  width: 100%;\n  float: left; }\n\n[class*=\"column\"] + [class*=\"column\"]:last-child {\n  float: right; }\n\n[class*=\"column\"] + [class*=\"column\"].end {\n  float: left; }\n\n@media only screen {\n  .small-push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n  .small-pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n  .small-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .small-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .small-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .small-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .small-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .small-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .small-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .small-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .small-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .small-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .small-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .small-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .small-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .small-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .small-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .small-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .small-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .small-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .small-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .small-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .small-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .small-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column, .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .small-1 {\n    width: 8.33333%; }\n  .small-2 {\n    width: 16.66667%; }\n  .small-3 {\n    width: 25%; }\n  .small-4 {\n    width: 33.33333%; }\n  .small-5 {\n    width: 41.66667%; }\n  .small-6 {\n    width: 50%; }\n  .small-7 {\n    width: 58.33333%; }\n  .small-8 {\n    width: 66.66667%; }\n  .small-9 {\n    width: 75%; }\n  .small-10 {\n    width: 83.33333%; }\n  .small-11 {\n    width: 91.66667%; }\n  .small-12 {\n    width: 100%; }\n  .small-offset-0 {\n    margin-left: 0% !important; }\n  .small-offset-1 {\n    margin-left: 8.33333% !important; }\n  .small-offset-2 {\n    margin-left: 16.66667% !important; }\n  .small-offset-3 {\n    margin-left: 25% !important; }\n  .small-offset-4 {\n    margin-left: 33.33333% !important; }\n  .small-offset-5 {\n    margin-left: 41.66667% !important; }\n  .small-offset-6 {\n    margin-left: 50% !important; }\n  .small-offset-7 {\n    margin-left: 58.33333% !important; }\n  .small-offset-8 {\n    margin-left: 66.66667% !important; }\n  .small-offset-9 {\n    margin-left: 75% !important; }\n  .small-offset-10 {\n    margin-left: 83.33333% !important; }\n  .small-offset-11 {\n    margin-left: 91.66667% !important; }\n  .small-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n  .column.small-centered, .columns.small-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.small-uncentered, .columns.small-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n  .column.small-centered:last-child, .columns.small-centered:last-child {\n    float: none; }\n  .column.small-uncentered:last-child, .columns.small-uncentered:last-child {\n    float: left; }\n  .column.small-uncentered.opposite, .columns.small-uncentered.opposite {\n    float: right; } }\n\n@media only screen and (min-width:40.063em) {\n  .medium-push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n  .medium-pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n  .medium-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .medium-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .medium-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .medium-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .medium-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .medium-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .medium-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .medium-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .medium-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .medium-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .medium-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .medium-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .medium-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .medium-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .medium-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .medium-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .medium-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .medium-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .medium-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .medium-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .medium-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .medium-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column, .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .medium-1 {\n    width: 8.33333%; }\n  .medium-2 {\n    width: 16.66667%; }\n  .medium-3 {\n    width: 25%; }\n  .medium-4 {\n    width: 33.33333%; }\n  .medium-5 {\n    width: 41.66667%; }\n  .medium-6 {\n    width: 50%; }\n  .medium-7 {\n    width: 58.33333%; }\n  .medium-8 {\n    width: 66.66667%; }\n  .medium-9 {\n    width: 75%; }\n  .medium-10 {\n    width: 83.33333%; }\n  .medium-11 {\n    width: 91.66667%; }\n  .medium-12 {\n    width: 100%; }\n  .medium-offset-0 {\n    margin-left: 0% !important; }\n  .medium-offset-1 {\n    margin-left: 8.33333% !important; }\n  .medium-offset-2 {\n    margin-left: 16.66667% !important; }\n  .medium-offset-3 {\n    margin-left: 25% !important; }\n  .medium-offset-4 {\n    margin-left: 33.33333% !important; }\n  .medium-offset-5 {\n    margin-left: 41.66667% !important; }\n  .medium-offset-6 {\n    margin-left: 50% !important; }\n  .medium-offset-7 {\n    margin-left: 58.33333% !important; }\n  .medium-offset-8 {\n    margin-left: 66.66667% !important; }\n  .medium-offset-9 {\n    margin-left: 75% !important; }\n  .medium-offset-10 {\n    margin-left: 83.33333% !important; }\n  .medium-offset-11 {\n    margin-left: 91.66667% !important; }\n  .medium-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n  .column.medium-centered, .columns.medium-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.medium-uncentered, .columns.medium-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n  .column.medium-centered:last-child, .columns.medium-centered:last-child {\n    float: none; }\n  .column.medium-uncentered:last-child, .columns.medium-uncentered:last-child {\n    float: left; }\n  .column.medium-uncentered.opposite, .columns.medium-uncentered.opposite {\n    float: right; }\n  .push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n  .pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n\n@media only screen and (min-width:64.063em) {\n  .large-push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n  .large-pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n  .large-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .large-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .large-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .large-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .large-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .large-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .large-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .large-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .large-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .large-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .large-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .large-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .large-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .large-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .large-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .large-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .large-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .large-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .large-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .large-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .large-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .large-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column, .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .large-1 {\n    width: 8.33333%; }\n  .large-2 {\n    width: 16.66667%; }\n  .large-3 {\n    width: 25%; }\n  .large-4 {\n    width: 33.33333%; }\n  .large-5 {\n    width: 41.66667%; }\n  .large-6 {\n    width: 50%; }\n  .large-7 {\n    width: 58.33333%; }\n  .large-8 {\n    width: 66.66667%; }\n  .large-9 {\n    width: 75%; }\n  .large-10 {\n    width: 83.33333%; }\n  .large-11 {\n    width: 91.66667%; }\n  .large-12 {\n    width: 100%; }\n  .large-offset-0 {\n    margin-left: 0% !important; }\n  .large-offset-1 {\n    margin-left: 8.33333% !important; }\n  .large-offset-2 {\n    margin-left: 16.66667% !important; }\n  .large-offset-3 {\n    margin-left: 25% !important; }\n  .large-offset-4 {\n    margin-left: 33.33333% !important; }\n  .large-offset-5 {\n    margin-left: 41.66667% !important; }\n  .large-offset-6 {\n    margin-left: 50% !important; }\n  .large-offset-7 {\n    margin-left: 58.33333% !important; }\n  .large-offset-8 {\n    margin-left: 66.66667% !important; }\n  .large-offset-9 {\n    margin-left: 75% !important; }\n  .large-offset-10 {\n    margin-left: 83.33333% !important; }\n  .large-offset-11 {\n    margin-left: 91.66667% !important; }\n  .large-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n  .column.large-centered, .columns.large-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.large-uncentered, .columns.large-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n  .column.large-centered:last-child, .columns.large-centered:last-child {\n    float: none; }\n  .column.large-uncentered:last-child, .columns.large-uncentered:last-child {\n    float: left; }\n  .column.large-uncentered.opposite, .columns.large-uncentered.opposite {\n    float: right; }\n  .push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n  .pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n\n", ""]);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/styles/components.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/styles/components.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "html {\n  font-size: 100%; }\n\nbody {\n  background: #fdfcf9;\n  background-image: url(\"https://res.cloudinary.com/crosslinks/image/upload/graphy.v2.png\");\n  color: #3f474e;\n  font-size: 1rem;\n  font-family: sans-serif;\n  text-rendering: optimizeLegibility; }\n\n.wf-loading * {\n  font-family: sans-serif;\n  font-weight: 300 !important; }\n\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\n  display: none !important; }\n\n.page-body {\n  display: -webkit-box;\n  /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;\n  /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;\n  /* TWEENER - IE 10 */\n  display: -webkit-flex;\n  /* NEW - Chrome */\n  display: flex;\n  padding-top: 2em;\n  padding-left: 0;\n  padding-right: 0; }\n  @media all and (min-width: 1085px) {\n    .page-body {\n      padding-top: 0;\n      padding-left: .75em;\n      padding-right: .75em;\n      justify-content: center;\n      -webkit-justify-content: center;\n      /* Safari 6.1+ */ } }\n\n.main-pane {\n  width: 100%;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  background-color: #feffff; }\n  @media all and (min-width: 1085px) {\n    .main-pane {\n      width: 865px;\n      padding-left: 2%;\n      padding-right: 2%; } }\n  @media all and (max-width: 1085px) {\n    .main-pane {\n      width: 100%;\n      padding-left: .3em;\n      padding-right: .3em; } }\n\n.five-section-heading {\n  position: relative;\n  margin-bottom: 1.100em;\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecee; }\n\n.five-section-heading__heading {\n  margin-bottom: 0; }\n\n.link-with-favicon {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5em; }\n\n.link-with-favicon__favicon {\n  flex-shrink: 0;\n  width: 25px;\n  height: 25px;\n  margin-right: .4em; }\n\n.link-with-favicon__link {\n  line-height: 1.3em;\n  padding-top: .1em;\n  padding-bottom: .1em; }\n\nfooter {\n  width: 100%;\n  max-width: 1085px;\n  display: block;\n  margin: 0 auto;\n  border-top: 1px solid #F2F0E6;\n  background-color: rgba(253, 251, 246, 0.5);\n  padding: 1.5rem 1em; }\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  font-weight: 500;\n  font-family: sans-serif; }\n\nh3, h4, h5, h6, .h3, .h4, .h5, .h6 {\n  font-weight: 600; }\n\np, label, .normal, .p {\n  font-size: 1rem;\n  line-height: 1.5em;\n  margin-top: 0;\n  margin-bottom: 1.5em; }\n\n.small {\n  font-size: 0.8125rem;\n  /* 13px */\n  line-height: 1.8462em;\n  /* 24px */\n  margin-bottom: 1.8462em; }\n\n.large {\n  font-size: 1.2500rem;\n  /* 20px */\n  line-height: 1.2000em;\n  /* 24px */\n  margin-top: 1.2000em;\n  margin-bottom: 1.2000em; }\n\nh6, .h6 {\n  font-size: 1.2500rem;\n  /* 20px */\n  line-height: 1.2000em;\n  /* 24px */\n  margin-top: 0;\n  margin-bottom: 1.2000em; }\n\nh6.heading--bordered {\n  line-height: 1.4em;\n  margin-bottom: 1em;\n  border-bottom: 1px solid #eaecee; }\n\nh6.heading--bordered.small {\n  line-height: 2.33em;\n  border-bottom: 1px solid #eaecee; }\n\nh5, .h5 {\n  font-size: 1.5625rem;\n  /* 25px */\n  line-height: 1.9200em;\n  /* 48px */\n  margin-top: 0;\n  margin-bottom: 0.9600em; }\n\nh5.heading--bordered {\n  font-size: 1.5625rem;\n  /* 25px */\n  line-height: 1.9200em;\n  /* 48px */\n  margin-top: 0;\n  margin-bottom: 0.9200em;\n  border-bottom: 1px solid #eaecee; }\n\nh4, .h4 {\n  font-size: 1.9375rem;\n  /* 31px */\n  line-height: 1.5484em;\n  /* 48px */\n  margin-top: 0;\n  margin-bottom: 0.7742em; }\n\nh4.heading--bordered {\n  line-height: 1.4784em;\n  border-bottom: 1px solid #eaecee; }\n\nh3, .h3 {\n  font-size: 1.9375rem;\n  /* 31px */\n  line-height: 1.5484em;\n  /* 48px */\n  margin-top: 0;\n  margin-bottom: 0.7742em; }\n\nh2, .h2 {\n  font-size: 2.4375rem;\n  /* 39px */\n  line-height: 1.2308em;\n  /* 48px */\n  margin-top: 0.6154em;\n  margin-bottom: 0.6154em; }\n\nh2.heading--bordered {\n  line-height: 1.22em;\n  /* 48px */\n  border-bottom: 1px solid #eaecee; }\n\nh1 {\n  font-size: 3.8125rem;\n  /* 61px */\n  line-height: 1.1803em;\n  /* 72px */\n  margin-top: 0.3934em;\n  margin-bottom: 0.3934em; }\n\nul, ol {\n  margin: 0; }\n\na, .link {\n  cursor: pointer;\n  color: #A31F34;\n  text-decoration: none;\n  line-height: 1.3em; }\n\n.anchor-link, .anchor-link:hover {\n  cursor: default;\n  color: inherit;\n  line-height: inherit;\n  text-decoration: none; }\n\na.small {\n  line-height: 1.2em; }\n\na:hover, a:visited:hover {\n  color: #C03C50;\n  text-decoration: underline; }\n\na:visited {\n  color: #811864; }\n\na:focus {\n  outline: none; }\n\ni, .italic {\n  font-style: italic; }\n\n.muted {\n  color: #62717D; }\n\n.muted-tint-1 {\n  color: #85939f; }\n\n.emphasis {\n  color: #A31F34;\n  color: #8A8B8C;\n  color: #C03C50; }\n\n.warning {\n  color: #C03C50; }\n\n.bold, .warning {\n  font-weight: 600; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.margin--bottom {\n  margin-bottom: 1.5em; }\n\n.no-margin--bottom {\n  margin-bottom: 0; }\n\n.no-padding--right {\n  padding-right: 0; }\n\n.flex-container {\n  display: -webkit-box;\n  /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;\n  /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;\n  /* TWEENER - IE 10 */\n  display: -webkit-flex;\n  /* NEW - Chrome */\n  display: flex; }\n\ninput, textarea {\n  box-sizing: border-box !important;\n  font-size: 1rem;\n  line-height: 1.5em;\n  padding-top: .33em;\n  padding-bottom: .33em;\n  margin-bottom: .84em;\n  box-shadow: none;\n  font-family: sans-serif;\n  width: 100%;\n  background: transparent;\n  border-top: 0;\n  border-right: 0;\n  border-bottom: 1px dotted #C2C0BF;\n  border-left: 0;\n  transition: border-color .3s ease; }\n\ntextarea {\n  border: 1px dotted #C2C0BF;\n  min-height: 3rem; }\n\ninput:focus, textarea:focus {\n  outline: none;\n  border-color: rgba(163, 31, 52, 0.75); }\n\n*::-webkit-input-placeholder {\n  font-family: sans-serif;\n  font-style: italic;\n  color: #3f474e;\n  line-height: 1.5em;\n  opacity: .5; }\n\n.button {\n  position: relative;\n  font-family: sans-serif;\n  color: #3f474e;\n  display: block;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  width: 100%;\n  min-width: 33px !important;\n  box-shadow: 0 1px 1px 1px rgba(51, 51, 51, 0.3);\n  font-size: 1em;\n  line-height: 1.5em;\n  cursor: pointer;\n  padding-top: .45em;\n  padding-bottom: .3em;\n  padding-left: .9375em;\n  padding-right: .9375em;\n  margin-bottom: .75em;\n  text-transform: uppercase; }\n\n.button:focus {\n  outline: none; }\n\n.button--flat {\n  border: 1px solid #A31F34;\n  border-radius: 3px;\n  text-transform: none;\n  box-shadow: none;\n  background: none;\n  color: #A31F34; }\n\n.button--flat:hover {\n  box-shadow: none;\n  background: #A31F34;\n  color: #fff; }\n\n.button--default {\n  background: #FdFbF6;\n  border-color: rgba(221, 221, 221, 0.5); }\n\n.button--default:hover {\n  background: #FeFeF9; }\n\n.button--warning {\n  background: #A31F34;\n  color: #fff;\n  border-color: rgba(163, 31, 52, 0.5); }\n\n.button--warning:hover {\n  background: #C03C50;\n  color: #fff; }\n\n.button.disabled, .button.disabled:hover, .button[disabled], .button[disabled]:hover {\n  box-shadow: none !important;\n  border: none !important;\n  color: #62717D !important;\n  background-color: transparent !important;\n  cursor: default !important; }\n\n.button:before {\n  content: '';\n  position: absolute;\n  top: 0rem;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 0;\n  transition: width 11s ease-in-out; }\n\n.button.js-success:before {\n  transition: none; }\n\n.button.js-success:after {\n  content: '\\02713';\n  padding-left: 1em; }\n\n.button.js-in-progress:before {\n  width: 100%; }\n\n.js-in-progress.button--fast:before {\n  transition: width 1s ease-in-out; }\n\n.button-toggle-bar {\n  width: 100%;\n  display: flex; }\n\n.button-toggle-bar .button {\n  border-top: 1px solid #FdFbF6;\n  border-bottom: 1px solid #FdFbF6;\n  border-left: 1px solid #FdFbF6;\n  border-right: 1px solid #FdFbF6;\n  box-shadow: 0px 0px 3px rgba(58, 59, 60, 0.8); }\n\n.button-toggle-bar .button:first-child {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-right: none; }\n\n.button-toggle-bar .button:last-child {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n.button-toggle-bar .button.js-is-toggled {\n  box-shadow: inset 0 0 7px rgba(58, 59, 60, 0.8) !important;\n  background: #A31F34;\n  color: #fff; }\n\n.animation--pulse {\n  -webkit-animation: pulse 2s ease-in-out infinite;\n  -moz-animation: pulse 2s ease-in-out infinite;\n  animation: pulse 2s ease-in-out infinite; }\n\n@-webkit-keyframes pulse {\n  0% {\n    opacity: .5; }\n  100% {\n    opacity: .9; } }\n\n@-moz-keyframes pulse {\n  0% {\n    opacity: .5; }\n  100% {\n    opacity: .9; } }\n\n.animation--pulse.ng-hide-add-active {\n  display: none !important;\n  animation: none;\n  transition: none; }\n\n.animation--fade.ng-hide-remove {\n  transition: opacity .5s ease-in-out;\n  opacity: 0;\n  display: block !important; }\n\n.animation--fade.ng-hide-remove.ng-hide-remove-active {\n  opacity: 1; }\n\n.animation--fade.ng-hide-add {\n  transition: opacity .3s ease-in-out;\n  opacity: 1;\n  display: block !important; }\n\n.animation--fade.ng-hide-add.ng-hide-add-active {\n  opacity: 0; }\n\n.animation--enter-from-bottom.ng-hide-remove, .animation--enter-from-bottom.ng-enter {\n  animation: enter-from-bottom .3s ease-in-out;\n  opacity: 1; }\n\n@-webkit-keyframes enter-from-bottom {\n  0% {\n    transform: translateY(3em);\n    opacity: 0; }\n  80% {\n    opacity: 1; }\n  100% {\n    transform: translateY(0px); } }\n\n@-moz-keyframes enter-from-bottom {\n  0% {\n    transform: translateY(3em);\n    opacity: 0; }\n  80% {\n    opacity: 1; }\n  100% {\n    transform: translateY(0px); } }\n\n.animation--exit-to-left.ng-hide-add, .animation--exit-to-left.ng-leave {\n  animation: exit-to-left .3s ease-in-out;\n  opacity: 1; }\n\n@-webkit-keyframes exit-to-left {\n  35% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-70px);\n    opacity: 0; } }\n\n@-moz-keyframes exit-to-left {\n  35% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-70px);\n    opacity: 0; } }\n", ""]);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mainController = __webpack_require__(50);

	__webpack_require__(51);
	__webpack_require__(52);

	__webpack_require__(54);
	__webpack_require__(57);
	__webpack_require__(64);
	__webpack_require__(30);
	__webpack_require__(69);


	module.exports = angular.module('cl3.main', [
		'cl3.common.models.logging',
		'cl3.common.models.topicRepository',

		'cl3.common.components.loadingText',
		'cl3.common.components.logEntry',

		'cl3.common.components.visualization.globalVis',
	])
	.controller( 'MainController', ['$scope', '$stateParams', '$q', 'LogRepository', 'TopicRepository', '$state', mainController ]);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function MainController($scope, $stateParams, $q, LogRepository, TopicRepository, $state) {

		LogRepository.getHistories(40)
		.then( function(res) {
			$scope.isHistoryLoaded = true;
			$scope.recentEdits = _.uniq( _.filter(res, function(item) { return item.current && item.action != 'create'; }), 'resourceId');
		});

		$q.all([ TopicRepository.getTopics(), TopicRepository.getRelationships() ])
		.then( function(res) {
			$scope.topics = res[0];
			var nodes = _.filter(res[0], function(topic) {
				var subjects = _.pluck(topic.subject, 'number');
				return _.some(subjects, function(number) {
					return subjects.indexOf(number) > -1;
				});
			});
			$scope.nodes = nodes;
			$scope.links = res[1];
		});

		$scope.go = function(topic) {
			$state.go('topic-read', {topicIdentifier: topic.getIdentifier()});
		}

	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 51 */
/***/ function(module, exports) {

	var v1="<section class=\"main\"> <div class=\"row main__hero\"> <div class=\"small-12 medium-6 large-8 columns greeting-wrapper\"> <div class=\"greeting-logo\"></div> <h1 class=\"greeting\"> <span class=\"crosslinks-name\">MIT Crosslinks</span></h1> <p class=\"tagline\"> The MIT study site.<br> Authored by MIT students, for MIT students. </p> </div> </div> <div class=\"row\"> <div class=\"small-12 columns\"> <p class=\"main__lead\">Trying to figure something out? MIT students help you out: </p> <ul class=\"main__lead-list flex-container\"> <li class=\"main__lead-list__item\"><a ui-sref=\"topic-list({query: 'subject18.01'})\">18.01</a></li> <li class=\"main__lead-list__item\"><a ui-sref=\"topic-list({query: 'subject18.02'})\">18.02</a></li> <li class=\"main__lead-list__item\"><a ui-sref=\"topic-list({query: 'subject18.03'})\">18.03</a></li> <li class=\"main__lead-list__item\"><a ui-sref=\"topic-list({query: 'subject8.01'})\">8.01</a></li> <li class=\"main__lead-list__item\"><a ui-sref=\"topic-list({query: 'subject7.013'})\">7.01</a></li> <li class=\"main__lead-list__item\"><a ui-sref=\"topic-list({query: 'subject6.01'})\">6.01</a></li> <li class=\"main__lead-list__item\"><a ui-sref=\"topic-list\">and more...</a></li> </ul> </div> </div> <div class=\"row\"> <div class=\"small-12 columns\"> <global-vis on-hover=\"currentTopic\" nodes=\"nodes\" edges=\"links\"></global-vis> </div> </div> <div class=\"row\"> <div class=\"small-12 medium-7 columns\"> <div class=\"main__box\"> <h6 class=\"heading--bordered\">News Bulletin</h6> <p> News here. </p> </div> </div> <div class=\"small-12 medium-5 columns\"> <div class=\"main__box\"> <h6 class=\"heading--bordered\">Recently Edited Topics</h6> <loading-text ng-show=\"!isHistoryLoaded\"></loading-text> <ul class=\"recent-edit-list\"> <li ng-repeat=\"entry in ::recentEdits | limitTo: 4\"><log-info entry=\"entry\"></log-info></li> </ul> </div> </div> </div> </section>";
	angular.module(["ng"]).run(["$templateCache",function(c){c.put("main.html", v1)}]);
	module.exports=v1;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/main/main.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/main/main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".mit-logo {\n  margin-bottom: 1.5em; }\n\n.main__hero {\n  border-top: 3px solid #A31F34;\n  margin-bottom: 1.5em; }\n\n.main__box {\n  border: 1px solid #A31F34;\n  padding: .75em 1em;\n  margin-bottom: 1.5em; }\n\n.main .greeting-wrapper {\n  position: relative; }\n\n.main .greeting-logo {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  opacity: .1;\n  background-image: url(\"https://res.cloudinary.com/crosslinks/image/upload/crosslinks_logo_no-text.png\");\n  background-repeat: no-repeat;\n  background-position-y: 60%; }\n\n.main .mit-logo {\n  float: right;\n  margin-top: 1.5em; }\n\n.main .greeting {\n  font-weight: 700;\n  font-size: 1.5625rem;\n  /* 25px */\n  line-height: 1.9200em;\n  /* 48px */\n  margin-top: .96em;\n  margin-bottom: 0.9600em; }\n  @media all and (min-width: 600px) and (max-width: 1085px) {\n    .main .greeting {\n      font-size: 1.5625rem;\n      /* 25px */\n      line-height: 1.9200em;\n      /* 48px */\n      margin-top: 0.9600em;\n      margin-bottom: 0.9600em; } }\n  @media all and (min-width: 1085px) {\n    .main .greeting {\n      font-size: 3.0625rem;\n      /* 49px */\n      line-height: 1.4694em;\n      /* 72px */\n      margin-top: 0.4898em;\n      margin-bottom: 0.4898em; } }\n\n.main .lead {\n  margin-top: 1.5em; }\n\n.main .tagline {\n  font-style: italic;\n  font-weight: 600; }\n\n.main__search-wrapper {\n  margin-top: 9em;\n  margin-bottom: 9em; }\n\n.main__lead {\n  font-style: italic; }\n\n.main__lead-list {\n  flex-wrap: wrap;\n  -webkit-flex-flow: row wrap; }\n\n.main__lead-list__item {\n  margin-bottom: 1.5em;\n  margin-right: 4em; }\n\n.user-list, .recent-edit-list {\n  list-style: none;\n  padding-left: 0; }\n\n.user-list {\n  flex-wrap: wrap;\n  -webkit-flex-flow: row wrap; }\n\n.subscribe-box {\n  background: #F2F0E6;\n  box-shadow: 0 0 2px 1px rgba(85, 85, 85, 0.6);\n  padding: .75em 1.5em .75em 1em;\n  margin-bottom: 1.5em; }\n\n.main .global-vis {\n  min-height: 450px;\n  margin-bottom: 1.5em;\n  border: 1px solid #ccc; }\n", ""]);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(55);
	__webpack_require__(56);

	module.exports = angular.module('cl3.common.components.loadingText', [])
	.directive( 'loadingText', directive)


/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'loadingText.html',
			scope: {
				show: '='
			},
			link: function(scope, element, attrs, controller, transclude) {}
		}
	}


/***/ },
/* 56 */
/***/ function(module, exports) {

	var v1="<p class=\"small animation--pulse\">Loading...</p>";
	angular.module(["ng"]).run(["$templateCache",function(c){c.put("loadingText.html", v1)}]);
	module.exports=v1;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	
	var logEntryDirective = __webpack_require__(58);
	var logInfoDirective = __webpack_require__(60);
	__webpack_require__(62);

	module.exports = angular.module('cl3.common.components.logEntry', [])
	.directive( 'logEntry', logEntryDirective)
	.directive( 'logInfo', logInfoDirective)


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(59),
			scope: {
				entry: '='
			}, 
			link: function(scope, element, attrs, controller, transclude) {}
		}
	}


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\t<p>\n\t\t<a class=\"topic-name\" ui-sref=\"topic-read({topicIdentifier: entry.alias})\"  ng-bind=\"entry.displayName\"></a>\n\n\t\t<span class=\"\" ng-if=\"entry.action =='delete'\">deleted </span>\n\t\t<span class=\"\" ng-if=\"entry.action =='create' || entry.action == 'add'\">created </span>\n\t\t<span class=\"\">by</span>\n\t\t<span class=\"bold\" ng-bind=\"entry.agentId\"></span>\n\t\t<span class=\"\">on</span>\n\t\t<span class=\"bold\" ng-bind=\"entry.timestamp | date: 'MMM d, y' \"></span>\n\t\t<span class=\"\">at</span>\n\t\t<span class=\"bold\" ng-bind=\"entry.timestamp | date: 'h:mma' \"></span>\n\t</p>\n\n\t<div ng-if=\"entry.property == 'displayName' || entry.property == 'description'\">\n\t\t<section class=\"current\">\n\t\t\t<p class=\"property-title\">Current <span class=\"property-name\" ng-bind=\"entry.property\"></span> </p>\t\n\t\t\t<p class=\"property-value\" mathjax=\"entry.current\" ng-bind=\"entry.current\"></p>\n\t\t</section>\n\t\t<section class=\"previous\">\n\t\t\t<p class=\"property-title\">Previous <span class=\"property-name\" ng-bind=\"entry.property\"></span></p>\t\n\t\t\t<p class=\"property-value\" mathjax=\"entry.previous\" ng-bind=\"entry.previous\"></p>\n\t\t</section>\n\t</div>\n\n\t<div ng-if=\"entry.property == 'prepare' || entry.property == 'relate' || entry.property == 'advance' \">\n\t\t<section class=\"current\">\n\t\t\t<p class=\"property-title\">Current <span class=\"property-name\" ng-bind=\"entry.property\"></span></p>\t\n\t\t\t<ol>\n\t\t\t\t<li ng-repeat=\"item in ::entry.current\">\n\t\t\t\t\t<p class=\"property-value\" ng-bind=\"::item.displayName\"></p>\n\t\t\t\t</li>\n\t\t\t</ol>\t\n\t\t</section>\n\t\t<section class=\"previous\">\n\t\t\t<p class=\"property-title\">Previous <span class=\"property-name\" ng-bind=\"entry.property\"></span></p>\t\n\t\t\t<ol>\t\n\t\t\t\t<li ng-repeat=\"item in ::entry.previous\">\n\t\t\t\t\t<p class=\"property-value\" ng-bind=\"::item.displayName\"></p>\n\t\t\t\t</li>\n\t\t\t</ol>\t\n\t\t</section>\n\t</div>\n\n\t<div ng-if=\"entry.property == 'learn' || entry.property == 'apply' || entry.property == 'reference'\">\n\t\t<section class=\"current\">\n\t\t\t<p class=\"property-title\">Current <span class=\"property-name\" ng-bind=\"entry.property\"></span></p>\t\n\t\t\t<ol>\n\t\t\t\t<li ng-repeat=\"item in ::entry.current\">\n\t\t\t\t\t<p class=\"property-value\" ng-bind=\"::item.displayName\"></p>\n\t\t\t\t\t<p class=\"property-value\" ng-bind=\"::item.url\"></p>\n\t\t\t\t</li>\n\t\t\t</ol>\t\n\t\t</section>\n\t\t<section class=\"previous\">\n\t\t\t<p class=\"property-title\">Previous <span class=\"property-name\" ng-bind=\"entry.property\"></span></p>\t\n\t\t\t<ol>\t\n\t\t\t\t<li ng-repeat=\"item in ::entry.previous\">\n\t\t\t\t\t<p class=\"property-value\" ng-bind=\"::item.displayName\"></p>\n\t\t\t\t\t<p class=\"property-value\" ng-bind=\"::item.url\"></p>\n\t\t\t\t</li>\n\t\t\t</ol>\t\n\t\t</section>\n\t</div>\n\n\t<div ng-if=\"entry.property == 'subject'\">\n\t\t<section class=\"current\">\n\t\t\t<p class=\"property-title\">Current <span class=\"property-name\" ng-bind=\"entry.property\"></span></p>\t\n\t\t\t<ol>\n\t\t\t\t<li ng-repeat=\"item in ::entry.current\">\n\t\t\t\t\t<p class=\"property-value\" ng-bind=\"::item.number\"></p>\n\t\t\t\t</li>\n\t\t\t</ol>\t\n\t\t</section>\n\t\t<section class=\"previous\">\n\t\t\t<p class=\"property-title\">Previous <span class=\"property-name\" ng-bind=\"entry.property\"></span></p>\t\n\t\t\t<ol>\t\n\t\t\t\t<li ng-repeat=\"item in ::entry.previous\">\n\t\t\t\t\t<p class=\"property-value\" ng-bind=\"::item.number\"></p>\n\t\t\t\t</li>\n\t\t\t</ol>\t\n\t\t</section>\n\t</div>\n";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(61),
			scope: {
				entry: '='
			}, 
			link: function(scope, element, attrs, controller) {
			}
		}
	}


/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<div class=\"log-entry\">\n\t<p>\n\t\t<a class=\"topic-name\" ui-sref=\"topic-read({topicIdentifier: entry.alias})\" ng-bind=\"entry.displayName\"></a>\n\n\t\t<span class=\"\" ng-if=\"entry.action =='delete'\">deleted </span>\n\t\t<span class=\"\" ng-if=\"entry.action =='create' || entry.action == 'add'\">created </span>\n<!--\n\t\t<span class=\"\">by</span>\n\t\t<span class=\"bold\" ng-bind=\"entry.agentId\"></span>\n-->\n\t\t<span class=\"\">on</span>\n\t\t<span class=\"bold\" ng-bind=\"entry.timestamp | date: 'MMM d' \"></span>\n<!--\n\t\t<span class=\"\">at</span>\n\t\t<span class=\"bold\" ng-bind=\"entry.timestamp | date: 'h:mma' \"></span>\n-->\n\t</p>\n</div>\n\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/log-entry/logEntry.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/log-entry/logEntry.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "a.disabled {\n  color: #3f474e;\n  pointer-events: none; }\n\n.current, .previous {\n  overflow-wrap: break-word;\n  font-size: 0.8125rem;\n  padding-left: 1em;\n  padding-top: .82em;\n  padding-bottom: .82em;\n  background: #F2F0E6;\n  margin-bottom: 1.5em; }\n\n.property-title {\n  font-size: 0.8125rem;\n  color: #5a5b5c; }\n\n.property-name {\n  text-transform: uppercase; }\n\n.property-value {\n  font-size: 0.8125rem;\n  line-height: 1.8462em;\n  /* 24px */\n  list-style: none;\n  text-align: left;\n  font-style: italic;\n  margin-bottom: 0; }\n", ""]);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var logEntry = __webpack_require__(65);
	var logger = __webpack_require__(66);
	var logRepository = __webpack_require__(67);

	var differ = __webpack_require__(68);


	module.exports = angular.module( 'cl3.common.models.logging', [])
	.factory( 'LogEntry', ['Alias', logEntry])

	.service( 'Logger', ['$http', logger])
	.service( 'LogRepository', ['$http', '$q', 'LogEntry', logRepository])
	.service( 'Differ', differ)


/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function LogEntryFactory(Alias) {

		function LogEntry(data) {
			if (data) {
					this.id = data.id;
					this.alias = Alias.createAlias(data.displayName.text);
					this.displayName = data.displayName.text;
					this.agentId = data.agentId.split('%3A')[1].split('%40')[0] || '';
					this.agentId = this.agentId.toLowerCase();
					this.resourceId = data.resourceId;
					this.action = data.description.text.split(' ')[0];
					this.property = data.description.text.split(' ')[1];
					this.timestamp = data.timestamp;
					this.priorityTypeId = data.priorityTypeId;
					this.genusTypeId = data.genusTypeId;
				try {
					if (data.recordProperties[0] && data.recordProperties[0].value) {
						this.previous = angular.fromJson(data.recordProperties[0].value);
					} else {
						this.previous = null;
					}
					if (data.recordProperties[1] && data.recordProperties[1].value) {
						this.current = angular.fromJson(data.recordProperties[1].value);
					} else {
						this.current = null;
					}
				} catch(e) {
					console.error('cannot convert from Json in LogEntry', data);
				}
			}
		}

		return {
			createLogEntry: function(data) {
				return new LogEntry(data);
			}
		}
		
	}



/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function Logger($http) {

		var log_endpoint = '/handcar/services/logging/logs/mc3-log%3A2%40MIT-OEIT/logentries';

		// POSTs a log entry
		this.log = function(args) {
			var previousJson = angular.toJson(args.previous);
			var currentJson = angular.toJson(args.current);
		
			var packed = {
				genusTypeId: "mc3-logentry%3Amc3.logentry.info%40MIT-OEIT",
				priorityTypeId: 'mc3-log-entry-priority-type%3Amc3.logging.priority.4.info%40MIT-OEIT',
				agentId: args.agentId,
				resourceId: args.resourceId,
				displayName: {text: args.topicName},
				description: {text: args.action + " " + args.propertyName},
				recordProperties: [
					{ 
						displayName: {text: "previous"},
						value: previousJson
					},
					{ 
						displayName: {text: "current"},
						value: currentJson
					},
				]
			};

			return $http.post(log_endpoint, packed)
			.then( function(res) {
				return res.status;
			});  
			
		}


	}


/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function LogRepository($http, $q, LogEntry) {

		var log_endpoint = '/handcar/services/logging/logs/mc3-log%3A2%40MIT-OEIT/logentries';

		this.get = function(topicId) {
			return $http.get(log_endpoint + '?resourceid=' + topicId)
			.then( function(res) {
				return res.data.map(LogEntry.createLogEntry);
			});
		}

		this.getHistories = function(maxNumber) {
			var maxNumber = maxNumber || 2000;
			return $http.get(log_endpoint + '?maxvalues=' + maxNumber)
			.then( function(res) {
				return res.data.map(LogEntry.createLogEntry);
			});
		}

		// TODO: czarina -- refactor this into its own component called search-log
		this.searchLogEntries = function(array, query) {
			if (query) {
				query = query.toLowerCase();
				return array.filter( function(item) {
					var matchesUser = item.agentId.toLowerCase().indexOf(query) > -1;
					return matchesUser;
				});
			} 
			return array;
		}


	}


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(70);
	var service = __webpack_require__(72);
	var render = __webpack_require__(73);

	__webpack_require__(74);
	__webpack_require__(80);

	module.exports = angular.module('cl3.common.components.visualization.globalVis', [
		'cl3.common.components.visualization'	
	])
	.service( 'GlobalVis', ['Utils', 'TreeSearch', service])
	.service( 'GlobalVisRender', ['$timeout', 'Constants', 'Events', render])
	.directive( 'globalVis', ['$window', 'Utils', 'GlobalVis', 'GlobalVisRender', directive])


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function ($window, Utils, GlobalVis, GlobalVisRender) {
		return {
			restrict: 'E',
			template: __webpack_require__(71),
			scope: {
				nodes: '=',
				edges: '=',
				currentFocus: '='
			}, 
			link: function(scope, element, attrs, transclude) {

				var isMinWidth = function() {
					var minWidth = 800;
					return $window.innerWidth > minWidth || $window.clientWidth > minWidth;
				}

				Utils.loadD3()
				.then( function(res) {
					scope.isD3Loaded = true;
				});

				if (isMinWidth()) {
					scope.$watchGroup(['nodes', 'edges', 'isD3Loaded'], function(values) {

						if (values[0] && values[1] && values[2]) {
							GlobalVisRender.draw( GlobalVis.layout({
								nodes: values[0],
								edges: values[1],
							}));
						}
					});

					scope.$watch('currentFocus', function(val) {
						if (val) {
							console.log('updating vis with currentFocus:', scope.currentFocus);
							GlobalVisRender.update({
								nodes: scope.nodes,
								edges: scope.edges,
							});
						}
					}, true);

	/*
					scope.$watchCollection('nodes', function(val) {
						if (val && val.length > 0) {
							console.log('updating vis with new nodes:', scope.nodes);
							GlobalVisRender.exit({
								nodes: scope.nodes,
								edges: scope.edges,
							});
							GlobalVisRender.draw( GlobalVis.layout({
								nodes: scope.nodes,
								edges: scope.edges,
							}));
						}
					});
	*/
				}
			}
		}
	}


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\n\t<svg class=\"visualization global-vis\" id=\"global-vis\">\n\t\t<marker id=\"requisiteMarker\" viewBox=\"0 -5 10 10\" refX=\"40\" refY=\"0\" markerUnits=\"userSpaceOnUse\" orient=\"auto\" markerWidth=\"10\" markerHeight=\"9\" stroke=\"context-stroke\">\n\t\t\t<path class=\"marker-path\" d=\"M0,-5L10,0L0,5\" fill=\"#999\"></path> \n\t\t</marker>\n\t</svg>\n\t<loading-text class=\"loading-text--on-svg\" ng-show=\"!nodes || !edges || !isD3Loaded\"></loading-text>\n\t<div class=\"min-screen-message columns\">\n\t\t<p>Enlarge your browser window and refresh the page to see the visualization.</p>\t\n\t</div>\n";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function GlobalVisService(Utils, TreeSearch) {

		var kernel = function(x) {
			if (x <=5) return 4;
			if (x<=15) return 8;
			if (x<=50) return 15;
			return 27;
		}

		this.layout = function(data) {
			var svgEl = d3.select('#global-vis');

			data.nodes = _.map(data.nodes, function(d) {
				d.prepareChain = TreeSearch.getPrepareChain(d.id, data.edges);
				d.advanceChain = TreeSearch.getAdvanceChain(d.id, data.edges);
				d.numAdvance = d.advanceChain.nodesOnPath.length;
				d.radius = kernel(d.numAdvance);
				return d;	
			});

			data.edges = _.filter( data.edges, function(edge) {
				// this is not a mistake. we need to reverse this because of mc3's convention
				var doesSourceNodeExist = _.find(data.nodes, {'id': edge.destinationId});
				var doesTargetNodeExist = _.find(data.nodes, {'id': edge.sourceId});
				edge.source = doesSourceNodeExist;
				edge.target = doesTargetNodeExist;
				return doesSourceNodeExist && doesTargetNodeExist;
			});

			data.vis = svgEl;

			return data;	
		}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function RenderService($timeout, Constants, Events, TickWorker, TreeSearch) {

		var visWidth, visHeight, vis;
		var opts = {
			gravity: 0.2,
			linkStrength: 0.8,
			linkDistance: 60,
			charge: -200,
			chargeDistance: 270,
		};

		// this is called from the directive
		this.draw = function(data) {
			vis = data.vis;
			visWidth = vis.style('width').replace('px','');
			visHeight = vis.style('height').replace('px','');
	//		console.log('height of vis:', visHeight);
			opts = data.opts || opts;
			
			var force = d3.layout.force()
				.nodes(data.nodes)
				.links(data.edges)
				.gravity(opts.gravity)
				.linkStrength(opts.linkStrength)
				.linkDistance(opts.linkDistance)
				.charge(opts.charge)
				.chargeDistance(opts.chargeDistance)
				.friction(.95)
				.size([visWidth, visHeight])
				.start();

			var links = vis.selectAll("line")
				.data(data.edges)
				.enter()
				.append("line")
				.attr("class", "edge")
				.attr("marker-end", "url(#requisiteMarker)")
				.style("opacity", Constants.link.opacity.default)
				.style("stroke", Constants.link.stroke.default)
				.style("stroke-width", 1);


			var labelNodes = _.map(data.nodes, function(node) {
				return _.assign(node, {isDummy: true});
			});

			var combined = _.flatten([data.nodes, labelNodes]);

			var nodes = vis.selectAll("circle")
				.data(data.nodes)
				.enter()
				.append("circle")
				.attr("class", "node")
				.attr("r", function(d) { return d.radius; })
				.style("fill", function(d) { 
					d.fill = Constants.node.fill.default; 

					if (d.isInactive) {
						d.fill = Constants.node.fill.grayed; 
					} else if (d.isHighlight) {
						d.fill = Constants.node.fill.default; 
					}
					return d.fill;
				})
	/*
				.style("opacity", function(d) { 
					d.opacity = Constants.node.opacity.default; 
					if (d.isInactive) {
						d.opacity = Constants.node.opacity.inactive; 
					}
					return d.opacity;
				})
	*/
				.on("mouseenter", Events.mouseoverHandler)
				.on("mouseleave", Events.mouseoutHandler)
				.on("click", Events.clickHandler);

			var labels = vis.selectAll(".topic-label")
				.data(data.nodes)
				.enter()
				.append("text")
				.attr("class", "topic-label")
				.text( function(d) { return d.displayName; })
				.style("opacity", Constants.label.opacity.default)

			var n = 100;
			force.start();
			for (var i = n * n; i > 0; --i) force.tick();
			force.stop();

			links.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });

			nodes
			.attr("cx", function(d) { return d.x = Math.max(d.radius, Math.min(visWidth - d.radius, d.x)); })
			.attr("cy", function(d) { return d.y = Math.max(d.radius, Math.min(visHeight - d.radius, d.y)); });

			labels.attr("x", function(d) { return d.x + d.radius + 3; })
			.attr("y", function(d) { return d.y; });

			return true;
		}

		this.update = function(data) {
			var nodes = vis.selectAll("circle")
				.style("fill", function(d) { 
					if (d.isInactive) {
						d.fill = Constants.node.fill.grayed; 
					}
					if (d.isHighlight) {
						d.fill = Constants.node.fill.default; 
					}
					return d.fill;
				})
	/*
				.style("opacity", function(d) { 
					if (d.isInactive) {
						d.opacity = Constants.node.opacity.inactive; 
					}
					return d.opacity;
				});
	*/
		}

		this.exit = function(data) {
			var nodes = vis.selectAll("circle, line, text")
				.remove()

		}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var constants = __webpack_require__(75);
	var eventsService = __webpack_require__(76);
	var treeSearchService = __webpack_require__(77);

	__webpack_require__(78);

	module.exports = angular.module('cl3.common.components.visualization', [
	])
	.constant( 'Constants', constants)
	.factory( 'Events', ['$timeout', '$state', 'Constants', eventsService])
	.service( 'TreeSearch', treeSearchService)


/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		node: {
			radius: 4,
			opacity: {
				inactive: .25,
				default: .85,
				hover: 1
			},
			fill: {
				inactive: '#abacad',
				default: '#a31f34',
				hover: '#a31f34',
				highlight: '#233076',
				grayed: '#c9c9c9',
			}
		},
		link: {
			opacity: {
				inactive: .25,
				default: .25,
				hover: 1
			},
			stroke: {
				inactive: '#abacad',
				default: '#a31f34',
				hover: '#a31f34'
			}
		},
		label: {
			opacity: {
				default: 0,
				hover: 1
			},
		},
		colors: {
			'18': '#A31F34',
			'16': '#FFB03B',
			'2': '#B64926',
			'8': '#A76BFF',
			'6': '#FF23C9',
			'5': '#3C7489',
			'1': '#CCFF73',
			'7': '#83FF7D',
			'3': '#a586FF',
			'xxx': '#000000',
		}
	};


/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function EventsService($timeout, $state, Constants) {

		function Events() {}

		var isNodeOnPath = function(baseNode, nodeToCheck) {
			var isSameNode = (baseNode.id == nodeToCheck.id);
			if (isSameNode) return true;

			return baseNode.prepareChain.nodesOnPath.indexOf(nodeToCheck.id) > -1;
		}

		var isEdgeOnPath = function(baseNode, edgeToCheck) {
			if (edgeToCheck.linkType != 'requisite') return false;
			var flag = false;

			var source = edgeToCheck.source;
			var target = edgeToCheck.target;
			flag = baseNode.prepareChain.linksOnPath.indexOf(edgeToCheck.id) > - 1;
			return flag;
		}

		Events.mouseoverHandler = function(mouseoverData, i) {

			d3.selectAll('.topic-label')	
			.filter( function(d) {
				return isNodeOnPath(mouseoverData, d);
			})
			.transition().duration(300)
			.style("opacity", Constants.label.opacity.hover)

			// makes irrelevant nodes fade out
			d3.selectAll('.node')
			.filter( function(d) {
				return !isNodeOnPath(mouseoverData, d);
			})
			.style("fill", Constants.node.fill.inactive)
			.style("opacity", Constants.node.opacity.inactive)

			// makes irrelevant edges fade out
			d3.selectAll('.edge')
			.filter( function(d) {
				return !isEdgeOnPath(mouseoverData, d); 
			})
			.style("stroke", Constants.link.stroke.inactive)
			.style("opacity", Constants.link.opacity.inactive)

			// makes irrelevant edges fade in
			d3.selectAll('.edge')	
			.filter( function(d) {
				return isEdgeOnPath(mouseoverData, d); 
			})
			.style("stroke", Constants.link.stroke.hover)
			.style("opacity", 1)

			// fades in the relevant nodes
			d3.select('.node')
			.filter( function(d) {
				return isNodeOnPath(mouseoverData, d);
			})
			.style("opacity", 1)
		}

		Events.mouseoutHandler = function(mouseoutData, i) {

			d3.selectAll('.edge')	
			.style("opacity", Constants.link.opacity.default)

			d3.selectAll('.topic-label')	
			.transition().duration(200)
			.style("opacity", Constants.label.opacity.default)

			d3.selectAll('.node')
			.style("opacity", Constants.node.opacity.default)
			.style("fill", function(d) { return d.fill || Constants.node.fill.default; })

		}

		Events.clickHandler = function(d) {
			if (d3.event.defaultPrevented) return; // click suppressed
			
			$state.go('topic-read', {topicIdentifier: d.alias});	
		}

		return Events;
	}


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function TreeSearchService() {

		// note that sourceId and destinationId are counter-intuitive due to mc3 convention
		var getParents = function(nodeId, links_array) {
			return _.filter(links_array, function(link) {
				return link.sourceId == nodeId && link.linkType == 'requisite';
			});
		}

		this.getPrepareChain = function(startNodeId, links_array) {
	//		if (startNodeId.indexOf('3777') > -1 ) {console.log('hi'); debugger;}
			var linksOnPath = [];
			var nodesOnPath = [];

			var closed = {};
			var recurse = function recurse(nodeId) { 
				var results = getParents(nodeId, links_array);
				var nodesToCheck = _.pluck(results, 'destinationId');

				nodesOnPath = nodesOnPath.concat(nodesToCheck);
				linksOnPath = linksOnPath.concat( _.pluck(results, 'id') );

				for (var i=0; i<nodesToCheck.length; i++) {
					if (closed[nodesToCheck[i]]) continue;

					closed[nodesToCheck[i]] = true;
					recurse(nodesToCheck[i]);		
				}
			}

			recurse(startNodeId);
			linksOnPath = _.unique(linksOnPath);
			nodesOnPath = _.unique(nodesOnPath);

			return {
				linksOnPath: linksOnPath,
				nodesOnPath: nodesOnPath,
			}
		}


		var getChildren = function(nodeId, links_array) {
			return _.filter(links_array, function(link) {
				return link.destinationId == nodeId && link.linkType == 'requisite';
			});
		}

		this.getAdvanceChain = function(startNodeId, links_array) {
			var linksOnPath = [];
			var nodesOnPath = [];

			var closed = {};
			var traverse = function traverse(nodeId) {
				var results = getChildren(nodeId, links_array);
				var nodesToCheck = _.pluck(results, 'sourceId');

				nodesOnPath = nodesOnPath.concat(nodesToCheck);
				linksOnPath = linksOnPath.concat( _.pluck(results, 'id') );

				for (var i=0; i<nodesToCheck.length; i++) {
					if (closed[nodesToCheck[i]]) continue;

					closed[nodesToCheck[i]] = true;
					traverse(nodesToCheck[i]);		
				}
			}

			traverse(startNodeId);
			linksOnPath = _.unique(linksOnPath);
			nodesOnPath = _.unique(nodesOnPath);
			return {
				linksOnPath: linksOnPath,
				nodesOnPath: nodesOnPath,
			}
		}
	}




	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/visualization/visualization.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/visualization/visualization.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".gpu {\n  -webkit-transform: translateZ(0);\n  position: relative; }\n\n#graph-svg {\n  width: 100%; }\n\n.min-screen-message {\n  display: none;\n  margin-bottom: 0; }\n  @media all and (max-width: 800px) {\n    .min-screen-message {\n      display: block;\n      color: #A31F34;\n      font-style: italic;\n      text-align: center;\n      border: 1px solid #A31F34;\n      padding-top: 1.5em; } }\n\n@media all and (max-width: 800px) {\n  .loading-bar {\n    display: none; } }\n\n@media all and (min-width: 800px) {\n  .loading-bar {\n    height: 50px;\n    width: 100%;\n    position: absolute;\n    top: 20%;\n    left: 1em;\n    background: rgba(163, 31, 52, 0.75);\n    animation: load 20s ease-in-out; } }\n\n.loading-text {\n  padding-left: 1em;\n  padding-top: 1em;\n  color: #fff; }\n  @media all and (max-width: 800px) {\n    .loading-text {\n      display: none; } }\n\n@-webkit-keyframes load {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n\n@media all and (max-width: 800px) {\n  .visualization {\n    display: none; } }\n\n@media all and (min-width: 800px) {\n  .visualization {\n    width: 100%; } }\n\n.loading-text--on-svg {\n  text-align: center;\n  position: absolute;\n  top: 40%;\n  left: 46%; }\n\n.loading-svg-text {\n  text-anchor: middle; }\n\n.topic-label {\n  font-family: sans-serif;\n  font-size: .8em;\n  color: #565656;\n  fill: #565656;\n  pointer-events: none;\n  alignment-baseline: middle; }\n\n.node {\n  cursor: pointer; }\n", ""]);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/visualization/global-vis/globalVis.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/visualization/global-vis/globalVis.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "#global-vis {\n  width: 100%;\n  height: 100%; }\n\n@media all and (max-width: 800px) {\n  .global-vis {\n    display: none; } }\n\n@media all and (min-width: 800px) {\n  .global-vis {\n    width: 100%; } }\n", ""]);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var topicListController = __webpack_require__(83);
	var service = __webpack_require__(84);
	var liveScroll = __webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(87);

	__webpack_require__(30);
	__webpack_require__(23);
	__webpack_require__(89);
	__webpack_require__(94);

	// uncomment when visualization is ready

	module.exports = angular.module('cl3.topicList', [
		'cl3.common.models.topicRepository',
		'cl3.common.components.searchTopic',
		'cl3.common.components.spinner',
		'cl3.common.directives.scrollTo',
	])
	.service( 'TopicListService', service)
	.directive( 'liveScroll', ['$window', '$timeout', 'TopicListService', liveScroll])
	.controller( 'TopicListController', ['$scope', '$state', '$stateParams', '$q', 'TopicListService', 'TopicRepository', topicListController ]);


/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function TopicListController($scope, $state, $stateParams, $q, TopicListService, TopicRepository) {

		$scope.isLoading = true;
		$scope.nodes = [];
		$scope.currentFocus = '';

		var querySubject = '';
		console.log($stateParams);
		if ($stateParams.query) {
			querySubject = $stateParams.query.split('subject')[1];
			querySubject = querySubject.split('?')[0];
		}

		var topics;
		$q.all([ TopicRepository.getTopics(), TopicRepository.getRelationships() ])
		.then( function(res) {
			topics = res[0];

	//		console.log(topics.length + ' topics');
			$scope.isLoading = false;
			$scope.topics = topics;

			var hierarchy = TopicListService.getTopicHierarchy(topics);
			$scope.courseSubjects = hierarchy[0];
			$scope.subject_topics_map = hierarchy[1];
			$scope.uncategorized = hierarchy[2];

			$scope.stateParams = $stateParams;

			$scope.nodes = TopicListService.filterBySubject(topics, querySubject, $scope.courseSubjects[0]);
			$scope.links = res[1];

			$scope.currentFocus = querySubject;
		});

		$scope.getCourseNumber = function(index) {
			return $scope.courseSubjects[index][0].split('.')[0];
		}

		$scope.goToTopic = function(topic) {
			$state.go('topic-read', {topicIdentifier: topic.getIdentifier()});
		}

	}


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function() {

		// returns three results: 
		// 	1) a hash of courses and an array of their subjects, e.g. {courseNumber: [subjects]}
		//	2) a hash of subjects and their topics, e.g. 	{subjectNumber: ]}
		//	3) an array of uncategorized topics [topic1, topic2]

		this.getTopicHierarchy = function(topics) {

			var subject_topics = {};
			var uncategorized = [];
			_.each(topics, function(topic) {
				var subjectNumbers = topic.getSubjectTags();

				if (!topic.subject || topic.subject.length == 0) {
					uncategorized.push(topic);
				} else {
					_.each( subjectNumbers, function(n) {
						subject_topics[n] = subject_topics[n] || [];
						subject_topics[n].push(topic);
					});
				}
			});

			var groupedByCourse = _.groupBy( Object.keys(subject_topics), function(subjectNumber) {
				return subjectNumber.split('.')[0];
			});
			var courseSubjects = _.toArray(groupedByCourse).reverse().map( function(subjectArray) {
				return subjectArray.sort(function(a,b) {
					return a-b;
				});
			});

			var subjectKeys = _.keys(subject_topics) || [];
			var courseKeys = _.keys(groupedByCourse) || [];
	//		console.log(topics.length, 'topics', subjectKeys.length, 'subjects', courseKeys.length, 'courses');

			return [courseSubjects, subject_topics, uncategorized];
		}

		this.filterBySubject = function(topics, querySubject, shownSubjects) {
	/*
			var nodes = _.filter(topics, function(topic) {
				var subjects = _.pluck(topic.subject, 'number');
				if (subjects.indexOf(querySubject) > -1) {
					topic.isHighlight = true;
					return true;
				} else {
					topic.isHighlight = false;
					topic.isInactive = true;
				}

				return _.some(subjects, function(number) {
					return shownSubjects.indexOf(number) > -1;
				});
			});
	*/
			var nodes = _.forEach(topics, function(topic) {
				var subjects = _.pluck(topic.subject, 'number');
				if (subjects.indexOf(querySubject) > -1) {
					topic.isHighlight = true;
					topic.isInactive = false;
				} else {
					topic.isHighlight = false;
					topic.isInactive = true;
				}
			});

			return nodes;
		}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function ($window, $timeout, TopicListService) {
		return { 
			scope: {
				subjects: '=',
				currentFocus: '=',
				nodes: '=',
				allNodes: '=',
			},
			link: function(scope, element, attrs, controller) { 

				var shownSubjects = ['18.01', '18.02', '18.03', '18.06', '18.100', '16.06', '16.90', '16.30', '8.01', '8.02', '6.002', '6.003', '6.006', '6.01', '6.041', '6.042', '7.013', '5.111'];  
				var positions = [];

				scope.$watch('subjects', function(val) {
					if (val) {
						var array = _.flatten(scope.subjects);

						$timeout( function() {	
							for (var i=0; i<array.length; i++) {
								var divEl = document.getElementById('subject' + array[i]);
								var rect = divEl.getBoundingClientRect();
								positions.push(rect.top);
							}
						}, 1000);

						var doc = document.documentElement;
						var top;

						angular.element($window).bind('scroll', _.debounce(function(){
							top = ($window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
							if (top < 300) {
								element.css('top', '20em');
							} else {
								element.css('top', top + 130 + 'px');
							}
						}, 0, { 'leading': true, 'trailing': false }));

						scope.currentFocus = scope.currentFocus || '18.01';
						scope.nodes = TopicListService.filterBySubject(scope.allNodes, scope.currentFocus, shownSubjects); 

						angular.element($window).bind('scroll', _.debounce(function(){
							var subject = positions[positions.length-1];
							for (var i=0; i<positions.length-1; i++) {
								if ((top+130) < positions[i+1]) {	
									subject = array[i];
									break;
								}
							}
							
							if (shownSubjects.indexOf(subject) > -1) {
								console.log( 'current scroll position:', top, 'closest subject', subject);
								scope.nodes = TopicListService.filterBySubject(scope.allNodes, subject, shownSubjects); 
								scope.currentFocus = subject;
								scope.$apply();
							}
						}, 200));

					}
				});

			}
		}
	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 86 */
/***/ function(module, exports) {

	var v1="<section class=\"topic-list global-vis-wrapper-parent\" scroll-to watch-scroll-to=\"stateParams.query\"> <h4 class=\"bold heading--bordered\">All Topics</h4> <div class=\"columns\" ng-show=\"isLoading\"> <spinner></spinner> </div> <div class=\"global-vis-wrapper\" live-scroll subjects=\"courseSubjects\" nodes=\"nodes\" current-focus=\"currentFocus\" all-nodes=\"topics\"> <p class=\"muted global-vis-title\" ng-show=\"courseSubjects\"> <span class=\"red-dot\" ng-bind=\"currentFocus\"></span> topics\n<span class=\"gray-dot\"> Other topics</span> </p> <global-vis ng-show=\"courseSubjects\" class=\"global-vis-component\" on-hover=\"currentTopic\" nodes=\"nodes\" edges=\"links\" current-focus=\"currentFocus\"></global-vis> </div> <div class=\"row controls\" ng-show=\"!isLoading\"> <div class=\"medium-12 columns\"> <search-topic preview=\"partial\" topics=\"topics\" upon-select=\"goToTopic(topic)\" input-placeholder=\"Search by topic, class or course, e.g. 'transform'\"></search-topic> </div> </div> <div class=\"row\" ng-show=\"!isLoading\"> <div class=\"columns\"> <ul class=\"course-list clearfix\"> <li class=\"course-list__item\" ng-class=\"{'end': $last}\" ng-repeat=\"subjectArray in courseSubjects track by $index\"><a scroll-to click-scroll-to=\"course{{getCourseNumber($index)}}\" ng-bind=\"'Course ' + getCourseNumber($index)\"></a></li> </ul> </div> <div class=\"course-group\" ng-repeat=\"subjectArray in courseSubjects track by $index\"> <h5 id=\"course{{getCourseNumber($index)}}\" class=\"heading--bordered\">Course <span ng-bind=\"getCourseNumber($index)\"></span></h5> <div class=\"subject-group-wrapper\"> <div class=\"subject-group clearfix\" ng-repeat=\"subjectNumber in subjectArray\"> <h6 id=\"subject{{subjectNumber}}\" class=\"heading--bordered\" ng-bind=\"subjectNumber\"></h6> <ul class=\"topics\"> <li class=\"topic\" ng-repeat=\"topic in subject_topics_map[subjectNumber]\"> <a ui-sref=\"topic-read({topicIdentifier: topic.getIdentifier()})\" ng-bind=\"topic.displayName\"></a> </li> </ul> </div> </div> </div> <div class=\"course-group\" ng-show=\"!isLoading\"> <h5 id=\"uncategorized\" class=\"heading--bordered\">Uncategorized</h5> <ul class=\"topics\"> <li class=\"topic\" ng-repeat=\"topic in uncategorized\"> <a ui-sref=\"topic-read({topicIdentifier: topic.getIdentifier()})\" ng-bind=\"topic.displayName\"></a> </li> </ul> </div> </div> </section>";
	angular.module(["ng"]).run(["$templateCache",function(c){c.put("topicList.html", v1)}]);
	module.exports=v1;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/topic-list/topicList.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/topic-list/topicList.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".topic-list .course-list {\n  border: 1px solid #A31F34;\n  padding-right: 1em;\n  padding-top: 1.5em;\n  margin-bottom: 1.5em;\n  margin-top: 1.5em; }\n\n.topic-list .course-list__item {\n  float: left;\n  width: 8em;\n  margin-bottom: 1em; }\n\n.topic-list .subject-group-wrapper {\n  flex-wrap: wrap;\n  -webkit-flex-flow: row wrap; }\n\n.topic-list .subject-group {\n  padding-left: 1em;\n  width: 250px; }\n\n.topic-list .topic {\n  line-height: 1.5;\n  margin-bottom: .75em; }\n\n.topic-list .topics {\n  margin-bottom: 3em; }\n\n.global-vis-wrapper-parent {\n  position: relative; }\n\n.topic-list .global-vis-wrapper {\n  position: absolute;\n  top: 25em;\n  right: -3.6%;\n  width: 535px;\n  height: 380px;\n  z-index: 2;\n  -ms-transform: translateZ(0);\n  /* IE 9 */\n  -webkit-transform: translateZ(0);\n  /* Chrome, Safari, Opera */\n  transform: translateZ(0); }\n  @media all and (max-width: 1085px) {\n    .topic-list .global-vis-wrapper {\n      display: none; } }\n\n.topic-list .global-vis-component {\n  width: 100%;\n  height: 100%;\n  min-height: 350px;\n  background: #feffff; }\n\n.topic-list .global-vis {\n  border-left: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd; }\n\n.topic-list .global-vis-title {\n  font-size: 0.8125rem;\n  /* 13px */\n  line-height: 1.8462em;\n  /* 24px */\n  margin-bottom: .75em; }\n\n.global-vis-wrapper .gray-dot {\n  margin-left: 2em; }\n\n.red-dot::before, .gray-dot::before {\n  content: '';\n  border-radius: 50%;\n  height: 10px;\n  width: 10px;\n  display: inline-block;\n  margin-right: .5em; }\n\n.red-dot::before {\n  background: #A31F34; }\n\n.gray-dot::before {\n  background: #c9c9c9; }\n", ""]);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	
	var spinnerDirective = __webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);

	module.exports = angular.module('cl3.common.components.spinner', [])
	.directive( 'spinner', spinnerDirective)


/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			templateUrl: 'spinner.html',
			scope: {},
			link: function(scope, element, attrs, controller, transclude) {}
		}
	}


/***/ },
/* 91 */
/***/ function(module, exports) {

	var v1="<svg class=\"spinner\" width=\"65px\" height=\"65px\" viewbox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\"> <circle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle> </svg>";
	angular.module(["ng"]).run(["$templateCache",function(c){c.put("spinner.html", v1)}]);
	module.exports=v1;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(93);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/spinner/spinner.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/spinner/spinner.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".spinner {\n  animation: rotator 1.4s linear infinite;\n  margin-bottom: 1.5em;\n  margin-top: 1.5em;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n@keyframes rotator {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(270deg); } }\n\n.path {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite; }\n\n@keyframes colors {\n  0% {\n    stroke: #4285F4; }\n  25% {\n    stroke: #DE3E35; }\n  50% {\n    stroke: #F7C223; }\n  75% {\n    stroke: #1B9A59; }\n  100% {\n    stroke: #4285F4; } }\n\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 187; }\n  50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg); }\n  100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg); } }\n", ""]);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var scrollTo = __webpack_require__(95);

	module.exports = angular.module( 'cl3.common.directives.scrollTo', [
	])
	.directive( 'scrollTo', ['$timeout', '$state', '$uiViewScroll', scrollTo ])


/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function ($timeout, $state, $uiViewScroll) {
		return { 
			scope: {
				clickScrollTo: '@',
				watchScrollTo: '=',
			},
			link: function(scope, element, attrs) { 

				if (scope.clickScrollTo) {
					element.on('click', function(e) {
						var targetEl = document.getElementById(scope.clickScrollTo);
						if (targetEl) {
							$uiViewScroll(angular.element(targetEl));
							$state.transitionTo($state.current.name, {query: scope.clickScrollTo}, {
								reload: false
							});
						}
						return false;
					});
				} 

				scope.$watch('watchScrollTo', function(val) {
					if (val) {	
						// need the timeout because need to push it to
						// after dom finishes rendering 
						// in case there are any additional queries after it
						var firstParam = val.split('?')[0];

						$timeout( function() {
							var targetEl = document.getElementById(firstParam);
							if (targetEl) {
								$uiViewScroll(angular.element(targetEl));
							}
						}, 0);
					}
				});
			}
		}
	}



/***/ }
/******/ ])));