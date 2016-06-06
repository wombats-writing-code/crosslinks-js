'use strict';

module.exports = function middlemanInjector($q, $window, Utils) {

	var user_endpoint = '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT';		// note: this is a hack to just hit the middleman to get the kerberos

	var removeTrailingSlash = function(url) {
		if (url.substr(-1) == '/') return url.substr(0, url.length - 1);
		return url;
	}

	var handcar = function(config) {
		var credentialed = ['PUT', 'POST', 'DELETE'];
		var openService = {
			'localhost': 'https://mc3-dev.mit.edu',
			'crosslinks3-dev.mit.edu': 'https://mc3-dev.mit.edu',
			'crosslinks3-demo.mit.edu': 'https://mc3-demo.mit.edu',
			'crosslinks3.mit.edu': 'https://mc3.mit.edu',
			'crosslinks.mit.edu': 'https://mc3.mit.edu',
		};
		var touchstoneService = {
			'localhost': 'https://mc3-dev.mit.edu',
			'crosslinks3-dev.mit.edu': 'https://crosslinks3-dev.mit.edu/api/v2',
			'crosslinks3-demo.mit.edu': 'https://crosslinks3-demo.mit.edu/api/v2',
			'crosslinks3.mit.edu': 'https://crosslinks3.mit.edu/api/v2',
			'crosslinks.mit.edu': 'https://crosslinks.mit.edu/api/v2',
		};

		return {
			getDomain: function() {
//				console.log(config);
				if (_.contains(credentialed, config.method) || config.url == user_endpoint) {
					return touchstoneService[$window.location.hostname];
				} 
				return openService[$window.location.hostname];
			},
			getCredentials: function() {
				// TODO: fix;
				return false;
				if (_.contains(credentialed, config.method)) return true;
			},
			isAuthenticated: function() {
				return _.contains(credentialed, config.method) || _.contains(config.url, 'api/v2');
			},
			getName: function() {return 'handcar';}
		}
	};

	var qbank = function(config) {
		var openService = {
			'localhost': 'http://crosslinks3-dev.mit.edu/api/v2',
			'crosslinks3-dev.mit.edu': 'http://crosslinks3-dev.mit.edu/api/v2',
			'crosslinks3-demo.mit.edu': 'http://crosslinks3-demo.mit.edu/api/v2',
			'crosslinks3.mit.edu': 'http://crosslinks3.mit.edu/api/v2',
			'crosslinks.mit.edu': 'http://crosslinks.mit.edu/api/v2',
		};
		var touchstoneService = {
			'localhost': 'https://qbank-dev.mit.edu/api/v2',
			'crosslinks3-dev.mit.edu': 'https://crosslinks3-dev.mit.edu/api/v2',
			'crosslinks3-demo.mit.edu': 'https://crosslinks3-demo.mit.edu/api/v2',
			'crosslinks3.mit.edu': 'https://crosslinks3.mit.edu/api/v2',
			'crosslinks.mit.edu': 'https://crosslinks.mit.edu/api/v2',
		};
		return {
			getDomain: function() {
				if (Utils.isHttps()) return touchstoneService[$window.location.hostname];
				return openService[$window.location.hostname];
			},
			getCredentials: function() {return false;},
			isAuthenticated: function() {
				return _.contains(config.url, 'api/v2');
			},
			getName: function() {return 'qbank';}
		}
	};

	var heroku = function(config) {
		var service = {
			'localhost': 'http://localhost:3000',
			'crosslinks3-dev.mit.edu': 'https://crosslinks3-api.herokuapp.com',
			'crosslinks3-demo.mit.edu': 'https:/crosslinks3-api.herokuapp.com',
			'crosslinks3.mit.edu': 'https://crosslinks3-api.herokuapp.com',
			'crosslinks.mit.edu': 'https://crosslinks3-api.herokuapp.com',
		};
		return {
			getDomain: function() {
				return service[$window.location.hostname];
			},
			getCredentials: function() {
				return false;
			},
			isAuthenticated: function() { return false;},
			getName: function() {return 'heroku';}
		}
	};

	var host = function(config) {
		return {
			getDomain: function() {
//				return $window.location.href.split('//')[0] + '//' + $window.location.host + '/';
				return '';
			},
			getCredentials: function() {return true;},
			isAuthenticated: function() { return false;},
			getName: function() {return 'host';}
		}
	}

	var chooseStrategy = function(config) {
		if (_.contains(config.url, 'handcar/services')) {
			return handcar(config);
		} else if ( _.contains(config.url, 'assessment') || _.contains(config.url, 'resource.Bin') ) {
			return qbank(config);
		} else if (_.contains(config.url, 'crosslinks3-api')) {
			return heroku(config);
		}

		return host(config);
	}

	// appends the corrent domain to the request
	var middlemanInjector = {
		request: function(config) {
			var service = chooseStrategy(config);
			// solves the mysterious problem of why it's appending an extra trailing slash
			config.url = removeTrailingSlash(config.url);
			// point it to the correct service domain depending on the request
			config.url = service.getDomain() + config.url;
			config.withCredentials = service.getCredentials();

			return config;
		},
		response: function(response) {
			// we need to intercept the reponse to modify it
			// to return only the data and not the kerberos 
			// if it's not a GET and if it's not specifically asking for the user
			// because Cole's middleman wraps the data in an additional 'data' object

			var service = chooseStrategy(response.config);
//			if ( !Utils.isLocal() && service.isAuthenticated() && (service.getName() == 'handcar' || service.getName() == 'qbank'))  {
			if ( service.isAuthenticated() && (service.getName() == 'handcar' || service.getName() == 'qbank'))  {
				return response.data;
			}
			return response;
		}
	};

	return middlemanInjector;

}
