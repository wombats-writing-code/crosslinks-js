webpackJsonp([1],Array(96).concat([
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var topicReadController = __webpack_require__(97);
	__webpack_require__(98);

	__webpack_require__(33);

	__webpack_require__(100);
	__webpack_require__(144);
	__webpack_require__(54);
	__webpack_require__(149);
	__webpack_require__(154);		// uncomment when pra-vis is ready

	angular.module('cl3.topicRead', [
		'cl3.common.models',

		'cl3.common.components.topic',
		'cl3.common.components.topicTab',
		'cl3.common.components.loadingText',
		'cl3.common.components.explanationBlock',
		'cl3.common.components.visualization.topicVis',
	])
	.controller( 'TopicReadController', ['$scope', '$q', '$stateParams', 'Utils', 'TopicRepository', topicReadController ]);

	module.exports = {
		template: __webpack_require__(161),
		controller: topicReadController
	};


/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function($scope, $q, $stateParams, Utils, TopicRepository) {

		$scope.topicIdentifier = $stateParams.topicIdentifier;

		TopicRepository.get($scope.topicIdentifier)
		.then( function(res) {
			$scope.currentTopic = res;

			if (Utils.isTopicId($scope.topicIdentifier)) Utils.rewriteToAlias($scope.currentTopic.alias);

			return $q.all([ $scope.currentTopic.get('prepare'), $scope.currentTopic.get('learn') ]);
		})
		.then( function(res) {
			$scope.isCriticalLoaded = true;

			$scope.currentTopic.get('reference');
			$scope.currentTopic.get('subject');
			$scope.currentTopic.get('relate');
			$scope.currentTopic.get('advance');
			$scope.currentTopic.get('apply');

			TopicRepository.getRelationships()
			.then( function(res) {
				$scope.links = res;
			});

			TopicRepository.getTopicRequisites($scope.topicIdentifier)
			.then( function(res) {
				$scope.root = res;
			});
		});
	}


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(99);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/topic-read/topicRead.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/topic-read/topicRead.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".topic-title {\n  font-weight: 500; }\n\n.five-section {\n  min-height: 4.5em;\n  margin-bottom: 1.5em; }\n", ""]);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(101);
	__webpack_require__(109);
	__webpack_require__(114);
	__webpack_require__(119);
	__webpack_require__(124);
	__webpack_require__(129);
	__webpack_require__(134);
	__webpack_require__(139);

	module.exports = angular.module('cl3.common.components.topic', [
		'cl3.common.components.topic.topicDescription',
		'cl3.common.components.topic.topicReference',
		'cl3.common.components.topic.topicPrepare',
		'cl3.common.components.topic.topicRelate',
		'cl3.common.components.topic.topicAdvance',
		'cl3.common.components.topic.topicLearn',
		'cl3.common.components.topic.topicApply',
		'cl3.common.components.topic.topicSubject',
	])


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(102);
	__webpack_require__(104);

	// for mathjax directive
	__webpack_require__(106);

	module.exports = angular.module('cl3.common.components.topic.topicDescription', [
		'cl3.common.directives'
	])
	.directive( 'topicDescription', directive);


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(103),
			scope: {
				description: '=',
			},
			link: function(scope, element, attrs, controller, transclude) {
			}
		}
	}


/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "\n<p class=\"topic__description\" ng-bind=\"description\" mathjax=\"description\"></p>\n";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(105);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-description/topicDescription.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-description/topicDescription.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".topic__description {\n  white-space: pre-wrap; }\n", ""]);

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var autoExpand = __webpack_require__(107);
	var feedbackButton = __webpack_require__(108);

	module.exports = angular.module( 'cl3.common.directives', [
	])
	.directive( 'autoExpand', autoExpand)
	.directive( 'feedbackButton', feedbackButton)


/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		return {
			require: '?ngModel',
			link: function(scope, element, attrs, ngModelController) {

				scope.$watch( function() {
					return ngModelController.$viewValue;
				}, function(val) {
					if (val) {
						var newlines = val.split('\n');
						var numNewlines = newlines.length + 2;

						var wordsArray = val.split(' ');
						var numWords = wordsArray.length;
						var numRows = Math.ceil(numWords / 6);		// about 6 words per row
						element.prop('rows', Math.max(numRows, numNewlines) );
					} else {
						element.prop('rows', 5);
					}
				}, 100);
			}
		}
	}


/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function() {
		return {
			scope: {
				disabledWhen: '=',
				defaultWhen: '=',
				notDirtyWhen: '=',
				progressWhen: '=',
				successWhen: '=',
				errorWhen: '=',
			},
			link: function(scope, element, attrs) {
				var transition = attrs.transition || 3000;
				element.text(attrs.initialLabel);

	//			console.log(attrs.defaultLabel, attrs.errorLabel, attrs.progressLabel, attrs.successLabel);
				scope.$watchGroup([ 'defaultWhen', 'errorWhen', 'progressWhen', 'successWhen'], function(newValues) {
					var isDefault = newValues[0]; 
					var isError = newValues[1];
					var isProgress = newValues[2];
					var isSuccess = newValues[3];

					var classlist = element[0].classList;

					if (isDefault) {
						classlist.remove('js-success');
						classlist.remove('js-in-progress');
						classlist.remove('js-error');
						element.text(attrs.defaultLabel);
					} else if (isSuccess) {
						classlist.remove('js-in-progress');
						classlist.remove('js-error');
						classlist.add('js-success');
						element.text(attrs.successLabel);
					} else if (isProgress) {
						classlist.remove('js-success');
						classlist.remove('js-error');
						classlist.add('js-in-progress');
						element.text(attrs.progressLabel);
					} else if (isError) {
						classlist.remove('js-success');
						classlist.remove('js-in-progress');
						classlist.add('js-error');
						element.text(attrs.errorLabel);
					}
				});
			}
		}
	}


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(110);
	__webpack_require__(112);

	module.exports = angular.module('cl3.common.components.topic.topicReference', [
	])
	.directive( 'topicReference', directive);


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(111),
			scope: {
				reference: '=',
			},
			link: function(scope, element, attrs, controller, transclude) {
			}
		}
	}


/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"link-with-favicon references__reference\" ng-repeat=\"member in reference\" ng-if=\"member.displayName\">\n\t<img class=\"link-with-favicon__favicon\" ng-src=\"https://res.cloudinary.com/crosslinks/image/upload/{{member.icon}}.png\">\n\t<a class=\"link-with-favicon__link\" target=\"_blank\" ng-href=\"{{member.url}}\" ng-bind=\"member.displayName\"></a>\n</div>\n";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-reference/topicReference.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-reference/topicReference.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".references__reference {\n  float: left;\n  margin-right: .5em; }\n", ""]);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(115);
	__webpack_require__(117);

	//require("../../toggle-switch");

	module.exports = angular.module('cl3.common.components.topic.topicPrepare', [
	//	'cl3.common.components.toggleSwitch'
	])
	.directive( 'topicPrepare', directive);


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(116),
			scope: {
				prepare: '=',
			},
			link: function(scope, element, attrs, controller, transclude) {
			}
		}
	}


/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "\n<div ng-if=\"prepare.length == 0\" class=\"no-five-section-material\">\n\t<p class=\"small italic\">No prerequisite topics (yet). </p>\n</div>\n<ul class=\"five-section-topic-list\" id=\"topic-vis-height-reference\">\n\t<li class=\"five-section-topic-list__topic\" ng-repeat=\"topic in prepare track by topic.id\">\n\t\t<a class=\"five-section-topic-list__topic__link\" ui-sref=\"topic-read({topicIdentifier: topic.getIdentifier()})\" ng-bind=\"topic.displayName\"></a>\n\t</li>\n</ul>\n";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(118);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-prepare/topicPrepare.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-prepare/topicPrepare.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".five-section-topic-list__topic__link {\n  display: inline-block;\n  margin-bottom: 1.7em; }\n\n.five-section-topic-list, .five-section-resource-list {\n  list-style: none;\n  padding-left: 0; }\n", ""]);

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(120);
	__webpack_require__(122);

	//require("../../toggle-switch");

	module.exports = angular.module('cl3.common.components.topic.topicRelate', [
	//	'cl3.common.components.toggleSwitch'
	])
	.directive( 'topicRelate', directive);


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(121),
			scope: {
				relate: '=',
			},
			link: function(scope, element, attrs, controller, transclude) {
			}
		}
	}


/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "\n<div ng-if=\"relate.length == 0\" class=\"no-five-section-material\">\n\t<p class=\"small italic\">No related topics (yet). </p>\n</div>\n<ul class=\"five-section-topic-list\">\n\t<li class=\"five-section-topic-list__topic\" ng-repeat=\"topic in relate\">\n\t\t<a class=\"five-section-topic-list__topic__link\" ui-sref=\"topic-read({topicIdentifier: topic.getIdentifier()})\" ng-bind=\"topic.displayName\"></a>\n\t\t&nbsp;\n\t</li>\n</ul>\n";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-relate/topicRelate.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-relate/topicRelate.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "", ""]);

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(125);
	__webpack_require__(127);

	//require("../../toggle-switch");

	module.exports = angular.module('cl3.common.components.topic.topicAdvance', [
	//	'cl3.common.components.toggleSwitch'
	])
	.directive( 'topicAdvance', directive);


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(126),
			scope: {
				advance: '=',
			},
			link: function(scope, element, attrs, controller, transclude) {
			}
		}
	}


/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "\n<div ng-if=\"advance.length == 0\" class=\"no-five-section-material\">\n\t<p class=\"small italic\">No advance topics (yet). </p>\n</div>\n<ul class=\"five-section-topic-list\">\n\t<li class=\"five-section-topic-list__topic\" ng-repeat=\"topic in advance\">\n\t\t<a class=\"five-section-topic-list__topic__link\" ui-sref=\"topic-read({topicIdentifier: topic.getIdentifier()})\" ng-bind=\"topic.displayName\"></a>\n\t\t&nbsp;\n\t\t<toggle-switch class=\"toggle-switch\" toggle-model=\"showResources\"></toggle-switch>\n\n\t\t<ul class=\"\" ng-show=\"showResources\">\n\t\t\t<li class=\"link-with-favicon\" ng-repeat=\"resource in topic.learnResources\">\n\t\t\t\t<img class=\"link-with-favicon__favicon\" ng-src=\"/images/{{resource.iconType}}.png\" ng-alt=\"{{resource.iconType}}\" />\n\t\t\t\t<a class=\"link-with-favicon__link\" target=\"_blank\" ng-href=\"{{resource.url}}\" ng-bind=\"resource.displayName\"></a>\n\t\t\t</li>\n\t\t\t<p class=\"small\" ng-show=\"topic.learnResources && topic.learnResources.length == 0\">No Learn resources yet</p>\n\t\t\t<p class=\"small animation--pulse\" ng-show=\"!topic.learnResources\">Loading...</p>\n\t\t</ul>\n\t</li>\n</ul>\n";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-advance/topicAdvance.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-advance/topicAdvance.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 128 */
123,
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(130);
	__webpack_require__(132);

	module.exports = angular.module('cl3.common.components.topic.topicLearn', [
	])
	.directive( 'topicLearn', directive);


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(131),
			scope: {
				learn: '=',
			},
			link: function(scope, element, attrs, controller, transclude) {
			}
		}
	}


/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "\n<div ng-if=\"learn.length == 0\" class=\"no-five-section-material\">\n\t<p class=\"small italic\">No one has added any links to learning material (yet). </p>\n</div>\n<ul class=\"five-section-resource-list\">\n\t<li class=\"link-with-favicon\" ng-repeat=\"resource in learn\" ng-attr-data-id=\"{{resource.id}}\">\n\t\t<img class=\"link-with-favicon__favicon\" ng-src=\"https://res.cloudinary.com/crosslinks/image/upload/{{resource.iconType}}.png\" ng-alt=\"{{resource.iconType}}\" />\n\t\t<a class=\"link-with-favicon__link\" target=\"_blank\" ng-href=\"{{resource.url}}\" ng-bind=\"resource.displayName\"></a>\n\t</li>\n</ul>\n";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(133);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-learn/topicLearn.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-learn/topicLearn.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 133 */
123,
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(135);
	__webpack_require__(137);

	module.exports = angular.module('cl3.common.components.topic.topicApply', [
	])
	.directive( 'topicApply', directive);


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(136),
			scope: {
				apply: '=',
			},
			link: function(scope, element, attrs, controller, transclude) {
			}
		}
	}


/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "\n<div ng-if=\"apply.length == 0\" class=\"no-five-section-material\">\n\t<p class=\"small italic\">No links to applications (yet). </p>\n</div>\n<ul class=\"five-section-resource-list\">\n\t<li class=\"link-with-favicon\" ng-repeat=\"resource in apply\" ng-attr-data-id=\"{{resource.id}}\">\n\t\t<img class=\"link-with-favicon__favicon\" ng-src=\"https://res.cloudinary.com/crosslinks/image/upload/{{resource.iconType}}.png\" ng-alt=\"{{resource.iconType}}\" />\n\t\t<a class=\"link-with-favicon__link\" target=\"_blank\" ng-href=\"{{resource.url}}\" ng-bind=\"resource.displayName\"></a>\n\t</li>\n</ul>\n";

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-apply/topicApply.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-apply/topicApply.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
123,
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(140);
	__webpack_require__(142);

	module.exports = angular.module('cl3.common.components.topic.topicSubject', [
	])
	.directive( 'topicSubject', directive);


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(141),
			scope: {
				subject: '=',
				topicName: '=',
			},
			link: function(scope, element, attrs, controller) {
				scope.$watch( 'subject', function(val) {
					if (val) {
						scope.uniqueCourseNumbers = _.uniq(
							scope.subject.map( function(item) {
								return item.getCourseNumber();
							})
						);  
					}
				});  
			}
		}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "\n<p class=\"columns\">\n\t<a class=\"comma-separated\" ng-class=\"{'is-last': $last}\" ng-repeat=\"number in uniqueCourseNumbers\" ui-sref=\"topic-list({query: 'course'+number})\" ng-bind=\"'Course ' + number\"></a> \n\t<span class=\"muted\">&gg;</span>\n\n\t<a class=\"comma-separated\" ng-class=\"{'is-last': $last}\" ng-repeat=\"sub in subject\" ui-sref=\"topic-list({query: 'subject'+sub.number})\" ng-bind=\"sub.number\"></a>\n\t<span class=\"muted\">&gg;</span>\n\n\t<span class=\"\" ng-bind=\"topicName\"></span>\n</p>\n";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-subject/topicSubject.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic/topic-subject/topicSubject.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".comma-separated:not(.is-last)::after {\n  content: ',';\n  color: #62717D;\n  margin-right: .15em; }\n", ""]);

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	
	// core side-bar
	var topicTabDirective = __webpack_require__(145);
	__webpack_require__(147);

	module.exports = angular.module('cl3.common.components.topicTab', [])
	.directive( 'topicTab', ['$stateParams', topicTabDirective])


/***/ },
/* 145 */
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
/* 146 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row has-floating\">\n\t<div class=\"tab-bar flex-container\">\n\t\t<a class=\"tab-bar__tab muted\" ui-sref=\"topic-read({topicIdentifier: topicId})\" ui-sref-active=\"js-selected\">Read</a>\n\t\t<a class=\"tab-bar__tab muted tooltip__controller\" ui-sref=\"topic-edit({topicIdentifier: topicId})\" ui-sref-active=\"js-selected\">Edit</a>\n\t\t<a class=\"tab-bar__tab muted\" ui-sref=\"topic-history({topicIdentifier: topicId})\" ui-sref-active=\"js-selected\">View History</a>\n\t</div>\n</div>\n";

/***/ },
/* 147 */
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".tab-bar {\n  width: 100%;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #A31F34; }\n\na.tab-bar__tab {\n  position: relative;\n  margin: 0 .5em 7px 0;\n  padding: .8em .9375em .4em .9375em;\n  border-radius: 0;\n  color: rgba(63, 71, 78, 0.5);\n  border-top: 2px solid #A31F34;\n  border-left: 2px solid #A31F34;\n  border-right: 2px solid #A31F34;\n  border-bottom: none;\n  border-color: rgba(163, 31, 52, 0.1);\n  transition: all .3s ease; }\n\na.tab-bar__tab:visited {\n  color: #3f474e; }\n\n.tab-bar__tab:hover {\n  opacity: 1;\n  color: #3f474e; }\n\n.tab-bar__tab.js-selected {\n  opacity: 1;\n  color: #3f474e;\n  border-color: #A31F34; }\n", ""]);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(150);
	__webpack_require__(152);

	module.exports = angular.module('cl3.common.components.explanationBlock', [])
	.directive( 'explanationBlock', directive)


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			transclude: true,
			template: __webpack_require__(151),
			scope: {
				section:'@'
			},
			compile: function(tEl, tAttr) {

				var getHtml = function(name) {
					name = name && name.toLowerCase() || 'default';

					var types = {
						'prepare': 'Topics that are prerequisites ',
						'relate': 'Topics that are related ',
						'advance': 'Topics that need this one ',
						'learn': 'Resources for studying',
						'apply': 'How this topic is used in real life ',
						'assess': 'Test yourself on simple exercises '
					};

					return types[name];
				}

				return function(scope, iEl, iAttrs) {
					var toolTipEl = iEl.find('div');
					if (!toolTipEl.html()) {
						toolTipEl.html( getHtml(scope.section) );	
					}
				}
			}
		}
	}


/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "<div class=\"explanation-block\" ng-transclude></div>\n";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/explanation-block/explanationBlock.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/explanation-block/explanationBlock.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".explanation-block {\n  background-color: rgba(170, 170, 170, 0.2);\n  padding: .5em .55em;\n  font-size: 0.8125rem;\n  /* 13px */\n  line-height: 1;\n  border-radius: 5px;\n  border-bottom-right-radius: 5px;\n  width: auto;\n  float: right;\n  position: absolute;\n  top: -.1em;\n  right: .1em; }\n", ""]);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(155);
	var service = __webpack_require__(157);
	var render = __webpack_require__(158);

	__webpack_require__(159);
	__webpack_require__(74);

	module.exports = angular.module('cl3.common.components.visualization.topicVis', [
		'cl3.common.components.visualization'
	])
	.service( 'TopicVis', ['Utils', 'TreeSearch', 'Alias', service]) 
	.service( 'TopicVisRender', ['$timeout', 'Constants', 'Events', render])
	.directive( 'topicVis', ['$window', 'Utils', 'TopicVis', 'TopicVisRender', directive])


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function ($window, Utils, TopicVis, TopicVisRender) {
		return {
			restrict: 'E',
			template: __webpack_require__(156),
			scope: {
				root: '=',
				edges: '=',
			}, 
			link: function(scope, element, attrs) {
				Utils.loadD3()
				.then( function(res) {
					scope.isD3Loaded = true;
				});

				scope.$watchGroup(['root', 'edges', 'isD3Loaded'], function(values) {
					if (values[0] && values[1] && values[1].length > 0 && values[2]) {
						TopicVisRender.draw( TopicVis.layout({
							root: values[0],
							edges: values[1],
						}));
					}
				});
			}
		}
	}


/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "\n<svg class=\"topic-vis\" id=\"topic-vis\">\n</svg>\n";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function TopicVisService(Utils, TreeSearch, Alias) {

		var decorateRoot = function(root, width, height) {
			root.radius = 27;
			root.fixed = true;
			root.x = 4*root.radius;
			root.y = root.radius;
			return root;
		}

		var decorateNode = function(node) {
			node.displayName = node.displayName.text;
			node.radius = 9;
			node.alias = Alias.createAlias(node.displayName);
			return node;
		}

		this.layout = function(data) {
			var svgEl = d3.select('#topic-vis');
			var visWidth = svgEl.style('width').replace('px','');
			var visHeight = document.getElementById('topic-vis-height-reference').offsetHeight;
			svgEl.style('height', visHeight);

			var nodes = [];
			var traverse = function traverse(startNode) {
				nodes.push(startNode);
				var children = startNode.childNodes;
				for (var i=0; i<children.length; i++) {
					traverse(children[i]);
				}
			}

			traverse(data.root);
			nodes = _.unique(nodes, 'id');
			nodes = _.map( nodes, decorateNode); 
			nodes[0] = decorateRoot(nodes[0], visWidth, visHeight);

			data.edges = _.filter( data.edges, function(edge) {
				// this is not a mistake. we need to reverse this because of mc3's convention
				var doesSourceNodeExist = _.find(nodes, {'id': edge.destinationId});
				var doesTargetNodeExist = _.find(nodes, {'id': edge.sourceId});
				edge.source = doesSourceNodeExist;
				edge.target = doesTargetNodeExist;
				return doesSourceNodeExist && doesTargetNodeExist;
			});

			data.vis = svgEl;
			data.nodes = nodes;
			data.opts = {
				gravity: 0.08,
				linkStrength: 0.07,
				linkDistance: 100,
				charge: -220,
				chargeDistance: 100,
			};

			return data;	
		}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function RenderService($timeout, Constants, Events, TreeSearch) {

		this.draw = function(data) {
			var vis = data.vis;
			var opts = data.opts;
			var visWidth = vis.style('width').replace('px','');
			var visHeight = vis.style('height').replace('px','');

			vis.append("marker")
				.attr("id", 'topicRequisiteMarker')
				.attr("viewBox", "0 -5 10 10")
				.attr("refX", 55)
				.attr("refY", 0)
				.attr("markerUnits", "userSpaceOnUse")
				.attr("orient", "auto")
				.attr("markerWidth", 10)
				.attr("markerHeight", 9)
				.style("stroke", "context-stroke")
				.append("path")
				.attr("d", "M0,-5L10,0L0,5")
				.style("fill", "context-fill")
				.style("opacity", "0.6");
			
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
				.attr("marker-end", "url(#topicRequisiteMarker)")
				.style("opacity", '0.5')
				.style("stroke", '#888')
				.style("stroke-width", 1);

			var nodes = vis.selectAll("circle")
				.data(data.nodes)
				.enter()
				.append("circle")
				.attr("class", "node")
				.attr("r", function(d) { return d.radius; })
				.style("fill", function(d) { return Constants.node.fill.default; })
				.style("opacity", '1' )
				.call(force.drag)
				.on("click", Events.clickHandler);

			var labels = vis.selectAll(".topic-label")
				.data(data.nodes)
				.enter()
				.append("text")
				.attr("class", "topic-label")
				.text( function(d) { return d.displayName; })

	//		console.time('renderingGlobal')

			var n = 10;
				force.start();
				for (var i = n * n; i > 0; --i) force.tick();
				force.stop();


				nodes
	//			.attr("cx", function(d) { d.x = Math.max(d.radius, d.x); return d.x;})
				.attr("cx", function(d) { d.x = Math.max(d.radius, Math.min(visWidth - d.radius, d.x)); return d.x; })
				.attr("cy", function(d) { d.y = Math.max(d.radius, Math.min(visHeight - d.radius, d.y)); return d.y; });

				links.attr("x1", function(d) { return d.source.x; })
					.attr("y1", function(d) { return d.source.y; })
					.attr("x2", function(d) { return d.target.x; })
					.attr("y2", function(d) { return d.target.y; });

				labels.attr("x", function(d) { 
					if (d.fixed) return d.x - d.radius - 5;
					return d.x + d.radius + 3;
				})
				.attr("y", function(d) { 
	//				if (d.fixed) return d.y - d.radius - 5;
					if (d.fixed) return d.y + d.radius + 7;
					return d.y; 
				});

	//			console.timeEnd('renderingGlobal')

				return true;
				
		}
	}


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(160);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/visualization/topic-vis/topicVis.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/visualization/topic-vis/topicVis.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "#topic-vis {\n  width: 100%;\n  height: 100%;\n  min-height: 150px;\n  opacity: .7; }\n\n#topic-vis .topic-label {\n  fill: #333; }\n", ""]);

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = "<topic-tab></topic-tab>\n\n<article class=\"\">\n\t<div class=\"row\">\n\t\t<h4 class=\"columns topic-title\" ng-bind=\"currentTopic.displayName\"></h4>\n\t</div>\n\t<div class=\"row\">\n\t\t<section class=\"small-12 medium-12 columns  margin--bottom\">\n\t\t\t<topic-description description=\"currentTopic.description\"></topic-description>\n\t\t</section>\n\t</div>\n\t<div class=\"row\">\n\t\t<section class=\"small-12 columns references margin--bottom\">\n\t\t\t<topic-reference reference=\"currentTopic.reference\"></topic-reference>\n\t\t</section>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<section class=\"small-12 medium-6 columns \">\n\t\t\t<topic-vis root=\"root\" edges=\"links\"></topic-vis>\n\t\t</section>\n\t\t<section class=\"small-12 medium-6 columns five-section\">\n\t\t\t<div class=\"five-section-heading clearfix\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Prepare</h6>\n\t\t\t\t<explanation-block section=\"prepare\"></explanation-block>\n\t\t\t</div>\n\t\t\t<loading-text ng-show=\"!isCriticalLoaded\"></loading-text>\n\t\t\t<topic-prepare ng-show=\"isCriticalLoaded\" prepare=\"currentTopic.prepare\"></topic-prepare>\n\t\t</section>\n\t</div>\n\t<div class=\"row\">\n\t\t<section class=\"small-12 columns five-section\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Learn</h6>\n\t\t\t\t<explanation-block section=\"learn\"></explanation-block>\n\t\t\t</div>\n\t\t\t<loading-text ng-show=\"!isCriticalLoaded\"></loading-text>\n\t\t\t<topic-learn ng-show=\"isCriticalLoaded\" learn=\"currentTopic.learn\" analytics-event=\"learn\" topic-id=\"{{currentTopic.id}}\"></topic-learn>\n\t\t</section>\n\t</div>\n\t<div class=\"row\">\n\t\t<section class=\"small-12 medium-6 columns five-section\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Relate</h6>\n\t\t\t\t<explanation-block section=\"relate\"></explanation-block>\n\t\t\t</div>\n\t\t\t<topic-relate relate=\"currentTopic.relate\"></topic-relate>\n\t\t</section>\n\t\t<section class=\"small-12 medium-6 columns five-section\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Advance</h6>\n\t\t\t\t<explanation-block section=\"advance\"></explanation-block>\n\t\t\t</div>\n\t\t\t<topic-advance advance=\"currentTopic.advance\"></topic-advance>\n\t\t</section>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<section class=\"small-12 columns five-section\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Apply</h6>\n\t\t\t\t<explanation-block section=\"apply\"></explanation-block>\n\t\t\t</div>\n\t\t\t<topic-apply apply=\"currentTopic.apply\" analytics-event=\"apply\" topic-id=\"{{currentTopic.id}}\"></topic-apply>\n\t\t</section>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<topic-subject subject=\"currentTopic.subject\" topic-name=\"currentTopic.displayName\"></topic-subject>\n\t</div>\n</article>\n";

/***/ }
]));