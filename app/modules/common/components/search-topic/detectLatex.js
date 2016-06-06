'use strict';

module.exports = function DetectLatexService() {

	var isMissingClosingMarker = function(closing,  text) {
		var re = new RegExp('\\' + closing, 'g');
		var markerCounts = (text.match(re) || []).length;
		return (markerCounts % 2 !== 0);
	}
	

	this.getLatexPositions = function(marker, text) {
		var opening = marker[0], closing = marker[1];
		var first = text.indexOf(opening);

		if (first !== -1) {
			var last = text.lastIndexOf(closing);

			if (last == -1 || first == last) {
				return ['max', first - 1];

			} else if (opening == closing && isMissingClosingMarker(closing, text)) {
				return ['max', last - opening.length];

			} else {
				return ['min', last + closing.length];
			}
		}

		return ['max', text.length];
	}

}

