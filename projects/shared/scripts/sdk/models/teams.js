var config = require('../config'),
    Collection = require('./_collection'),
    Team = require('./team');

var Integrations = Collection.extend({

    model: Team,

    url: function() {
        return config.urls.teamURL;
    },

    comparator: function(item) {

    	var level = 40;
    	if ( item.get('role') == 'admin' ) level = 30;
    	if ( item.get('role') == 'owner' ) level = 20;
    	if ( item.get('is_default_team') ) level = 10;

        return [level, item.get("name")];
    },
 
});

module.exports = Integrations;