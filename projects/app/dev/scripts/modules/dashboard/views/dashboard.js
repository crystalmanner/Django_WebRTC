var _ = require('underscore'),
    $ = require('jquery'),
    Marionette = require('marionette'),
    VideoView = require('./video'),
    template = require('./dashboard.html');


var view = Marionette.CompositeView.extend({

    className: "dashboard page",

    childView: VideoView,

    childViewContainer: ".videos",

    childViewEventPrefix: "video",

    template: template,

    behaviors: {
        LoadingIndicator: {}
    },

    ui: {
        'paginator': '.paginator',
        'teams': '.vp_team_selector select',
        'teams_section': '.vp_team_selector'
    },

    events: {
        'click .upload': function() {
            this.trigger("start_project_clicked");
        },
        'keyup .vp_search input': function(e) {
            this.trigger('search_field_changed', $(e.currentTarget).val());
        },
        'click .paginator .button': function(e) {
            this.trigger('paginator_clicked', $(e.currentTarget).index() + 1);
        },
        'change .vp_team_selector select': function(e) {
            this.trigger('team_selected', $(e.currentTarget).val());
        }
    },

    setPaginator: function(page, num_pages) {
        var p = this.$el.find('.paginator');
        p.html('');
        if (num_pages <= 1) {
            return;
        }
        while (num_pages) {
            var current = page == num_pages ? ' current ' : '';
            var b = '<div class = "button paginator ' + current + '">' + num_pages + '</div> ';
            p.prepend(b);
            num_pages--;
        }
    },

    setTeams: function(options, defaultValue) {
        if ( options == null ) {
            this.ui.teams_section.remove();
            return;
        }

        var teams = this.ui.teams;
        _.each(options, function(value){
            var option = $('<option></option>').val(value[0]).html(value[1]);
            if (value[0] == defaultValue ) option.attr('selected', true);
            teams.append(option);
        });

    }

});
module.exports = view;