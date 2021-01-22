/*
 *	Config used locally
 */

var _ = require('underscore'),
    config = _.clone(require('./config'));

_.extend(config, {
	stripeAPIKey: 'pk_test_DhJ2yhNxQmTZZ5acNEabgSWg00Dt8r1vlt',
    apiURL: 'http://' + window.location.hostname + ':5000/v1/',
    builderURL: '../../player/dist/builder.html',
    previewURL: '../../player/dist/player.html',
    signOutURL: '',
    disableHttps: true
});

// config.apiURL = 'https://api.videopath.com/v1/';

module.exports = config;
