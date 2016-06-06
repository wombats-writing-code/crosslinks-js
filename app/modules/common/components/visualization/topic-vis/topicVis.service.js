'use strict';

module.exports = function TopicVisService(Utils, TreeSearch, Alias) {

	var decorateRoot = function(root, width, height) {
		root.radius = 27;
		root.fixed = true;
		root.x = 4*root.radius;
		root.y = root.radius;
		return root;
	}

	var decorateNode = function(node) {
		node.displayName = node.displayName.text;
		node.radius = 9;
		node.alias = Alias.createAlias(node.displayName);
		return node;
	}

	this.layout = function(data) {
		var svgEl = d3.select('#topic-vis');
		var visWidth = svgEl.style('width').replace('px','');
		var visHeight = document.getElementById('topic-vis-height-reference').offsetHeight;
		svgEl.style('height', visHeight);

		var nodes = [];
		var traverse = function traverse(startNode) {
			nodes.push(startNode);
			var children = startNode.childNodes;
			for (var i=0; i<children.length; i++) {
				traverse(children[i]);
			}
		}

		traverse(data.root);
		nodes = _.unique(nodes, 'id');
		nodes = _.map( nodes, decorateNode); 
		nodes[0] = decorateRoot(nodes[0], visWidth, visHeight);

		data.edges = _.filter( data.edges, function(edge) {
			// this is not a mistake. we need to reverse this because of mc3's convention
			var doesSourceNodeExist = _.find(nodes, {'id': edge.destinationId});
			var doesTargetNodeExist = _.find(nodes, {'id': edge.sourceId});
			edge.source = doesSourceNodeExist;
			edge.target = doesTargetNodeExist;
			return doesSourceNodeExist && doesTargetNodeExist;
		});

		data.vis = svgEl;
		data.nodes = nodes;
		data.opts = {
			gravity: 0.08,
			linkStrength: 0.07,
			linkDistance: 100,
			charge: -220,
			chargeDistance: 100,
		};

		return data;	
	}
}
