'use strict';

module.exports = function GlobalVisService(Utils, TreeSearch) {

	var kernel = function(x) {
		if (x <=5) return 4;
		if (x<=15) return 8;
		if (x<=50) return 15;
		return 27;
	}

	this.layout = function(data) {
		var svgEl = d3.select('#global-vis');

		data.nodes = _.map(data.nodes, function(d) {
			d.prepareChain = TreeSearch.getPrepareChain(d.id, data.edges);
			d.advanceChain = TreeSearch.getAdvanceChain(d.id, data.edges);
			d.numAdvance = d.advanceChain.nodesOnPath.length;
			d.radius = kernel(d.numAdvance);
			return d;	
		});

		data.edges = _.filter( data.edges, function(edge) {
			// this is not a mistake. we need to reverse this because of mc3's convention
			var doesSourceNodeExist = _.find(data.nodes, {'id': edge.destinationId});
			var doesTargetNodeExist = _.find(data.nodes, {'id': edge.sourceId});
			edge.source = doesSourceNodeExist;
			edge.target = doesTargetNodeExist;
			return doesSourceNodeExist && doesTargetNodeExist;
		});

		data.vis = svgEl;

		return data;	
	}
}
