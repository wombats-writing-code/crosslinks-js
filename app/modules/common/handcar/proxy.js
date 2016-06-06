'use strict';

module.exports = function HandcarProxyService($http, $q, HandcarConstants, ResponseProcessor, RequestProcessor, Authentication) {

	var getObjectiveChildOfType = function(objectiveId, type) {
		return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/' + objectiveId + '/children?cognitiveprocessid=' + type)
		.then( function(res) {
			return res.data[0];
		});
	}

	var getObjectiveActivity = function(objectiveId) {
		return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/' + objectiveId + '/activities')
		.then( function(res) {
			return res.data[0];		// we only use the first activity in Crosslinks
		});
	}

	// wrapper function to get data from response instead of having to do res.data
	var promisePluck = function(promise, prop) {
		return promise
		.then( function(res) {
			return res[prop];
		});
	}

	// need a wrapper function around this to feed into $q.all 
	var getAsset = function(assetId) {
		return $http.get(HandcarConstants.ASSET.endpoint + '/' + assetId)
		.then( function(res) {
			return res.data;		
		});
	}

	var updateSaveAsset = function(item) {
		if (item.id) {
			return $http.put(HandcarConstants.ASSET.endpoint, item)
			.then( function(res) {
				item.id = res.data.id;
				return res.data;
			});
		} else {
			return $http.post(HandcarConstants.ASSET.endpoint, item)
			.then( function(res) {
				item.id = res.data.id;
				return res.data;
			});
		}
	}

	// Stamps out an empty objective for POSTing 
	var getBloomObjectiveTemplate = function(type) {
		return {
			id: '',
			cognitiveProcessId: type,
			genusTypeId: HandcarConstants.BLOOM_TYPES.genusTypeId
		};
	}
	var getActivityTemplate = function(topicId, bloomObjectiveId, type) {
		var activityLearnTemplate = {
			objectiveId: bloomObjectiveId,
			genusTypeId: HandcarConstants.ACTIVITY.genusTypeId,
			displayName: {text: type + ' activity for topic ' + topicId + ' (activity of bloomTypeChild ' + bloomObjectiveId + ')'},
		};
	};

	var manager = {
		'getPrepare': function(topic) {
			return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/' + topic.id + '/requisites')
			.then( function(res) {
				return res.data.map( ResponseProcessor.unpack('TOPIC') );
			});
		},
		'getRelate': function(topic) {
			return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/' + topic.id + '/relatedobjectives' + '/' + HandcarConstants.genusType.related)
			.then( function(res) {
				return res.data.map( ResponseProcessor.unpack('TOPIC') );
			});
		},
		'getAdvance': function(topic) {
			return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/' + topic.id + '/dependents')
			.then( function(res) {
				return res.data.map( ResponseProcessor.unpack('TOPIC') );
			});
		},

		'getLearn': function(topic) {
			return getObjectiveChildOfType(topic.id, HandcarConstants.BLOOM_TYPES.LEARN)
			.then( function(child) {
//				console.log('child of bloom type: ', res);
				return child ? getObjectiveActivity(child.id) : null;
			})
			.then( function(activity) {
//				console.log('activity of bloom-type objective: ', activity);
				return activity ? $q.all( activity.assetIds.map(getAsset) ) : [];
			})
			.then( function(assets) {
//				console.log('assets of activity: ', assets);
				return assets.map( ResponseProcessor.unpack('ASSET') );
			});
		},

		'getApply': function(topic) {
			return getObjectiveChildOfType(topic.id, HandcarConstants.BLOOM_TYPES.APPLY)
			.then( function(child) {
				return child ? getObjectiveActivity(child.id) : null;
			})
			.then( function(activity) {
				return activity ? $q.all( activity.assetIds.map(getAsset) ) : [];
			})
			.then( function(assets) {
				return assets.map( ResponseProcessor.unpack('ASSET') );
			});
		},

		'getSubject': function(topic) {
			return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/' + topic.id + '/extension')
			.then( function(res) {
				return ResponseProcessor.unpack('SUBJECT')(res.data);
			});
		},

		'getReference': function(topic) {
			return getObjectiveActivity(topic.id)
			.then( function(activity) {
//				console.log(activity);
				return activity ? $q.all( activity.assetIds.map(getAsset) ) : [];
			})
			.then( function(assets) {
				return assets.map(ResponseProcessor.unpack('ASSET'));
			});
		},

		'getAssess': function(topic) {
			var kerberosAddress;

			return Authentication.getUser()
			.then( function(res) {
				kerberosAddress = res.kerberosAddress;
				return $http({
					url: '/assessment/banks/' + HandcarConstants.ASSESSMENT.bankId + '/assessmentsoffered/' + topic.assessmentId + '/assessmentstaken/',
					method: 'POST',
					headers: { 'X-Api-Proxy': kerberosAddress},
				});
			})
			.then(function(res) { 
				var takenId = res.data.id;
//				console.log('got takenId res from POST call:', takenId);
				return $http({
					method: 'GET',
					headers: { 'X-Api-Proxy': kerberosAddress},
					url: '/assessment/banks/' + HandcarConstants.ASSESSMENT.bankId + '/assessmentstaken/' + takenId + '/questions/?page=all' 
				});
			})              
			.then( function(res) {
				var qs = res.data.data.results;
//				console.log(qs);
				return qs.map(ResponseProcessor.unpack('ASSESSMENT'));
			})
		},

		// PUT
		'updateTopic': function(item) {
			var packed = RequestProcessor.pack('TOPIC')(item);

			return $http.put(HandcarConstants.OBJECTIVE.endpoint, packed)
			.then( function(res) {
				return res.data;
			});
		},

		'updatePrepare': function(data) {
			var idsOnly = _.pluck(data.prepare, 'id');

			return $http.put(HandcarConstants.OBJECTIVE.endpoint + '/'+ data.id + '/requisiteids', {ids: idsOnly})
			.then( function(res) {
				return res.data.ids;
			}, function(err) {
				return err;
			});
		},
		'updateRelate': function(data) {
			var idsOnly = _.pluck(data.relate, 'id');

			return $http.put(HandcarConstants.OBJECTIVE.endpoint + '/'+ data.id + '/relatedobjectiveids' + '/' + HandcarConstants.genusType.related, {ids: idsOnly})
			.then( function(res) {
				return res.data.ids;
			}, function(err) {
				return err;
			});
		
		},
		'updateAdvance': function(data) {
			var idsOnly = _.pluck(data.advance, 'id');

			return $http.put(HandcarConstants.OBJECTIVE.endpoint + '/'+ data.id + '/dependentids', {ids: idsOnly})
			.then( function(res) {
				return res.data.ids;
			}, function(err) {
				return err;
			});
		},

		'updateLearn': function(data) {
			var topicId = data.id;
			var resources = data.learn;
			var packedResources = resources.map( RequestProcessor.pack('ASSET') );
			var bloomTypeChild, activityLearn;
			var childIds = {
				ids: []
			};

			return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/' + topicId + '/children')
			.then( function(res) {
				childIds.ids = _.pluck(res.data, 'id');
				bloomTypeChild = _.find( res.data, {'cognitiveProcessId': HandcarConstants.BLOOM_TYPES.LEARN});

				// this block ensures there is a bloom type objective child
				return $q.when( bloomTypeChild ? bloomTypeChild : promisePluck($http.post(HandcarConstants.OBJECTIVE.endpoint, getBloomObjectiveTemplate(HandcarConstants.BLOOM_TYPES.LEARN)), 'data') );
			})
			.then( function(res) {
				// this block ensures the bloom type objective child is attached to the topic
				bloomTypeChild = res;
				console.log('resolved a bloomTypeChildLearn instance:', bloomTypeChild);

				childIds.ids = _.union(childIds.ids, [bloomTypeChild.id]);

				return $http.put(HandcarConstants.OBJECTIVE.endpoint + '/' + topicId + '/childids', childIds);	
			})
			.then( function(res) {
				console.log('updated childids of topic with bloom type learn ', res.data);
				return getObjectiveActivity(bloomTypeChild.id);
			})
			.then( function(res) {
				// this block ensures that there is an activity, and that the activity is attached to the bloom type child
				activityLearn = res;

				return $q.when( activityLearn ? activityLearn : promisePluck($http.post(HandcarConstants.ACTIVITY.endpoint + '/', getActivityTemplate(topicId, activityLearn.id, HandcarConstants.BLOOM_TYPES.LEARN)),'data') );
			})
			.then( function(res) {
				// this block saves the resource assets
				activityLearn = res;
				console.log('resolve a activityLearn instance:', res);
				return $q.all( _.map( packedResources, updateSaveAsset) );
			})
			.then( function(res) {
				// this block assigns the assetIds of the newly-saved assets to the activity
				// and updates the activity
				_.forEach( res, function(item, index) {
					resources[index].id = item.id;
				});
				activityLearn.assetIds = _.pluck(resources, 'id');

				return $http.put(HandcarConstants.ACTIVITY.endpoint + '/', activityLearn);
			})
			.then( function(res) {
				console.log('updated learn and apply activities with updated assetIds', res);
				return data.learn;
			});

		},

		'updateApply': function(data) {
			var topicId = data.id;
			var resources = data.apply;
			var packedResources = resources.map( RequestProcessor.pack('ASSET') );
			var bloomTypeChild, activityApply;
			var childIds = {
				ids: []
			};

			return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/' + topicId + '/children')
			.then( function(res) {
				childIds.ids = _.pluck(res.data, 'id');
				bloomTypeChild = _.find( res.data, {'cognitiveProcessId': HandcarConstants.BLOOM_TYPES.APPLY});

				// this block ensures there is a bloom type objective child
				return $q.when( bloomTypeChild ? bloomTypeChild : promisePluck($http.post(HandcarConstants.OBJECTIVE.endpoint, getBloomObjectiveTemplate(HandcarConstants.BLOOM_TYPES.APPLY)), 'data') );
			})
			.then( function(res) {
				// this block ensures the bloom type objective child is attached to the topic
				bloomTypeChild = res;
				console.log('resolved a bloomTypeChildApply instance:', bloomTypeChild);

				childIds.ids = _.union(childIds.ids, [bloomTypeChild.id]);

				return $http.put(HandcarConstants.OBJECTIVE.endpoint + '/' + topicId + '/childids', childIds);	
			})
			.then( function(res) {
				console.log('updated childids of topic with bloom type learn ', res.data);
				return getObjectiveActivity(bloomTypeChild.id);
			})
			.then( function(res) {
				// this block ensures that there is an activity, and that the activity is attached to the bloom type child
				activityApply = res;

				return $q.when( activityApply ? activityApply : promisePluck($http.post(HandcarConstants.ACTIVITY.endpoint + '/', getActivityTemplate(topicId, activityLearn.id, HandcarConstants.BLOOM_TYPES.APPLY)),'data') );
			})
			.then( function(res) {
				// this block saves the resource assets
				activityApply = res;
				console.log('resolve a activityApply instance:', res);
				return $q.all( _.map( packedResources, updateSaveAsset) );
			})
			.then( function(res) {
				// this block assigns the assetIds of the newly-saved assets to the activity
				// and updates the activity
				_.forEach( res, function(item, index) {
					resources[index].id = item.id;
				});
				activityApply.assetIds = _.pluck(resources, 'id');

				return $http.put(HandcarConstants.ACTIVITY.endpoint + '/', activityApply);
			})
			.then( function(res) {
				console.log('updated apply activities with updated assetIds', res);
				return data.learn;
			});

		},

		'updateSubject': function(data) {
			var packed = data.subject.map( RequestProcessor.pack('SUBJECT') );

			return $http.put(HandcarConstants.OBJECTIVE.endpoint + '/' + data.id + '/extension', {recordProperties: packed})
			.then( function(res) {
				return res.data;
			});
		},
		
		'updateReference': function(data) {
			var updatedAssetIds;
			var packed = data.reference.filter( function(ref) {
				return ref.displayName; 
			}).map( RequestProcessor.pack('ASSET') );

			// save the actual assets
			return $q.all( _.map( packed, function(item) {
					if (item.id) {
						return $http.put(HandcarConstants.ASSET.endpoint, item)
						.then( function(res) {
							item.id = res.data.id;
							return res.data;
						});
					} else {
						return $http.post(HandcarConstants.ASSET.endpoint, item)
						.then( function(res) {
							item.id = res.data.id;
							return res.data;
						});
					}
				})
			)		// then get the child activity of this topic
			.then( function(res) {
				updatedAssetIds = _.pluck(res, 'id');	
				return getObjectiveActivity(data.id);
			})
			.then( function(activity) {
				if (activity) {
					activity.assetIds = updatedAssetIds;
					return $http.put(HandcarConstants.ACTIVITY.endpoint, activity);
				} else {
					var newActivity = {
						objectiveId: data.id,
						genusTypeId: HandcarConstants.ACTIVITY.genusTypeId,
						displayName: {text: 'reference activity for topic ' + data.id},
					};
					return $http.post(HandcarConstants.ACTIVITY.endpoint, newActivity)
					.then( function(res) {
						res.data.assetIds = updatedAssetIds;
						return $http.put(HandcarConstants.ACTIVITY.endpoint, res.data);
					});

				}
			})
			.then( function(res) {
				return data.references;
			}, function(err) {
				console.error( 'error occured in updating topic wiki and wolfram links');
			});

		},
		
		// POST (save)
		'saveTopic': function(item) {
			var packed = RequestProcessor.pack('TOPIC')(item);

			return $http.post(HandcarConstants.OBJECTIVE.endpoint, packed)
			.then( function(res) {
				return res.data;
			});
		},

		'saveLearnApply': function(data) {
			var topicId = data.id;
			var resources = data.learn.concat(data.apply);
			var packedResources = resources.map( RequestProcessor.pack('ASSET') );
			var activityLearn, activityApply;

			var bloomTypeChild = {
				id: '',
				cognitiveProcessId: HandcarConstants.BLOOM_TYPES.LEARN,
				genusTypeId: HandcarConstants.BLOOM_TYPES.genusTypeId
			};
			var bloomTypeChildApply = {
				id: '',
				cognitiveProcessId: HandcarConstants.BLOOM_TYPES.APPLY,
				genusTypeId: HandcarConstants.BLOOM_TYPES.genusTypeId
			};

			return $q.all([ $http.post(HandcarConstants.OBJECTIVE.endpoint, bloomTypeChild), $http.post(HandcarConstants.OBJECTIVE.endpoint, bloomTypeChildApply) ])
			.then( function(res) {
				bloomTypeChild = res[0].data;
				bloomTypeChildApply = res[1].data;
				var childIdsData = {
					ids: [bloomTypeChild.id, bloomTypeChildApply.id]
				};
				return $http.put(HandcarConstants.OBJECTIVE.endpoint + '/' + topicId + '/childids', childIdsData);	
			})
			.then( function(res) {
//				console.log('updated childids of topic with bloom type children learn and apply', res.data);

				var newActivityOfLearn = {
					objectiveId: bloomTypeChild.id,
					genusTypeId: HandcarConstants.ACTIVITY.genusTypeId,
					displayName: {text: 'Learn activity for topic ' + topicId + ' (activity of bloomTypeChild ' + bloomTypeChild.id + ')'},
				};
				var newActivityOfApply = {
					objectiveId: bloomTypeChildApply.id,
					genusTypeId: HandcarConstants.ACTIVITY.genusTypeId,
					displayName: {text: 'Apply activity for topic ' + topicId + ' (activity of bloomTypeChild ' + bloomTypeChildApply.id + ')'},
				};
				return $q.all([ $http.post(HandcarConstants.ACTIVITY.endpoint + '/', newActivityOfLearn), $http.post(HandcarConstants.ACTIVITY.endpoint + '/', newActivityOfApply) ])
			})
			.then( function(res) {
//				console.log('created an activity each for bloom learn and bloom apply', res);
				activityLearn = res[0].data;
				activityApply = res[1].data;
				return $q.all( _.map( packedResources, updateSaveAsset) );
			})
			.then( function(res) {
				_.forEach( res, function(item, index) {
					resources[index].id = item.id;
				});
				var updatedAssetIdsLearn = _.pluck(data.learn, 'id');
				var updatedAssetIdsApply = _.pluck(data.apply, 'id');
				activityLearn.assetIds = updatedAssetIdsLearn;
				activityApply.assetIds = updatedAssetIdsApply;
				
				return $q.all([ $http.put(HandcarConstants.ACTIVITY.endpoint + '/', activityLearn), $http.put(HandcarConstants.ACTIVITY.endpoint + '/', activityApply) ]);
			})
			.then( function(res) {
//				console.log('updated learn and apply activities with updated assetIds', res);
				return [data.learn, data.apply];	
			});
		},

		'saveAlias': function(data) {
			return $http.post(HandcarConstants.endpoints.alias + '/' + data.id + '/' + data.alias)
			.then( function(res) {
				return res.data;
			});
		},

		'saveLogEntry': function(item) {
			var packed = RequestProcessor.pack('LOGENTRY')(item);

			return $http.post(HandcarConstants.endpoints.log, packed)
			.then( function(res) {
				return res.status;
			});  
		},


		// DELETE

		'deleteTopic': function(data) {
			return $http.delete(HandcarConstants.OBJECTIVE.endpoint + '/' + data.id + '?cascade=true' )
			.then( function(res) {
				console.log('topic deleted: ', res.data);
				return res.data;
			});
		},

		'updateAlias': function(data) {
			return $http.delete(HandcarConstants.endpoints.alias + '/' + data.id + '/mc3-objective%3A' + data.oldAlias + '%40USER-ALIAS')
			.then( function(res) {
				return $http.post(HandcarConstants.endpoints.alias + '/' + data.id + '/' + data.newAlias)
			})
			.then( function(res) {
				return res.data;
			});
		},

		'deleteAlias': function(data) {
			console.log(data);
			return $http.delete(HandcarConstants.endpoints.alias + '/' + data.id + '/mc3-objective%3A' + data.alias + '%40USER-ALIAS')
			.then( function(res) {
				return res.data;
			});
		},

		// this isn't used at the moment
		'getRequisiteHierarchy': function() {
			return $http.get(HandcarConstants.OBJECTIVE.endpoint + '/beginners?genustypeid=' + HandcarConstants.TOPIC.genusTypeId)
			.then( function(res) {
				return res.data;
			});
		}
		
	}

	this.execute = function(command, property, data) {
		var fn = command + property.charAt(0).toUpperCase() + property.slice(1);
		if (!manager[fn]) throw "Function name " + fn + " doesn't exist in HandcarProxy"
		return manager[fn] && manager[fn](data);
	}

}
