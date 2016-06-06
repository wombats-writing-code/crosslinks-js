'use strict';

module.exports = function AuthenticationService($rootScope, $http, $q, $window, Utils) {

	var endpoint = '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT';	// change this to your own endpoint
	var user = {
		isLoggedIn: false
	};
	var clientId;

	if (Utils.isLocal()) {
		user.kerberosId = 'localhostUser';
		user.kerberosAddress = 'localhostUser@mit.edu';
		user.isLoggedIn = true;
	}

	var authenticate = function() {
		return $http.get(endpoint)
		.then( function(res) {
//			console.log(res);
			return res.kerberos;
		});
	}

	var id_to_address = function(id) {
		return id + '@mit.edu';
	}

	var address_to_id = function(address) {
		return address ? address.split('@')[0] : '';
	}

	this.getUser = function() {
		// your own authentication code here, must return a Promise
		return $q.when( (user.isLoggedIn || !Utils.isHttps()) ? user :
			authenticate()
			.then(function(kerberos) {
				user.kerberosId = address_to_id(kerberos);
				user.kerberosAddress = kerberos;
				user.isLoggedIn = true;
				return user;
			})
		);
	}

}
