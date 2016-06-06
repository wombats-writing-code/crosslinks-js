webpackJsonp([5],{

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

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var editListController = __webpack_require__(196);

	__webpack_require__(64);
	__webpack_require__(57);
	__webpack_require__(182);

	angular.module('cl3.editList', [
		'cl3.common.models.logging',
		'cl3.common.components.logEntry',
		'cl3.common.components.loginPrompt',
	])
	.controller( 'EditListController', ['$scope', 'LogRepository', 'Authentication', editListController ]);

	module.exports = {
		template: __webpack_require__(197),
		controller: editListController
	};


/***/ },

/***/ 196:
/***/ function(module, exports) {

	'use strict';

	module.exports = function ($scope, LogRepository, Authentication) {

		Authentication.getUser()
		.then( function(res) {
			$scope.currentUser = res;

			return LogRepository.getHistories(100);
		})
		.then( function(res) {
			$scope.logEntries = res;
			$scope.searchResults = $scope.logEntries.slice();
		})
		.catch( function(err) {
			console.log(err);
		});

		$scope.searchLogEntries = function(array, query) {
			$scope.searchResults = LogRepository.searchLogEntries(array, query);
		}

		$scope.isArray = angular.isArray;

	}


/***/ },

/***/ 197:
/***/ function(module, exports) {

	module.exports = "<h4 class=\"bold heading--bordered\"> All Edits </h4>\n\n<login-prompt user=\"currentUser\">\n\t<span>To see who has edited, you need to first login (must have MIT Kerberos).</span>\n</login-prompt>\n\n<div ng-if=\"currentUser.isLoggedIn\">\n\t<div class=\"row\">\n\t\t<spinner ng-show=\"!logEntries\"></spinner>\n\t</div>\n\n\t<div class=\"row\" ng-show=\"logEntries\">\n\t\t<input class=\"input input--search margin--bottom\" type=\"search\" placeholder=\"Search by user or topic\" ng-model=\"query\" ng-change=\"searchLogEntries(logEntries, query)\">\n\t</div>\n\n\t<ol class=\"row \">\n\t\t<li ng-repeat=\"entry in searchResults | orderBy:'timestamp':true \">\n\t\t\t<log-entry entry=\"entry\"></log-entry>\n\t\t</li>\n\t</ol>\n</div>\n";

/***/ }

});