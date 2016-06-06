'use strict';

module.exports = function RenderService($timeout, Constants, Events, TickWorker, TreeSearch) {

	var visWidth, visHeight, vis;
	var opts = {
		gravity: 0.2,
		linkStrength: 0.8,
		linkDistance: 60,
		charge: -200,
		chargeDistance: 270,
	};

	// this is called from the directive
	this.draw = function(data) {
		vis = data.vis;
		visWidth = vis.style('width').replace('px','');
		visHeight = vis.style('height').replace('px','');
//		console.log('height of vis:', visHeight);
		opts = data.opts || opts;
		
		var force = d3.layout.force()
			.nodes(data.nodes)
			.links(data.edges)
			.gravity(opts.gravity)
			.linkStrength(opts.linkStrength)
			.linkDistance(opts.linkDistance)
			.charge(opts.charge)
			.chargeDistance(opts.chargeDistance)
			.friction(.95)
			.size([visWidth, visHeight])
			.start();

		var links = vis.selectAll("line")
			.data(data.edges)
			.enter()
			.append("line")
			.attr("class", "edge")
			.attr("marker-end", "url(#requisiteMarker)")
			.style("opacity", Constants.link.opacity.default)
			.style("stroke", Constants.link.stroke.default)
			.style("stroke-width", 1);


		var labelNodes = _.map(data.nodes, function(node) {
			return _.assign(node, {isDummy: true});
		});

		var combined = _.flatten([data.nodes, labelNodes]);

		var nodes = vis.selectAll("circle")
			.data(data.nodes)
			.enter()
			.append("circle")
			.attr("class", "node")
			.attr("r", function(d) { return d.radius; })
			.style("fill", function(d) { 
				d.fill = Constants.node.fill.default; 

				if (d.isInactive) {
					d.fill = Constants.node.fill.grayed; 
				} else if (d.isHighlight) {
					d.fill = Constants.node.fill.default; 
				}
				return d.fill;
			})
/*
			.style("opacity", function(d) { 
				d.opacity = Constants.node.opacity.default; 
				if (d.isInactive) {
					d.opacity = Constants.node.opacity.inactive; 
				}
				return d.opacity;
			})
*/
			.on("mouseenter", Events.mouseoverHandler)
			.on("mouseleave", Events.mouseoutHandler)
			.on("click", Events.clickHandler);

		var labels = vis.selectAll(".topic-label")
			.data(data.nodes)
			.enter()
			.append("text")
			.attr("class", "topic-label")
			.text( function(d) { return d.displayName; })
			.style("opacity", Constants.label.opacity.default)

		var n = 100;
		force.start();
		for (var i = n * n; i > 0; --i) force.tick();
		force.stop();

		links.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

		nodes
		.attr("cx", function(d) { return d.x = Math.max(d.radius, Math.min(visWidth - d.radius, d.x)); })
		.attr("cy", function(d) { return d.y = Math.max(d.radius, Math.min(visHeight - d.radius, d.y)); });

		labels.attr("x", function(d) { return d.x + d.radius + 3; })
		.attr("y", function(d) { return d.y; });

		return true;
	}

	this.update = function(data) {
		var nodes = vis.selectAll("circle")
			.style("fill", function(d) { 
				if (d.isInactive) {
					d.fill = Constants.node.fill.grayed; 
				}
				if (d.isHighlight) {
					d.fill = Constants.node.fill.default; 
				}
				return d.fill;
			})
/*
			.style("opacity", function(d) { 
				if (d.isInactive) {
					d.opacity = Constants.node.opacity.inactive; 
				}
				return d.opacity;
			});
*/
	}

	this.exit = function(data) {
		var nodes = vis.selectAll("circle, line, text")
			.remove()

	}
}
