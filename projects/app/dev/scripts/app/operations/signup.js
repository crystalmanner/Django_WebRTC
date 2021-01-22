/*
 *  
 */
var operations = require('./'),
	vtmHelper = require('app/util/vtmHelper');

/*
 *  Setup config
 */

var config = {
};

/*
 * Actual code goes here
 */
function run(ctx, opts, config) {
	var campaignParms = vtmHelper.getCampaignParams();
    return ctx.sdk.users.signup(opts.email, opts.email, opts.password, opts.newsletter, campaignParms).fail(function(result){
    	if (result.status === 503) {
    		config.failureRoute = 'maintenance';
    		config.failureToast = '';
    	}
    });;
}

module.exports = operations.wrap(run, config);