webpackJsonp([2],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var autoExpand = __webpack_require__(107);
	var feedbackButton = __webpack_require__(108);

	module.exports = angular.module( 'cl3.common.directives', [
	])
	.directive( 'autoExpand', autoExpand)
	.directive( 'feedbackButton', feedbackButton)


/***/ },

/***/ 107:
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

/***/ 108:
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

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(150);
	__webpack_require__(152);

	module.exports = angular.module('cl3.common.components.explanationBlock', [])
	.directive( 'explanationBlock', directive)


/***/ },

/***/ 150:
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

/***/ 151:
/***/ function(module, exports) {

	module.exports = "<div class=\"explanation-block\" ng-transclude></div>\n";

/***/ },

/***/ 152:
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

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".explanation-block {\n  background-color: rgba(170, 170, 170, 0.2);\n  padding: .5em .55em;\n  font-size: 0.8125rem;\n  /* 13px */\n  line-height: 1;\n  border-radius: 5px;\n  border-bottom-right-radius: 5px;\n  width: auto;\n  float: right;\n  position: absolute;\n  top: -.1em;\n  right: .1em; }\n", ""]);

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var topicEditController = __webpack_require__(163);
	var service = __webpack_require__(164);
	__webpack_require__(165);

	__webpack_require__(33);
	__webpack_require__(64);
	__webpack_require__(144);
	__webpack_require__(167);
	__webpack_require__(54);
	__webpack_require__(182);
	__webpack_require__(106);

	angular.module('cl3.topicEdit', [
		'cl3.common.models',
		'cl3.common.models.logging',
		'cl3.common.components.topicTab',
		'cl3.common.components.topicForm.topicFormEdit',
		'cl3.common.components.loadingText',
		'cl3.common.components.loginPrompt',
		'cl3.common.directives',
	])
	.service( 'TopicEditService', service)
	.controller( 'TopicEditController', ['$scope', '$q', '$state', '$stateParams', 'Reference', 'TopicRepository', 'SubjectRepository', 'Differ', 'Logger', 'Authentication', topicEditController ]);

	module.exports = {
		template: __webpack_require__(185),
		controller: topicEditController
	};


/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	module.exports = function TopicEditController($scope, $q, $state, $stateParams, Reference, TopicRepository, SubjectRepository, Differ, Logger, Authentication) {

		Authentication.getUser()
		.then( function(res) {
			$scope.currentUser = res;	
		});	

		$scope.isLoading = true;
		var originalCopyTopic;
		TopicRepository.get($stateParams.topicIdentifier)
		.then( function(res) {
			$scope.currentTopic = res;
			return $q.all([ $scope.currentTopic.get('reference'), $scope.currentTopic.get('learn'),$scope.currentTopic.get('apply'),
					$scope.currentTopic.get('prepare'),$scope.currentTopic.get('relate'),$scope.currentTopic.get('advance'),
					$scope.currentTopic.get('subject')
			]);
		})
		.then(function(res) {
			$scope.currentTopic.reference = Reference.createReferenceCollection($scope.currentTopic.reference);
			$scope.currentTopic.oldAlias = $scope.currentTopic.alias;
			console.log($scope.currentTopic);

			originalCopyTopic = angular.copy($scope.currentTopic);
			$scope.isLoading = false;

			TopicRepository.getTopics()
			.then(function(topics) {
				$scope.topics = topics;
			});

			SubjectRepository.getSubjects()
			.then(function(subjects) {
				$scope.subjects = subjects;
			});
		});

		var updateAndLog = function(originalTopic, topic) {
			return function asyncUpdateAndLog(propName) {

				return topic.update(propName)
				.then( function(result) {
					console.log('topic updated!');

					Logger.log({
						agentId: $scope.currentUser.kerberosId,
						resourceId: topic.id,
						action: 'edit',
						topicName: topic.displayName,
						propertyName: propName,
						current: topic[propName],
						previous: originalCopyTopic[propName]
					});
				});
			}
		}

		$scope.updateTopic = function(topic) {
			var diffs = Differ.getDifferentProperties(originalCopyTopic, topic);
			var asyncUpdateAndLog = updateAndLog(originalCopyTopic, topic);
			console.log('different props:', diffs);

			return $q.all( diffs.map(asyncUpdateAndLog) )
			.then( function(res) {
				originalCopyTopic = angular.copy(topic);

				if (_.includes(diffs, 'displayName')) { 
					$state.transitionTo('topic-read', {topicIdentifier: topic.getIdentifier()});
				}
				return res;
			});
		}

		$scope.deleteTopic = function(topic) {

			return topic.trash()
			.then( function(res) {
				Logger.log({
					agentId: $scope.currentUser.kerberosId,
					resourceId: topic.id,
					action: 'delete',
					topicName: topic.displayName,
					propertyName: 'topic',
					current: '',
					previous: topic
				});

				$state.go('topic-list');
			});
		}

	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 164:
/***/ function(module, exports) {

	'use strict';

	module.exports = function() {


	}


/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/topic-edit/topicEdit.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/topic-edit/topicEdit.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".topic-form--edit .add-row {\n  margin-bottom: 1.5em; }\n", ""]);

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(168);


	// nested component: directive for feedbackButton
	__webpack_require__(106);
	__webpack_require__(170);

	module.exports = angular.module('cl3.common.components.topicForm.topicFormEdit', [
		'cl3.common.directives',
		'cl3.common.components.topicForm',
	])
	.directive( 'topicFormEdit', directive)


/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(169),
			scope: {
				formTopic: '=',
				saveFn: '&',
				deleteFn: '&',
				topics: '=',
				subjects: '=',
			}, 
			controller: 'TopicFormController',
			link: function(scope, element, attrs, controller, transclude) {
				scope.isFormDirty = false;
				element.on('change', function(e) {
					scope.setFormChanged();
					scope.$apply();
				});
			}
		}
	}


/***/ },

/***/ 169:
/***/ function(module, exports) {

	module.exports = "<form class=\"topic-form topic-form--edit\" stop-event>\n\t<div class=\"row\">\n\t\t<div class=\"small-12 columns\">\n\t\t\t<input type=\"text\" class=\"columns contenteditable h4 topic-title\" ng-model=\"formTopic.displayName\" ng-change=\"setFormChanged()\" stop-event>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<section class=\"small-12 medium-7 columns\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Description</h6>\n\t\t\t</div>\n\t\t\t<textarea auto-expand type=\"text\" class=\"\" ng-model=\"formTopic.description\" ng-change=\"setFormChanged()\"></textarea>\n\t\t</section>\n\t\t<section class=\"small-12 medium-5 columns description-preview\">\n\t\t\t<p class=\"muted italic\">Preview</span> (here's a <a class=\"tooltip--what-is-this\" target=\"_blank\" href=\"http://www.personal.ceu.hu/tex/cookbook.html\">LaTex cheat sheet</a>)</p>\n\t\t\t<p class=\"topic-form__edit-description\" ng-bind=\"formTopic.description\" mathjax=\"formTopic.description\"></p>\t\n\t\t</section>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<ul class=\"topic-form__edit-references clearfix\">\n\t\t\t<li class=\"small-12 medium-6 columns input-with-affordance flex-container\" ng-repeat=\"member in formTopic.reference | orderBy:'icon'\">\n\t\t\t\t<img class=\"input-with-affordance__affordance favicon\" ng-src=\"https://res.cloudinary.com/crosslinks/image/upload/{{member.icon}}.png\">\n\t\t\t\t<div class=\"input-with-affordance__input\">\n\t\t\t\t\t<input class=\"contenteditable\" type=\"text\" ng-model=\"member.displayName\" placeholder=\"{{member.icon + ' page name' }}\" stop-event />\n\t\t\t\t\t<input class=\"contenteditable\" type=\"text\" ng-model=\"member.url\" placeholder=\"{{member.icon + ' URL' }}\" stop-event />\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<section class=\"small-12 medium-6 columns\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Subjects</h6>\n\t\t\t</div>\n\t\t\t<ul class=\"subjects-edit\">\n\t\t\t\t<li class=\"input-with-affordance flex-container aligned animation--enter-from-bottom animation--exit-to-left\" ng-repeat=\"subject in formTopic.subject\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance delete\" ng-click=\"formTopic.remove('subject', subject); setFormChanged()\">&cross;</span>\n\t\t\t\t\t<p class=\"\" ng-bind=\"subject.number\"></p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"topic-form__add-subject\">\n\t\t\t\t\t<search-subject class=\"search-select\" subjects=\"subjects\" upon-select=\"addSubject(subject)\" input-placeholder=\"Add subject from Crosslinks\"></search-subject>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</section>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<section class=\"small-12 medium-6 columns form-section\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Prepare</h6>\n\t\t\t\t<explanation-block class=\"\" section=\"prepare\"></explanation-block>\n\t\t\t</div>\n\n\t\t\t<ul class=\"prepare-edit\">\n\t\t\t\t<li class=\"input-with-affordance flex-container aligned animation--enter-from-bottom animation--exit-to-left\" ng-repeat=\"topic in formTopic.prepare\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance delete \" ng-click=\"formTopic.remove('prepare', topic); setFormChanged()\">&cross;</span>\n\t\t\t\t\t<p class=\"\" ng-bind=\"topic.displayName\"></p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"topic-form__add-topic\">\n\t\t\t\t\t<search-topic class=\"search-select\" topics=\"topics\" input-placeholder=\"Add topic from Crosslinks\" upon-select=\"addPrepare(topic)\"></search-topic> \n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</section>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"small-12 columns\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Learn</h6>\n\t\t\t\t<explanation-block class=\"\" section=\"learn\">Link to a helpful PDF, video, etc.</explanation-block>\n\t\t\t</div>\n\t\t\t<ul class=\"learn-edit\">\n\t\t\t\t<li class=\"input-with-affordance  flex-container animation--enter-from-bottom animation--exit-to-left \" ng-repeat=\"resource in formTopic.learn\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance delete\" ng-click=\"formTopic.remove('learn', resource); setFormChanged();\">&cross;</span>\n\t\t\t\t\t<div class=\"input-with-affordance__input\">\n\t\t\t\t\t\t<input class=\"contenteditable\" type=\"text\" ng-model=\"resource.displayName\" placeholder=\"Resource name\" stop-event />\n\t\t\t\t\t\t<input class=\"contenteditable\" type=\"text\" ng-model=\"resource.url\" placeholder=\"Resource url\" stop-event />\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"input-with-affordance flex-container\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance add\" ng-click=\"saveNewLearnResource(newLearnResource); setFormChanged();\">&plus; Add</span>\n\t\t\t\t\t<div class=\"input-with-affordance__input\">\n\t\t\t\t\t\t<input class=\"input contenteditable\" type=\"text\" ng-model=\"newLearnResource.displayName\" placeholder=\"Resource name\" stop-event>\n\t\t\t\t\t\t<input class=\"input contenteditable\" type=\"text\" ng-model=\"newLearnResource.url\" placeholder=\"Resource url\" ng-blur=\"saveNewLearnResource(newLearnResource); setFormChanged();\" stop-event>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"row form-section\">\n\t\t<section class=\"small-12 medium-6 columns\">\n                        <div class=\"five-section-heading\">\n                                <h6 class=\"five-section-heading__heading\">Relate</h6>\n                                <explanation-block class=\"\" section=\"relate\"></explanation-block>\n                        </div>\n\t\t\t<ul class=\"relate-edit\">\n\t\t\t\t<li class=\"input-with-affordance flex-container aligned animation--enter-from-bottom animation--exit-to-left\" ng-repeat=\"topic in formTopic.relate\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance delete\" ng-click=\"formTopic.remove('relate', topic); setFormChanged()\">&cross;</span>\n\t\t\t\t\t<p class=\"input-with-affordance__input\" ng-bind=\"topic.displayName\"></p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"topic-form__add-topic\">\n\t\t\t\t\t<search-topic class=\"search-select\" input-placeholder=\"Add topic from Crosslinks\" preview=\"100\" topics=\"topics\" upon-select=\"addRelate(topic)\"></search-topic>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</section>\n\n\t\t<section class=\"small-12 medium-6 columns\">\n\t\t\t<div class=\"five-section-heading\">\n                                <h6 class=\"five-section-heading__heading\">Advance</h6>\n                                <explanation-block class=\"\" section=\"advance\"></explanation-block>\n                        </div>\n\t\t\t<ul class=\"relate-edit\">\n\t\t\t\t<li class=\"input-with-affordance flex-container aligned animation--enter-from-bottom animation--exit-to-left\" ng-repeat=\"topic in formTopic.advance\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance delete\" ng-click=\"formTopic.remove('advance', topic); setFormChanged()\">&cross;</span>\n\t\t\t\t\t<p class=\"input-with-affordance__input\" ng-bind=\"topic.displayName\"></p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"topic-form__add-topic\">\n\t\t\t\t\t<search-topic class=\"search-select\" topics=\"topics\" preview=\"100\" input-placeholder=\"Add topic from Crosslinks\" upon-select=\"addAdvance(topic)\"></search-topic>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</section>\n\t</div>\n\n\t<section class=\"row form-section\">\n\t\t<div class=\"small-12 columns\">\n\t\t\t<div class=\"five-section-heading\">\n                                <h6 class=\"five-section-heading__heading\">Apply</h6>\n                                <explanation-block section=\"apply\">Link to an interesting application of this topic in real-life</explanation-block>\n                        </div>\n\t\t\t<ul class=\"apply-edit\">\n\t\t\t\t<li class=\"input-with-affordance flex-container animation--enter-from-bottom animation--exit-to-left\" ng-repeat=\"resource in formTopic.apply\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance delete\" ng-click=\"formTopic.remove('apply', resource); setFormChanged();\">&cross;</span>\n\t\t\t\t\t<div class=\"input-with-affordance__input\">\n\t\t\t\t\t\t<input class=\"contenteditable\" type=\"text\" ng-model=\"resource.displayName\" placeholder=\"Resource name\" stop-event>\n\t\t\t\t\t\t<input class=\"contenteditable\" type=\"text\" ng-model=\"resource.url\" placeholder=\"Resource url\" stop-event>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"input-with-affordance flex-container\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance add\" ng-click=\"saveNewApplyResource(newApplyResource); setFormChanged();\">&plus; Add</span>\n\t\t\t\t\t<div class=\"input-with-affordance__input\">\n\t\t\t\t\t\t<input class=\"input contenteditable\" type=\"text\" ng-model=\"newApplyResource.displayName\" placeholder=\"Resource name\" stop-event>\n\t\t\t\t\t\t<input class=\"input contenteditable\" type=\"text\" ng-model=\"newApplyResource.url\" placeholder=\"Resource url\" ng-blur=\"saveNewApplyResource(newApplyResource); setFormChanged();\" stop-event>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</section>\n\n\t<div class=\"row add-row\" ng-show=\"!showDeleteConfirmation\">\n\t\t<div class=\"medium-4 medium-push-8 columns\">\n\t\t\t<button class=\"button button--default \" feedback-button\n\t\t\tdefault-when=\"getFormDirty()\" progress-when=\"inProgress\" success-when=\"submitSuccess\" error-when=\"submitError\"\n\t\t\tdefault-label=\"Save\" initial-label=\"No changes to save\" progress-label=\"Saving...\" success-label=\"Saved!\" error-label=\"Error. Not saved.\" \n\t\t\tng-disabled=\"!getFormDirty() || submitSuccess || submitError || inProgress\"\n\t\t\t type=\"button\" ng-click=\"saveTopic(formTopic)\">\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"small-12 medium-4 large-4 medium-push-8 columns\" ng-show=\"!showDeleteConfirmation\">\n\t\t\t<button type=\"button\" class=\"button button--warning\" ng-click=\"showDeleteConfirmation = true;\">Delete Topic</button> \n\t\t</div>\n\t\t<div ng-show=\"showDeleteConfirmation\">\n\t\t\t<p class=\"warning columns text-right\"> Are you sure? This can't be undone!</p>\n\t\t\t<div class=\"small-12 medium-4 medium-push-4 columns\">\n\n\t\t\t\t<button class=\"button button--warning right\" feedback-button\n\t\t\t\tdefault-when=\"!deleteProgress\" success-when=\"deleteSuccess\" error-when=\"submitError\"  progress-when=\"deleteProgress\"\n\t\t\t\tdefault-label=\"Yes, delete forever\" progress-label=\"Deleting...\" success-label=\"Deleted!\" error-label=\"Error. Not deleted.\" \n\t\t\t\tng-disabled=\"deleteProgress || submitError\"\n\t\t\t\t type=\"button\" ng-click=\"deleteTopic(formTopic)\">Yes, delete forever.</button>\n\t\t\t</div>\n\t\t\t<div class=\"small-12 medium-4 columns\">\n\t\t\t\t<button type=\"button\" class=\"button button--default \" ng-click=\"showDeleteConfirmation = false;\">Cancel</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</form>\n";

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	
	var topicFormService = __webpack_require__(171);
	var topicFormController = __webpack_require__(172);
	__webpack_require__(173);


	// nested component: directive for feedbackButton
	__webpack_require__(106);
	__webpack_require__(149);
	__webpack_require__(23);
	__webpack_require__(175);

	module.exports = angular.module('cl3.common.components.topicForm', [
		'cl3.common.directives',
		'cl3.common.components.searchTopic',
		'cl3.common.components.explanationBlock',
		'cl3.common.components.searchSubject'
	])
	.service( 'TopicForm', topicFormService)
	.controller( 'TopicFormController', ['$scope', '$state', 'TopicForm', topicFormController])


/***/ },

/***/ 171:
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		
		var isFormDirty = false;
		
		this.getFormDirty = function() {
			return isFormDirty;
		};

		this.setFormDirty = function(value) {
			isFormDirty = value;
			return isFormDirty;
		};
		
	}


/***/ },

/***/ 172:
/***/ function(module, exports) {

	'use strict';

	module.exports = function ($scope, $q, TopicForm) {
		
		$scope.getFormDirty = TopicForm.getFormDirty;

		// --- for the search selects
		$scope.addSubject = function(item) { 
			$scope.formTopic.add('subject', item);
		}
		$scope.addPrepare = function(topic) {
			$scope.formTopic.add('prepare', topic);
		}       
		$scope.addRelate = function(topic) {
			$scope.formTopic.add('relate', topic);
		}       
		$scope.addAdvance = function(topic) {
			$scope.formTopic.add('advance', topic);
		}
		// ---	

		$scope.newLearnResource = {};
		$scope.newApplyResource = {};

		$scope.saveNewLearnResource = function(resource) {
			$scope.formTopic.add('learn', resource);
			$scope.newLearnResource = {};
		}

		$scope.saveNewApplyResource = function(resource) {
			$scope.formTopic.add('apply', resource);
			$scope.newApplyResource = {};
		}

		$scope.setFormChanged = function() {
			TopicForm.setFormDirty(true);
			$scope.submitSuccess = false;
			$scope.submitError = false;
			$scope.deleteSuccess = false;
		}

		$scope.saveTopic = function(topic) {
			TopicForm.setFormDirty(false), $scope.inProgress = true;

			$scope.saveFn({topic: topic})
			.then( function(res) {
				$scope.inProgress = false, $scope.submitSuccess = true;
	//			console.log(res);
			}, function(err) {
				$scope.inProgress = false, $scope.submitError = true;
				
				console.log('err: ', err);
			});
		}

		$scope.deleteTopic = function(topic) {
			TopicForm.setFormDirty(false), $scope.deleteProgress = true;

			$scope.deleteFn({topic: topic})
			.then( function(res) {
				$scope.deleteProgress = false, $scope.deleteSuccess = true;
			}, function(err) {
				$scope.deleteProgress = false, $scope.submitError = true; 
				console.log('err: ', err);
			});
		}
	}


/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic-form/topicForm.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/topic-form/topicForm.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".topic-form__edit-description {\n  white-space: pre-wrap; }\n\n.topic-form__add-topic, .topic-form__add-subject {\n  list-style: none; }\n\n.topic-form .five-section-heading__heading {\n  color: #62717D; }\n\n.topic-form__edit-references, .subjects-edit, .prepare-edit, .learn-edit, .relate-edit, .apply-edit {\n  padding-left: 0;\n  margin-bottom: 3em; }\n\n.reference__icon {\n  width: 20px;\n  height: 20px; }\n\n.input-with-affordance {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.input-with-affordance__affordance {\n  flex-shrink: 0;\n  -webkit-flex-shrink: 0;\n  margin-top: .33em; }\n\n.input-with-affordance.aligned .input-with-affordance__affordance {\n  margin-top: 0; }\n\n.input-with-affordance__input {\n  flex-grow: 1;\n  -webkit-flex-grow: 1; }\n\n.input-with-affordance__affordance.favicon {\n  height: 1.5em;\n  margin-right: .4em; }\n\n.input-with-affordance__affordance.delete {\n  text-align: center;\n  width: 44px;\n  font-size: 1.5em;\n  color: #A31F34;\n  cursor: pointer; }\n\n.input-with-affordance__affordance.delete:hover {\n  color: #C03C50; }\n\n.input-with-affordance__affordance.add {\n  width: 44px;\n  padding-top: .23em;\n  color: #A31F34;\n  cursor: pointer; }\n\n.input-with-affordance__affordance.add:hover {\n  color: #C03C50; }\n", ""]);

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(176);
	var service = __webpack_require__(178);
	var searchSubjectController = __webpack_require__(179);
	__webpack_require__(180);

	module.exports = angular.module('cl3.common.components.searchSubject', [
	])
	.directive( 'searchSubject', directive)
	.service( 'SearchSubjectService', ['$window', service])
	.controller( 'SearchSubjectController', ['$scope', 'SearchSubjectService', searchSubjectController])


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(177),
			scope: {
				subjects: '=',
				inputPlaceholder: '@',
				uponSelect: '&',
			}, 
			controller: 'SearchSubjectController',
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

/***/ 177:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search-subject-wrapper\">\n\t<input class=\"input search-subject__input\" ng-model=\"searchQuery\" ng-change=\"search(subjects, searchQuery);\" placeholder=\"{{inputPlaceholder}}\" stop-event> \n\t<ul class=\"search-subject__dropdown\" ng-show=\"searchQuery.length > 0\">\n\t\t<li class=\"search-subject__dropdown-item clearfix\" ng-repeat=\"result in searchResults\" ng-click=\"selectItem(result);\">\n\t\t\t<p class=\"search-subject__dropdown-item__title small-12 columns\"> <span ng-bind=\"result.displayName || result.name\"></span><span ng-bind=\"': ' + result.number || result.description\"></span></span> </p>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },

/***/ 178:
/***/ function(module, exports) {

	'use strict';

	module.exports = function($window, Utils) {

		this.searchSubjects = function(array, query) {
			 if (array && query) {
				query = query.toLowerCase();
				if (array) {
					return array.filter( function(item) {
						// MIT subjects have a name and number property
						// you'll need to write our own logic for matching if you're searching through non-MIT subjects 

						var matchesName = item.name.toLowerCase().indexOf(query) > -1;
						var matchesNumber = item.number.indexOf(query) == 0;
						return matchesName || matchesNumber;
					})
				}
			}
			return [];
		}

	}


/***/ },

/***/ 179:
/***/ function(module, exports) {

	'use strict';

	module.exports = function ($scope, SearchSubjectService) {

		$scope.selectItem = function(arg) {
			$scope.uponSelect({subject: arg});
			$scope.searchResults = [];
			$scope.searchQuery = '';
		}

		$scope.search = function(array, query) {
			$scope.searchResults = SearchSubjectService.searchSubjects(array, query);
		}

	}


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/search-subject/searchSubject.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/common/components/search-subject/searchSubject.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".search-subject-wrapper {\n  position: relative;\n  width: 100%; }\n\n.search-subject__input {\n  background-image: url(\"/images/search--dark.png\");\n  background-position: 0 50%;\n  padding-left: 2em;\n  background-size: 1em;\n  background-repeat: no-repeat; }\n\n.search-subject__dropdown {\n  position: absolute;\n  border: 1px solid #cacbcc;\n  box-shadow: 0px 1px 1px rgba(202, 202, 203, 0.8);\n  list-style: none;\n  padding-left: 0;\n  width: 100%;\n  z-index: 1; }\n\n.search-subject__dropdown-item {\n  cursor: pointer;\n  width: 100%;\n  padding-top: .75em;\n  padding-bottom: .75em;\n  background: #fff;\n  z-index: 1; }\n\n.search-subject__dropdown-item:hover, .search-subject__dropdown-item.js-on-hover {\n  background-color: #F2F0E6; }\n\n.search-subject__dropdown-item__title {\n  color: #A31F34;\n  height: 100%;\n  margin-bottom: 0; }\n\n.search-subject__dropdown-item__description {\n  height: 100%;\n  margin-bottom: 0; }\n", ""]);

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var directive = __webpack_require__(183);

	module.exports = angular.module('cl3.common.components.loginPrompt', [
	])
	.directive( 'loginPrompt', directive)


/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function() {
		return {
			restrict: 'E',
			template: __webpack_require__(184),
			transclude: true,
			scope: {
				user: '='
			},
			link: function(scope, element, attrs, controller) {}
		}
	}


/***/ },

/***/ 184:
/***/ function(module, exports) {

	module.exports = "\n<p class=\"row animation--pulse\" ng-if=\"!user\">Checking your login status...</p>\n<p class=\"row\" ng-if=\"!user.isLoggedIn\" ng-transclude></p>\n";

/***/ },

/***/ 185:
/***/ function(module, exports) {

	module.exports = "<topic-tab></topic-tab>\n\n<login-prompt user=\"currentUser\">\n\t<span>To edit this topic, you need to first login (must have MIT Kerberos).</span>\n</login-prompt>\n\n<div ng-show=\"currentUser.isLoggedIn\">\n\t<div class=\"row\">\t\n\t\t<loading-text ng-show=\"isLoading\"></loading-text>\n\t</div>\n\t<topic-form-edit class=\"animation--fade\" ng-show=\"!isLoading\" form-topic=\"currentTopic\" save-fn=\"updateTopic(topic)\" delete-fn=\"deleteTopic(topic)\" topics=\"topics\" subjects=\"subjects\"></topic-form-edit>\n</div>\n";

/***/ }

});