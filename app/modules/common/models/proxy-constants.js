'use strict';

module.exports = {
	TOPIC: {
		genusTypeId: 'mc3-objective%3Amc3.learning.topic%40MIT-OEIT',
		endpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/objectives',
	},
	BLOOM_TYPES: {
		APPLY: 'mc3.grade.system.cognitive.process.crosslinks%3Amc3.grade.bloom.apply%40MIT-OEIT',
		LEARN: 'mc3.grade.system.cognitive.process.crosslinks%3Amc3.grade.bloom.learn%40MIT-OEIT',
		genusTypeId: 'mc3-objective%3Amc3.learning.generic.outcome%40MIT-OEIT',
	},
	OUTCOME: {
		genusTypeId: 'mc3-objective%3Amc3.learning.generic.outcome%40MIT-OEIT',
	},
	SUBJECT: {
		
	},
	ASSET: {
		endpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/assets',
		genusTypeId: "mc3-asset%3Amc3.learning.asset.url%40MIT-OEIT",
	},
	ASSET_CONTENT: {
		genusTypeId: 'mc3-asset-content%3Amc3.learning.asset.content.unknown%40MIT-OEIT'
	},
	ACTIVITY: {
		endpoint: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/activities',
		genusTypeId: 'mc3-activity%3Amc3.learning.activity.generic%40MIT-OEIT'
	},
	endpoints: {
		objective: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT/objectives',
		
		user: '/handcar/services/learning/objectivebanks/mc3-objectivebank%3A1%40MIT-OEIT',		// note: this is a hack to just hit the middleman to get the kerberos
		log: '/handcar/services/logging/logs/mc3-log%3A2%40MIT-OEIT/logentries',
		alias: '/handcar/services/id/aliases',
		relationship: '/handcar/services/relationship/families/mc3-family%3A1%40MIT-OEIT/relationships',
	},
	genusType: {
		related: 'mc3-relationship%3Amc3.lo.2.lo.related%40MIT-OEIT',
		requisite: 'mc3-relationship%3Amc3.lo.2.lo.requisite%40MIT-OEIT',
		activity: 'mc3-activity%3Amc3.learning.activity.generic%40MIT-OEIT',
		log: {
			info: "mc3-logentry%3Amc3.logentry.info%40MIT-OEIT",
			create: "mc3-logentry%3Amc3.logentry.create%40MIT-OEIT",
			read: "mc3-logentry%3Amc3.logentry.read%40MIT-OEIT",
			update: "mc3-logentry%3Amc3.logentry.update%40MIT-OEIT",
			delete: "mc3-logentry%3Amc3.logentry.delete%40MIT-OEIT"
		}
	},
	ASSESSMENT: {
		bankId: 'assessment.Bank%3A555f6760e7dde0cbd8c10c75%40bazzim.MIT.EDU'
	},
	priorityType: {
		fatal: 'mc3-log-entry-priority-type%3Amc3.logging.priority.1.fatal%40MIT-OEIT',
		error: 'mc3-log-entry-priority-type%3Amc3.logging.priority.2.error%40MIT-OEIT',
		warning: 'mc3-log-entry-priority-type%3Amc3.logging.priority.3.warning%40MIT-OEIT',
		info: 'mc3-log-entry-priority-type%3Amc3.logging.priority.4.info%40MIT-OEIT',
		debug: 'mc3-log-entry-priority-type%3Amc3.logging.priority.5.debug%40MIT-OEIT',
		trace: 'mc3-log-entry-priority-type%3Amc3.logging.priority.6.trace%40MIT-OEIT',
		none: 'mc3-log-entry-priority-type%3Amc3.logging.priority.0.none%40MIT-OEIT'
	},
	defaultKerberos: {
		address: 'dummyTest@mit.edu',
		id: 'dummyTest'
	}
}
