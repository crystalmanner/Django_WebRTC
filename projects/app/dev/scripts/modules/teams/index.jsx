var app = require('app'),
    BaseModule = require('../module'),
    s = require('strings')('integrations'),
    
    teams = require('sdk').teams,
    Marionette = require('marionette'),

    // components
    TeamsPage = require('./teams'),
    TeamPage = require('./team');


var getQueryVariable= function(variable){
    variable = variable.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp(variable + "=([^&]*)"),
        results = regex.exec(location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

module.exports = BaseModule.extend({
    
    appRoutes: {

    	// teams overview
        "teams": "showTeamsPage",

        "team/:id": "showTeamPage"

    },


    showIntegrationResults: function(){
        console.log(this);
        var result = getQueryVariable('integration_result');

        if ( result == 'success' ) {
            this.app.modals.alert(s('success_modal'));
        } 

        if ( result == 'failure' ) {
            this.app.modals.alert(s('error_modal'));
        }
    },

    showTeamsPage: function() {
        this.showIntegrationResults();
        this.setComponent(TeamsPage, {teams:teams});
    },

    showTeamPage: function(team_id) {
        this.showIntegrationResults();
        var _this = this;
        teams.fetchById(team_id).then(function(team){
            _this.setComponent(TeamPage, {team:team});
        });
    }
    
});


