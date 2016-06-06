'use strict';

module.exports = function TopicFactory($q, Proxy, Alias, Subject, Reference, Resource) {

	function Topic(data) {
		if (data) {
			this.id = data.id;
			this.displayName = data.displayName.text;
			this.description = data.description.text;
			this.assessmentId = data.assessmentId;
			this.genusTypeId = data.genusTypeId;
			this.alias = Alias.createAlias(data.displayName.text);
		} else {
			this.id = '';
			this.displayName = 'New topic title';
			this.description = 'This topic needs a description!';
		}
		this.prepare = [];
		this.relate = [];
		this.advance = [];
		this.learn = [];
		this.apply = [];
		this.subject = [];
	}

	var property_strategies = {
		'displayName': {
			'update': 'topic'
		},
		'description': {
			'update': 'topic'
		},
		'prepare': {
			'get': function(data) {
				return new Topic(data);
			},
			'update': 'prepare'
		},
		'relate': {
			'get': function(data) {
				return new Topic(data);
			},
			'update': 'relate'
		},
		'advance': {
			'get': function(data) {
				return new Topic(data);
			},
			'update': 'advance'
		},
		'learn': {
			'get': function(data) {
				return Resource.createResource(data);
			},
			'update': 'learn'
		},
		'apply': {
			'get': function(data) {
				return Resource.createResource(data);
			},
			'update': 'apply'
		},
		'reference': {
			'get': function(data) {
				return Reference.createReference(data);
			},
			'update': 'reference'
		},
		'subject': {
			'get': function(data) {
				return Subject.createSubject(data);
			},
			'update': 'subject'
		}
	};

	Topic.prototype = {
		get: function(prop) {
			var self = this;
			var build = property_strategies[prop]['get'];

			return Proxy.execute("get", prop, self)
			.then( function(res) {
				self[prop] = res.map( build );
				return self[prop];
			});
		},

		update: function(prop) {
			var self = this;
			var cmd = property_strategies[prop]['update'];
			if (prop == 'displayName') {
				self.alias = Alias.createAlias(self.displayName);
				Proxy.execute("update", "alias", self);
			}
			
			return Proxy.execute("update", cmd, self)
			.then( function(res) {
				return self;
			});
		},

		save: function() {
			this.alias = Alias.createAlias(this.displayName);
			var self = this;
			
			return Proxy.execute("save", "topic", self)
			.then( function(res) {
				self.id = res.id;
				return $q.all([ Proxy.execute("update", "prepare",self), Proxy.execute("update", "relate", self), Proxy.execute("update", "advance", self), 
						Proxy.execute("save", "learnApply", self), Proxy.execute("update", "subject", self), Proxy.execute("update", "reference", self),
						Proxy.execute("save", "alias", self)
				]);
			})
			.then( function(res) {
				return self;
			});

		},

		trash: function() {
			var self = this;
			return $q.all([Proxy.execute("delete", "topic", self), Proxy.execute("delete", "alias", self) ])
			.then( function(res) {
				console.log(res);
				return res[0];
			});
		},
		add: function(prop, model) {
			this[prop] = this[prop] || [];
			this[prop].push(model);
			return this;
			
		},
		remove: function(prop, model) {
			if (this[prop]) {
				_.remove(this[prop], model);
			}
			return this;
		},
		getIdentifier: function() {
			return this.alias || this.id;
		},
		// convenience methods
		getCourseTags: function() {
			return _.unique(_.map(this.subject, function(s) {
				return s.getCourseNumber();
			}));
		},
		getSubjectTags: function() {
			return _.unique( _.pluck(this.subject, 'number'));
		}
	};

	Topic.constants = {
		endpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/objectives',
		genusTypeId: 'mc3-objective%3Amc3.learning.topic%40MIT-OEIT',
		extensionEndpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/objectiveextensions'
	};

	Topic.fetch = function(topicId) {
		return Proxy.execute('get', 'topic', topicId);
	}

	Topic.createTopic = function(data) {
		return new Topic(data);
	}


	return Topic;
}

