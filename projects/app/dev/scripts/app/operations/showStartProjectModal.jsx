/*
 *	
 */
var operations = require('./'),
 	React = require('react'),
    // StartProjectModal = require('modals/start_project'),
    Modal = require('modals/create_project');


/*
 *	Setup config
 */

var config = {

    successTrackPage: "library/create"
};


/*
 * Actual code goes here
 */
function run(ctx, opts) {
	return ctx.modals.showModal(<Modal user={ctx.sdk.currentUser} team={opts.team}/>);
}

module.exports = operations.wrap(run, config);