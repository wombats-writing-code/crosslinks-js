webpackJsonp([6],{

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cl3.team', [])
	__webpack_require__(199);

	module.exports = {
		template: __webpack_require__(201)
	};



/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(200);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/team/team.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/team/team.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".core-team {\n  margin-bottom: 1.5em; }\n\n.team-member__picture {\n  width: 126px;\n  height: 126px;\n  max-width: 147px;\n  max-height: 147px;\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  display: block;\n  margin: 0 auto 1.5em auto; }\n\n.team-member__title {\n  color: #5a5b5c;\n  font-weight: 600;\n  margin-bottom: 0;\n  text-align: center; }\n\n.team-member__description {\n  color: #7a7b7c;\n  text-align: center; }\n", ""]);

/***/ },

/***/ 201:
/***/ function(module, exports) {

	module.exports = "<section class=\"team\">\n\t<h4 class=\"heading--bordered\">Team</h4>\n\n\t<section class=\"core-team clearfix\">\n\t\t<div class=\"small-6 medium-4 large-3 columns\">\n\t\t\t<img class=\"team-member__picture\" src=\"xxxHTMLLINKxxx0.075373129716200140.08209951100666646xxx\">\n\t\t\t<p class=\"team-member__title\">Crosslinks Mascot</p>\n\t\t\t<p class=\"team-member__description\">Your team member here</p>\n\t\t</div>\n\t</section>\n\n</section>\n";

/***/ }

});