var React = require('react'),

	// mixins
	BackboneMixin = require('mixins/backbone'),

	Button = require('components/button'),
	Icon = require('components/icon'),

	MainMenu = require('./navbar_menu'),

	routeOp = require('app/operations/route'),

    config = require('config'),
    sdk = require('sdk');



var planIconMap = {
	free: '',
	default: 'vp_plan_icon_basic',
	starter: 'vp_plan_icon_basic',
	pro: 'vp_plan_icon_pro',
	'pro-plus': 'vp_plan_icon_pro_plus',
	premium: 'vp_plan_icon_premium',
	individual: 'vp_plan_icon_individual'
};



function r() {

	var homeRoute = function(){
        if (sdk.currentUser.isLoggedIn()) {
            routeOp({route:'dashboard'});
        } else {
            window.location.href = config.signOutURL; 
            return null;
        }
        //routeOp.bind(null, {route:'dashboard'}, null, null, null)
        },
		upgradeRoute = routeOp.bind(null, {route:'settings/plans'}, null, null, null);

	var homeButton = <Button 
						color='lightblue' 
						icon='home' 
						title='' // Library 
						style='outlined'
						onClick = { homeRoute }/>,

		upgradeButton = <Button 
						color='blue' 
						icon='diamond' 
						title='Upgrade' 
						onClick = { upgradeRoute }/>,

		mainMenu = <MainMenu 
					user={this.props.user} 
					teams={this.props.teams}/>;

	if (!this.props.user.isOnFreePlan()) {
		upgradeButton = false;
	}

	if (!this.props.user.isLoggedIn()) {
		homeButton = false;
		upgradeButton = false;
		mainMenu = false;
	}

	// determine which plan icon to show
	var planIconClass = planIconMap.default;
	planIconClass = planIconMap[this.props.user.plan.get('group')];
	planIconClass += ' vp_plan_icon';

	return (
		<div className = 'vp_navbar'>
			<div className = 'vp_right'>	
				{upgradeButton}
				{homeButton}
				{mainMenu}
			</div>
			<div className = 'vp_logo' onClick = { homeRoute }/>
			<div className = {planIconClass} onClick = { upgradeRoute }/>
		</div>
	);
};


var NavBar = React.createClass({
	mixins: [BackboneMixin],
	render:r,
	backboneProps: ['user', 'teams'],
	propTypes: {
	    user: BackboneMixin.PropTypes.Model.isRequired,
	    teams: BackboneMixin.PropTypes.Collection.isRequired,
	},
});

module.exports = NavBar;


