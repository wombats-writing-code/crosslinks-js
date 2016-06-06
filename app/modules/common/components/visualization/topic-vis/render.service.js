'use strict';

module.exports = function RenderService($timeout, Constants, Events, TreeSearch) {

	this.draw = function(data) {
		var vis = data.vis;
		var opts = data.opts;
		var visWidth = vis.style('width').replace('px','');
		var visHeight = vis.style('height').replace('px','');

		vis.append("marker")
			.attr("id", 'topicRequisiteMarker')
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", 55)
			.attr("refY", 0)
			.attr("markerUnits", "userSpaceOnUse")
			.attr("orient", "auto")
			.attr("markerWidth", 10)
			.attr("markerHeight", 9)
			.style("stroke", "context-stroke")
			.append("path")
			.attr("d", "M0,-5L10,0L0,5")
			.style("fill", "context-fill")
			.style("opacity", "0.6");
		
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
			.attr("marker-end", "url(#topicRequisiteMarker)")
			.style("opacity", '0.5')
			.style("stroke", '#888')
			.style("stroke-width", 1);

		var nodes = vis.selectAll("circle")
			.data(data.nodes)
			.enter()
			.append("circle")
			.attr("class", "node")
			.attr("r", function(d) { return d.radius; })
			.style("fill", function(d) { return Constants.node.fill.default; })
			.style("opacity", '1' )
			.call(force.drag)
			.on("click", Events.clickHandler);

		var labels = vis.selectAll(".topic-label")
			.data(data.nodes)
			.enter()
			.append("text")
			.attr("class", "topic-label")
			.text( function(d) { return d.displayName; })

//		console.time('renderingGlobal')

		var n = 10;
			force.start();
			for (var i = n * n; i > 0; --i) force.tick();
			force.stop();


			nodes
//			.attr("cx", function(d) { d.x = Math.max(d.radius, d.x); return d.x;})
			.attr("cx", function(d) { d.x = Math.max(d.radius, Math.min(visWidth - d.radius, d.x)); return d.x; })
			.attr("cy", function(d) { d.y = Math.max(d.radius, Math.min(visHeight - d.radius, d.y)); return d.y; });

			links.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });

			labels.attr("x", function(d) { 
				if (d.fixed) return d.x - d.radius - 5;
				return d.x + d.radius + 3;
			})
			.attr("y", function(d) { 
//				if (d.fixed) return d.y - d.radius - 5;
				if (d.fixed) return d.y + d.radius + 7;
				return d.y; 
			});

//			console.timeEnd('renderingGlobal')

			return true;
			
	}
}
