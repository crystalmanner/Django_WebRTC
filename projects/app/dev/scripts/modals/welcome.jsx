var React = require('react'),
	Modal = require('components/modal'),
	Button = require('components/button'),

	routeOp = require('app/operations/route');

/*
 *	Template
 */
var WelcomeModal = function (props) {
	var src = "//www.youtube.com/embed/" + props.videoKey;

	function onStartProject() {
		props.onDone();
		props.onStartProject({
			team:props.team
		});
	}

	function onUseSample () {
		props.onDone();
		props.onUseSample({
			team:props.team
		}).then(function(result){
			routeOp({route:'project/' + result.get('id') + '/edit'});
		});
	}

	return (
		<Modal {...props} hasCloseButton theme='blue' className = 'vp_welcome' title = 'Welcome to Videopath!' text = "We're glad you're here. You can now start a new project or use our sample.">
			<div className = 'vp_button_block'>
				<Button title = 'Start new project' color = 'green' onClick = {onStartProject}/>
				<div>-or-</div>
				<div>Use our sample<div className = 'vp_start_image' onClick = {onUseSample}></div></div>
			</div>
		</Modal>  
	);
};

module.exports = WelcomeModal;


