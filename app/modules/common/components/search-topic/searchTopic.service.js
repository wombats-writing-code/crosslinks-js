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
