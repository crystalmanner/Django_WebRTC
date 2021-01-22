var React = require('react'),
	s = require('strings')('teams.team'),
	
	// mixins
	BackboneMixin = require('mixins/backbone'),

	Button = require('components/button'),
    Forms = require('components/forms'),
    Tables = require('components/tables'),

	AppPage = require('components/app_page'),
	MembersSection = require('./members'),
	GeneralSection = require('./general'),
	IntegrationsSection = require('./integrations'),

	// operations
	deleteTeamOp = require('app/operations/deleteTeam'),
	leaveTeamOp = require('app/operations/leaveTeam'),

	routeOp = require('app/operations/route');


function deleteTeam() {
	deleteTeamOp({team:this.props.team});
};

function leaveTeam() {
	leaveTeamOp({team:this.props.team});
};


function r() {


	var endButton = <Button color='red' onClick={leaveTeam.bind(this)} title='Leave Team' style = 'outlined' className='vp_add_button'/>,
		endTitle = 'Leave Team';
	if ( this.props.team.userIsOwner() ) {
		endButton = <Button color='red' onClick={deleteTeam.bind(this)} title='Delete Team' className='vp_add_button' style = 'outlined' icon='delete'/>;
		endTitle = 'Delete Team';
	}
	if ( this.props.team.get('is_default_team') ) {
		endButton = false;
		endTitle = false;
	}

	var integrations = false;
	if (this.props.team.canUseFeature('integrations')) {
		integrations = <IntegrationsSection 
				team={this.props.team} 
				integrations={this.props.team.integrations}
				editable={this.props.team.userCanEdit()}
				/>;
	}

	return (
		<AppPage 
			title={s('title')}
			compAboveSheet={s('description', this.props.team.get('name'))}
			hasBackButton
			hasLoadingIndicator
			className = 'vp_teams'>
			<GeneralSection team={this.props.team} />
			<MembersSection 
				team={this.props.team} 
				members={this.props.team.members} 
				editable={this.props.team.userCanEdit()}/>
			{ integrations }
			<h2>{endTitle}</h2>
			<br />
			{endButton}
		</AppPage>
	);
};


module.exports = React.createClass({
	mixins: [BackboneMixin],
	render: r,
	componentDidMount: function(){
		this.props.team.members.fetch();
	},
	backboneProps: ['team'],
	propTypes: {
	    team: BackboneMixin.PropTypes.Model.isRequired,
	},
});