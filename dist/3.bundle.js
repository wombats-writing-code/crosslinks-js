webpackJsonp([3],{

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	
	// core side-bar
	var topicTabDirective = __webpack_require__(145);
	__webpack_require__(147);

	module.exports = angular.module('cl3.common.components.topicTab', [])
	.directive( 'topicTab', ['$stateParams', topicTabDirective])


/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function($stateParams) {
		return {
			restrict: 'E',
			template: __webpack_require__(146),
			scope: {},
			link: function(scope, element, attrs, controller, transclude) {
	//			console.log($stateParams.topicIdentifier);
				scope.topicId = $stateParams.topicIdentifier;
			}
		}
	}


/***/ },

/***/ 146:
/***/ function(module, exports) {

	module.exports = "<div class=\"row has-floating\">\n\t<div class=\"tab-bar flex-container\">\n\t\t<a class=\"tab-bar__tab muted\" ui-sref=\"topic-read({topicIdentifier: topicId})\" ui-sref-active=\"js-selected\">Read</a>\n\t\t<a class=\"tab-bar__tab muted tooltip__controller\" ui-sref=\"topic-edit({topicIdentifier: topicId})\" ui-sref-active=\"js-selected\">Edit</a>\n\t\t<a class=\"tab-bar__tab muted\" ui-sref=\"topic-history({topicIdentifier: topicId})\" ui-sref-active=\"js-selected\">View History</a>\n\t</div>\n</div>\n";

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(148);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic-tab/topicTab.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic-tab/topicTab.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".tab-bar {\n  width: 100%;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #A31F34; }\n\na.tab-bar__tab {\n  position: relative;\n  margin: 0 .5em 7px 0;\n  padding: .8em .9375em .4em .9375em;\n  border-radius: 0;\n  color: rgba(63, 71, 78, 0.5);\n  border-top: 2px solid #A31F34;\n  border-left: 2px solid #A31F34;\n  border-right: 2px solid #A31F34;\n  border-bottom: none;\n  border-color: rgba(163, 31, 52, 0.1);\n  transition: all .3s ease; }\n\na.tab-bar__tab:visited {\n  color: #3f474e; }\n\n.tab-bar__tab:hover {\n  opacity: 1;\n  color: #3f474e; }\n\n.tab-bar__tab.js-selected {\n  opacity: 1;\n  color: #3f474e;\n  border-color: #A31F34; }\n", ""]);

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var topicHistoryController = __webpack_require__(187);

	__webpack_require__(64);
	__webpack_require__(144);
	__webpack_require__(54);
	__webpack_require__(57);

	angular.module('cl3.topicHistory', [
		'cl3.common.models.logging',
		'cl3.common.components.topicTab',
		'cl3.common.components.loadingText',
		'cl3.common.components.logEntry',
	])
	.controller( 'TopicHistoryController', ['$scope', '$stateParams', 'TopicRepository', 'LogRepository', topicHistoryController ]);

	module.exports = {
		template: __webpack_require__(188),
		controller: topicHistoryController
	};


/***/ },

/***/ 187:
/***/ function(module, exports) {

	'use strict';

	module.exports = function($scope, $stateParams, TopicRepository, Logger) {

		$scope.hasEdits = true;
		$scope.isLoading = true;

	        var topicIdentifier = $stateParams.topicIdentifier;
	                
	        TopicRepository.get(topicIdentifier)
	        .then( function(res) {  
			$scope.currentTopic = res;
			return Logger.get(res.id);
		})
		.then( function(logEntries) {
			$scope.isLoading = false;
			$scope.currentTopic.history = logEntries;

			$scope.hasEdits = ($scope.currentTopic.history.length > 0);
		})
		.catch( function(err) {
			console.log('topicHistoryController had an error', err);
		});

	}


/***/ },

/***/ 188:
/***/ function(module, exports) {

	module.exports = "<topic-tab></topic-tab>\n\n<div class=\"row\">\n\t<loading-text ng-show=\"isLoading\"></loading-text>\n\t<p class=\"columns \" ng-show=\"!hasEdits\">No edits have been recorded for this topic.</p>\n</div>\n\n<ol class=\"\">\n\t<li ng-repeat=\"entry in ::currentTopic.history | orderBy:'timestamp':true \">\n\t\t<log-entry entry=\"entry\"></log-entry>\n\t</li>\n</ol>\n\n";

/***/ }

});