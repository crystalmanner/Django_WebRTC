var React = require('react'),
	s = require('strings')('teams.team'),
	
	Button = require('components/button'),
    Icon = require('components/icon'),

	// mixins
	BackboneMixin = require('mixins/backbone'),
	UtilsMixin = require('mixins/utils'),

	RenameTeamOp = require('app/operations/renameTeam');


function renameTeam() {
	RenameTeamOp({team:this.props.team});
};

function r() {

	var team = this.props.team,
		renameIcon;

	if ( team.userCanEdit() ) {
		renameIcon = <Icon type='edit' onClick = {renameTeam.bind(this)}/>;
	}

	return (
		<div>
			<h2>{'Team ' + this.props.team.get('name')} {renameIcon}</h2>
			<p>
				Created { this.utils.timeago(team.get('created')) } <br />
				Owned by {team.get('owner').email}
			</p>
		</div>
	);
};


module.exports = React.createClass({
	mixins: [BackboneMixin, UtilsMixin],
	render: r,
	componentDidMount: function(){
	},
	backboneProps: ['team'],
	propTypes: {
	    team: BackboneMixin.PropTypes.Model.isRequired,
	},
});