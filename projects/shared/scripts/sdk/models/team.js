var config = require('../config'),
    Model = require('./_model'),
    Videos = require('./videos'),
    Members = require('./team_members'),
    Integrations = require('./integrations'),
    Plan = require('./plan');



var Team = Model.extend({

    children: {
        'members': Members,
        'videos': Videos,
        'integrations': Integrations,
        'plan': Plan
    },

    initialize: function() {
        Model.prototype.initialize.call(this);
    },

    urlRoot: function() {
        return config.urls.teamURL;
    },

    userIsAdmin: function() {
        var role = this.get('role');
        return role == 'admin' || role == 'owner';
    },

    userIsOwner: function() {
        var role = this.get('role');
        return role == 'owner';
    },

    userCanEdit: function() {
    	if ( !this.get('is_default_team') && this.userIsAdmin() ) {
    		return true;
    	}
    	return false;
    },
    
    canUseFeature: function(feature) {
        return this.plan.isFeatureEnabled(feature);
    },

});

module.exports = Team;