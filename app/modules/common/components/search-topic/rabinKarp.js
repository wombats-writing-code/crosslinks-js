'use strict';

module.exports = function RabinKarpService() {

	//check if query is exactly the same as text starting at index
	var isTextEqual = function(query, text, index) {
		for (var i=0; i<query.length; i++) {
			if (text[index + i] != query[i]) return false;
		}
		return true;
	};

	//hash the part of q from index start to index end-1
	var hashFunc = function(q, start, end) {
		var hashed = 0;
		if (q.length == 0) return hashed;

		//hash each character x at index i with the hash function 31**i*x
		//index 0 is index end-1
		for (var i = start; i < end; i++) {
			//((hashed << 5) - hashed) = 31*hashed
			//bit shifting is faster than multiplying by 31
			hashed = ((hashed << 5) - hashed) + q.charCodeAt(i);
			//make sure hashed is a 32-bit integer (for proper bit shifting)
			hashed |= 0;
		}
		return hashed;
	};

	 var rollingHash = function(length, hashed, text, index) {
		var prevCharCode = text.charCodeAt(index);
		var nextCharCode = text.charCodeAt(index + length);

		//solve for the hash value of the very first character of hashed
		for (var i = 0; i < length; i++) {
			prevCharCode = ((prevCharCode << 5) - prevCharCode);
			prevCharCode |= 0;
		}
		//roll the hash: subtract first character and add the next
		hashed = ((hashed << 5) - hashed) + nextCharCode - prevCharCode;
		hashed |= 0;
		
		return hashed;
	};

	var appendSpace = function(hashedText, length) {
		//add " " to the beginning of the originally hashed text
		var space = " "

		//solve for hash value of " "
		var hashSpace = space.charCodeAt(0);
		hashSpace |= 0;
		//solve for 31**length*hashSpace
		for (var i = 0; i < length; i++) {
			hashSpace = ((hashSpace << 5) - hashSpace);
			hashSpace |= 0;
		}
		hashedText = hashedText + hashSpace;
		hashedText |= 0;

		return hashedText;
	};

	/*
		* Think about each of your 3 functions: hashFunc, rollingHash, appendSpace:
		 - In each function, you're doing a little of A and the common function of B (actually generating the hash number)
		   --> refactor B into its own function, and see if you can sweep the remaining into the main block below

		* The same thing applies to the main block below, where you're again doing a "someText << 5 - someText) + someCharacter
		   --> use your standalone function for B
		
	*/


	this.rabinKarp = function(q, text) {
		var hashQ = hashFunc(q, 0, q.length);
		var hashText = hashFunc(text, 0, q.length);

//		if (_.includes(text,'nyquist')) debugger;

		// if hashes match, then it's a match (ignoring very remote chance of collision)
		if (hashQ == hashText) return true;

		//add a space to only search the beginning of succeeding words
		// luwenh: what do you mean by this? what do you want to accomplish with this line + the next few lines?
		hashQ = appendSpace(hashQ, q.length);

		//hashQ increased in length, so add next character to hashText
		hashText = ((hashText << 5) - hashText) + text.charCodeAt(q.length);
		hashText |=  0;

		var maxIndex = text.length - q.length - 1;
		//compare q to each part of text
		for (var i = 0; i <= maxIndex; i++) {
			if (hashQ == hashText && isTextEqual(q, text, i+1)) return true;
			hashText = rollingHash(q.length+1, hashText, text, i);
		}

		return false;
	}
}
