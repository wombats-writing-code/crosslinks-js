webpackJsonp([4],{

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

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var topicAddController = __webpack_require__(190);

	// nested component: topic-form
	__webpack_require__(191);
	__webpack_require__(182);
	__webpack_require__(33);
	__webpack_require__(64);

	angular.module('cl3.topicAdd', [
		'cl3.common.components.topicForm.topicFormAdd',
		'cl3.common.components.loginPrompt',
		'cl3.common.models',
		'cl3.common.models.logging',
	])
	.controller( 'TopicAddController', ['$scope', '$state', 'Topic', 'Reference', 'TopicRepository', 'SubjectRepository', 'Logger', 'Authentication', topicAddController ]);

	module.exports = {
		template: __webpack_require__(194),
		controller: topicAddController
	};


/***/ },

/***/ 190:
/***/ function(module, exports) {

	'use strict';

	module.exports = function($scope, $state, Topic, Reference, TopicRepository, SubjectRepository, Logger, Authentication) {

		Authentication.getUser()
		.then( function(res) {
			$scope.currentUser = res;
		});

		SubjectRepository.getSubjects()
		.then( function(subjects) {
			$scope.subjects = subjects;
		});

		$scope.newTopic = Topic.createTopic();
		$scope.newTopic.reference = Reference.createReferenceCollection($scope.newTopic.reference);

		$scope.saveTopic = function(topic) {

			return topic.save()
			.then( function(res) {
				console.log('new topic saved:', res);

				Logger.log({
					agentId: $scope.currentUser.kerberos,
					resourceId: res.id,
					action: 'create',
					topicName: res.displayName,
					propertyName: 'topic',
					current: topic,
					previous: ''
				});

				$state.go('topic-read', {topicIdentifier: topic.getIdentifier()});
			});
		}

	}



/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	
	var directive = __webpack_require__(192);


	// nested component: directive for feedbackButton
	__webpack_require__(106);
	__webpack_require__(170);

	module.exports = angular.module('cl3.common.components.topicForm.topicFormAdd', [
		'cl3.common.directives',
		'cl3.common.components.topicForm',
	])
	.directive( 'topicFormAdd', directive)


/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function () {
		return {
			restrict: 'E',
			template: __webpack_require__(193),
			scope: {
				formTopic: '=',
				saveFn: '&',
				deleteFn: '&',
				topics: '=',
				subjects: '=',
				topicAdd: '@',
			}, 
			controller: 'TopicFormController',		// share controller with topic-form-edit
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

/***/ 193:
/***/ function(module, exports) {

	module.exports = "<form class=\"topic-form topic-form--edit\" stop-event>\n\t<div class=\"row\">\n\t\t<div class=\"small-12 columns\">\n\t\t\t<input type=\"text\" class=\"columns contenteditable h4 topic-title\" ng-model=\"formTopic.displayName\" ng-change=\"setFormChanged()\" stop-event>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<section class=\"small-12 medium-6 columns\">\n\t\t\t<div class=\"five-section-heading\">\n\t\t\t\t<h6 class=\"five-section-heading__heading\">Subjects</h6>\n\t\t\t</div>\n\t\t\t<ul class=\"subjects-edit\">\n\t\t\t\t<li class=\"input-with-affordance flex-container aligned animation--enter-from-bottom animation--exit-to-left\" ng-repeat=\"subject in formTopic.subject\">\n\t\t\t\t\t<span class=\"input-with-affordance__affordance delete\" ng-click=\"formTopic.remove('subject', subject); setFormChanged()\">&cross;</span>\n\t\t\t\t\t<p class=\"\" ng-bind=\"subject.number\"></p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"topic-form__add-subject\">\n\t\t\t\t\t<search-subject class=\"search-select\" subjects=\"subjects\" upon-select=\"addSubject(subject)\" input-placeholder=\"Add subject from Crosslinks\"></search-subject>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</section>\n\t</div>\n\n\t<div class=\"row add-row\" ng-show=\"!showDeleteConfirmation\">\n\t\t<div class=\"medium-4 medium-push-8 columns\">\n\t\t\t<button class=\"button button--default \" feedback-button\n\t\t\tdefault-when=\"getFormDirty()\" progress-when=\"inProgress\" success-when=\"submitSuccess\" error-when=\"submitError\"\n\t\t\tdefault-label=\"Save\" progress-label=\"Saving...\" success-label=\"Saved!\" error-label=\"Error. Not saved.\" \n\t\t\tng-disabled=\"submitSuccess || submitError || inProgress\"\n\t\t\t type=\"button\" ng-click=\"saveTopic(formTopic)\">Save\n\t\t\t</button>\n\t\t</div>\n\t\t\n\t</div>\n\n</form>\n";

/***/ },

/***/ 194:
/***/ function(module, exports) {

	module.exports = "<h4 class=\"heading--bordered\">Add a New Topic</h4>\n\n<login-prompt user=\"currentUser\">\n\t<span>To create a new topic, you need to first login (must have MIT Kerberos).</span>\n</login-prompt>\n\n<topic-form-add class=\"\" ng-if=\"currentUser.isLoggedIn\" subjects=\"subjects\" form-topic=\"newTopic\" save-fn=\"saveTopic(topic)\"></topic-form-add>\n";

/***/ }

});