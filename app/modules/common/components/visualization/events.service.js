'use strict';

module.exports = function EventsService($timeout, $state, Constants) {

	function Events() {}

	var isNodeOnPath = function(baseNode, nodeToCheck) {
		var isSameNode = (baseNode.id == nodeToCheck.id);
		if (isSameNode) return true;

		return baseNode.prepareChain.nodesOnPath.indexOf(nodeToCheck.id) > -1;
	}

	var isEdgeOnPath = function(baseNode, edgeToCheck) {
		if (edgeToCheck.linkType != 'requisite') return false;
		var flag = false;

		var source = edgeToCheck.source;
		var target = edgeToCheck.target;
		flag = baseNode.prepareChain.linksOnPath.indexOf(edgeToCheck.id) > - 1;
		return flag;
	}

	Events.mouseoverHandler = function(mouseoverData, i) {

		d3.selectAll('.topic-label')	
		.filter( function(d) {
			return isNodeOnPath(mouseoverData, d);
		})
		.transition().duration(300)
		.style("opacity", Constants.label.opacity.hover)

		// makes irrelevant nodes fade out
		d3.selectAll('.node')
		.filter( function(d) {
			return !isNodeOnPath(mouseoverData, d);
		})
		.style("fill", Constants.node.fill.inactive)
		.style("opacity", Constants.node.opacity.inactive)

		// makes irrelevant edges fade out
		d3.selectAll('.edge')
		.filter( function(d) {
			return !isEdgeOnPath(mouseoverData, d); 
		})
		.style("stroke", Constants.link.stroke.inactive)
		.style("opacity", Constants.link.opacity.inactive)

		// makes irrelevant edges fade in
		d3.selectAll('.edge')	
		.filter( function(d) {
			return isEdgeOnPath(mouseoverData, d); 
		})
		.style("stroke", Constants.link.stroke.hover)
		.style("opacity", 1)

		// fades in the relevant nodes
		d3.select('.node')
		.filter( function(d) {
			return isNodeOnPath(mouseoverData, d);
		})
		.style("opacity", 1)
	}

	Events.mouseoutHandler = function(mouseoutData, i) {

		d3.selectAll('.edge')	
		.style("opacity", Constants.link.opacity.default)

		d3.selectAll('.topic-label')	
		.transition().duration(200)
		.style("opacity", Constants.label.opacity.default)

		d3.selectAll('.node')
		.style("opacity", Constants.node.opacity.default)
		.style("fill", function(d) { return d.fill || Constants.node.fill.default; })

	}

	Events.clickHandler = function(d) {
		if (d3.event.defaultPrevented) return; // click suppressed
		
		$state.go('topic-read', {topicIdentifier: d.alias});	
	}

	return Events;
}
