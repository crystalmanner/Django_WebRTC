var _ = require('underscore'),
    Marionette = require('marionette'),
    Controller = require('shared/controllers/controller'),
    View = require('./views/dashboard'),
    sdk = require('sdk'),

    // ops
    deleteVideoOp = require('app/operations/deleteVideo'),
    duplicateVideoOp = require('app/operations/duplicateVideo'),
    previewVideoOp = require('app/operations/previewVideo'),
    showWelcomeOp = require('app/operations/showWelcomeModal'),
    showStartProjectOp = require('app/operations/showStartProjectModal'),
    showChangeSourceOp = require('app/operations/showChangeSourceModal'),
    editVideoOp = require('app/operations/editVideo');


function showStartProjectOverlay(video) {

    var team = this.options.team;
    var result;
    if (video) {
        result = showChangeSourceOp({
            video: video,
            team:team
        }, {
            accessScope:team
        });
    } else {
        result = showStartProjectOp({
            team:team
        });
    }
    result.then(this.options.videos.refresh.bind(this.options.videos));
}


module.exports = Controller.extend({

    views: {
        rootView: {
            events: {
                "start_project_clicked": function(video) {
                    showStartProjectOverlay.bind(this)(video);
                },
                "video:view_clicked": function(video) {
                    previewVideoOp({
                        video: video.model
                    });
                },
                "video:edit_clicked": function(video) {
                    editVideoOp({
                        video: video.model
                    });
                },
                "video:delete": function(video) {
                    deleteVideoOp({
                        video: video.model
                    });
                },
                "video:revisions": function(video) {
                    Marionette.App.route("project/" + video.model.get('id') + "/history");
                },
                "video:duplicate": function(video) {
                    var _this = this;
                    duplicateVideoOp({
                        video: video.model
                    }, {
                        accessScope: this.options.team
                    }).then(function() {
                        _this.fetchVideos(1, _this.lastQuery, true);
                    });
                },
                "video:change_source": function(video) {
                    showStartProjectOverlay.bind(this)(video.model);
                },
                "video:analytics_clicked": function(video, id) {
                    Marionette.App.route("project/" + id + "/analytics");
                },
                "video:share_clicked": function(video, id) {
                    Marionette.App.route("project/" + id + "/distribute");
                },
                "search_field_changed": function(term) {
                    this.fetchVideoDebounced(1, term);
                },
                "paginator_clicked": function(page_no) {
                    this.fetchVideos(page_no, this.lastQuery);
                },
                "team_selected": function(team_id) {
                    if ( team_id == 'new' ) {
                        Marionette.App.route('teams');
                        return;
                    }
                    Marionette.App.route('team/' + team_id + '/projects');
                }
            }
        }
    },

    buildRootView: function() {
        this.fetchVideoDebounced = _.debounce(this.fetchVideos, 1000);

        // load main dashboar view with videos
        return new View({
            collection: this.options.videos
        });
    },

    fetchVideos: function(page, query, force) {
        var _this = this;

        if (page == this.lastPage && query == this.lastQuery && !force) {
            return;
        }
        this.lastPage = page;
        this.lastQuery = query;


        this.rootView.setPaginator(0, 0);
        this.options.videos.reset();
        return this.options.videos.fetch({
            data: {
                page: page,
                q: query
            }
        }).then(function() {
            _this.rootView.setPaginator(page, Math.ceil(_this.options.videos.count / _this.options.videos.page_size));
        });
    },

    onRootViewShow: function() {
        var _this = this;

        this.fetchVideos(1, '').then(function(){
            if (_this.options.videos.length == 0 ) {
                showWelcomeOp({team:_this.options.team});
            }
        });

        // set up teams selector
        var teamOptions = this.options.teams.map(function(team){
            return [team.get('id'), team.get('name')];
        });

        if ( sdk.currentUser.canUseFeature('teams') ) {
            teamOptions.push(['new', '- Manage Teams -']);
        }

        if ( this.options.teams.length > 1 || sdk.currentUser.canUseFeature('teams') ) {
            this.rootView.setTeams(teamOptions, this.options.team.get('id'));
        } else {
            this.rootView.setTeams(null);
        }
    },


});