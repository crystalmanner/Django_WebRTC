var $ = require('jquery'),
    analytics = require('analytics'),
    BaseModule = require('../module'),
    Controller = require('./controller'),
    sdk = require('sdk'),
    DashboardComponent = require('./components/dashboard');


/*
 * Local Storage token
 */
var key = "currentTeam";
var getSavedTeam = function() {
    try {
        return $.localStorage.get(key);
    } catch(_){};
    return false;
};
var setSavedTeam = function(team) {
    try {
        $.localStorage.set(key, team);
    } catch(_){};
};

module.exports = BaseModule.extend({

    appRoutes: {
        "dashboard": "showDashboardView",
        "team/:id/projects": "showDashboardView",
        "dashboard_new": "showNewDashboardView"
    },

    showNewDashboardView: function() {
        this.setComponent(DashboardComponent);
    },

    showDashboardView: function(team_id) {
        analytics.trackPage("library");

        var _this = this;
        sdk.teams.fetch().then(function(){

            var team;

            if (!team_id) {
                team_id = getSavedTeam();
            }

            // decide which team should be selected
            if (team_id) {
                team = sdk.teams.get(team_id);
            }

            // first team with projects
            if (!team) {
                team=sdk.teams.find(function(t) {
                    return t.get('stats').number_of_projects > 0;
                });
            }

            // first team (own projects)
            if (!team) {
                team=sdk.teams.at(0);
            }

            setSavedTeam(team.get('id'));

             _this.setController(new Controller({
                team:team,
                videos:team.videos,
                teams:sdk.teams
            }));
        });
        
    }

});