'use strict';

module.exports = function uniqueRequestAwareInterceptor($q, $timeout) {

	var requestDict = {};
	var isRequestToHandcar = function(url) {
		return url.indexOf('handcar/services') > -1;
	}
	var checkIsDuplicated = function(url) {
		return requestDict[url];
	}
	var EMPTY_BODY = 'This request is already in progress, rejected by rejectDuplicate()', EMPTY_HEADERS = {}, DUPLICATED_REQUEST_STATUS_CODE = 420;

	var rejectDuplicate = function(requestConfig) {
		var deferred = $q.defer();
		var response = {
			data: EMPTY_BODY,
			headers: EMPTY_HEADERS,
			status: DUPLICATED_REQUEST_STATUS_CODE,
			config: requestConfig
		}
		deferred.reject(response);
		return deferred.promise;
	}

	// I'm not sure a timeout is the best solution. We need to delete old stored responses because things might've changed.

	var interceptor = {
		request: function(requestConfig) {
			if (isRequestToHandcar(requestConfig.url) && requestConfig.method == 'GET') {
				if ( checkIsDuplicated(requestConfig.url) ) {
					return rejectDuplicate(requestConfig);
				} 
				var deferred = $q.defer();
				requestDict[requestConfig.url] = deferred;
				return requestConfig;
			}

			return requestConfig;
		},
		requestError: function(rejection) {
			console.log('requestError called');
			return {
				transformRequest: [],
				transformResponse: [],
				method: 'GET',
				url: 'https://api.github.com/users/naorye/repos',
				headers: {
					Accept: 'application/json, text/plain, */*'
				}
			};
		},
		response: function(response) {
			var requestUrl = response.config.url;
			if (isRequestToHandcar(requestUrl) && response.config.method == 'GET') {
//				console.log(response);
				requestDict[requestUrl].resolve(response);
				$timeout( function() {
					delete requestDict[response.config.url];
				}, 20000);	
			}
			return response;
		},
		responseError: function(response) {
//			console.log('responseError called: ', response.config.url);	
			$timeout( function() {
//				console.log('deleting ' + response.config.url );
				delete requestDict[response.config.url];
			}, 20000);	
			return requestDict[response.config.url].promise;
		}
	};

	return interceptor;

}
