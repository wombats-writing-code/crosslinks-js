webpackJsonp([8],{

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(205);

	//module.exports = angular.module('cl3.faqs', [])

	angular.module('cl3.faqs', [])
	module.exports = {
		template: __webpack_require__(207),
	}


/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(206);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/faqs/faqs.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/crosslinks/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/crosslinks/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/crosslinks/app/modules/faqs/faqs.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, ".faq__question {\n  font-weight: 600;\n  font-style: italic; }\n", ""]);

/***/ },

/***/ 207:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n\t<h4 class=\"bold heading--bordered\">FAQs</h4>\n\n\t<ul>\n\t\t<li class=\"faq\">\n\t\t\t<p class=\"faq__question\">I want to add a topic, but I'm afraid I don't know enough about it. Am I qualified to edit? </p>\n\t\t\t<p class=\"faq__answer\">Absolutely. You don't have to fill out the entire topic at once. In fact, you can just link to a really good resource that you want to share with your classmates. In that case, you can just add the topic, maybe link to that resource, and leave it for others to contribute more.</p> \n\t\t</li>\n\n\t\t<li class=\"faq\">\n\t\t\t<p class=\"faq__question\">I'm confused about the Five sections.</p>\n\t\t\t<p class=\"faq__answer\">\n\t\t\t\tThe Five sections is a way of organizing topics and learning materials. Check out the detailed explanation <a href=\"/about\">here</a>.\n\t\t\t</p>\n\t\t</li>\n\n\t\t<li class=\"faq\">\n\t\t\t<p class=\"faq__question\">Is the material on Crosslinks accurate? </p>\n\t\t\t<p class=\"faq__answer\">The links you see here have been published by reputable sources; most of it comes from within MIT. The descriptions are either quoted directly from course material, Wolfram, Wikipedia or in a few cases, written directly by Prof. Haynes Miller or Prof. Karen Willcox.</p>\n\t\t</li>\n\n\t\t<li class=\"faq\">\n\t\t\t<p class=\"faq__question\">Something is wrong on the site. The site isn't working properly. I have a suggestion!</p>\n\t\t\t<p class=\"faq__answer\">Please email us at <a href=\"mailto:crosslinks-hello@mit.edu\">crosslinks-hello@mit.edu</a>! </p>\n\t\t</li>\n\t</ul>\n\n</div>\n";

/***/ }

});