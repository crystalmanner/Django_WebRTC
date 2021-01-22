/*
 *	
 */
var operations = require('./'),
    
    React = require('react'),
    Modal = require('modals/welcome'),

    importDemoOp = require('./importDemo'),
    startProjectOp = require('./showStartProjectModal');

var welcomeOverlayShown = false;

/*
 * Actual code goes here
 */
function run(ctx, opts) {
    // only show this once, and when there are no videos
    if (welcomeOverlayShown || opts.team.videos.length > 0) {
        return ctx.resolve();
    }
    welcomeOverlayShown = true;
    return ctx.modals.showModal(<Modal onStartProject = {startProjectOp} onUseSample = {importDemoOp} team = {opts.team} />  ); 
}

module.exports = operations.wrap(run);