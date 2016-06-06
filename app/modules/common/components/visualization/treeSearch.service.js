'use strict';

module.exports = function TreeSearchService() {

	// note that sourceId and destinationId are counter-intuitive due to mc3 convention
	var getParents = function(nodeId, links_array) {
		return _.filter(links_array, function(link) {
			return link.sourceId == nodeId && link.linkType == 'requisite';
		});
	}

	this.getPrepareChain = function(startNodeId, links_array) {
//		if (startNodeId.indexOf('3777') > -1 ) {console.log('hi'); debugger;}
		var linksOnPath = [];
		var nodesOnPath = [];

		var closed = {};
		var recurse = function recurse(nodeId) { 
			var results = getParents(nodeId, links_array);
			var nodesToCheck = _.pluck(results, 'destinationId');

			nodesOnPath = nodesOnPath.concat(nodesToCheck);
			linksOnPath = linksOnPath.concat( _.pluck(results, 'id') );

			for (var i=0; i<nodesToCheck.length; i++) {
				if (closed[nodesToCheck[i]]) continue;

				closed[nodesToCheck[i]] = true;
				recurse(nodesToCheck[i]);		
			}
		}

		recurse(startNodeId);
		linksOnPath = _.unique(linksOnPath);
		nodesOnPath = _.unique(nodesOnPath);

		return {
			linksOnPath: linksOnPath,
			nodesOnPath: nodesOnPath,
		}
	}


	var getChildren = function(nodeId, links_array) {
		return _.filter(links_array, function(link) {
			return link.destinationId == nodeId && link.linkType == 'requisite';
		});
	}

	this.getAdvanceChain = function(startNodeId, links_array) {
		var linksOnPath = [];
		var nodesOnPath = [];

		var closed = {};
		var traverse = function traverse(nodeId) {
			var results = getChildren(nodeId, links_array);
			var nodesToCheck = _.pluck(results, 'sourceId');

			nodesOnPath = nodesOnPath.concat(nodesToCheck);
			linksOnPath = linksOnPath.concat( _.pluck(results, 'id') );

			for (var i=0; i<nodesToCheck.length; i++) {
				if (closed[nodesToCheck[i]]) continue;

				closed[nodesToCheck[i]] = true;
				traverse(nodesToCheck[i]);		
			}
		}

		traverse(startNodeId);
		linksOnPath = _.unique(linksOnPath);
		nodesOnPath = _.unique(nodesOnPath);
		return {
			linksOnPath: linksOnPath,
			nodesOnPath: nodesOnPath,
		}
	}
}



