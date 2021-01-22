var React = require('react'),
	Marionette = require('marionette'),
	
	// strings
	s = require('strings')('login.signup'),

	EnvMixin = require('mixins/environment'),

	// components
	AppPage = require('components/app_page'),
	Forms = require('components/forms'),
	Button = require('components/button'),

	// operations
	signupOp = require('app/operations/signup');



function r() {
	return (
		<AppPage 
			title={ this.props.embedded ? '': s('title')}
			size='small'
			compAboveSheet = { this.props.embedded ? '' : s('txt_top')}
			>
			<Forms.Form
				submitButtonTitle = {s('btn_submit')}
				onSubmit = {this.onSubmit}
				ref = 'form'
				>
				<Forms.Input 
					label={s('lbl_email')}
					name='email'
				/>
				<Forms.Input 
					label={s('lbl_password')}
					type='password'
					name='password'
				/>
				<Forms.Input 
					label={s('lbl_tos')}
					type='checkbox'
					name='tos'
				/>
				<Forms.Input 
					label={s('lbl_newsletter')}
					type='checkbox'
					name='newsletter'
				/>
			</Forms.Form>
		</AppPage>
		);
}


module.exports = React.createClass({

	mixins: [EnvMixin],

	render: r,

	getDefaultProps: function(){
		return {
			embedded: false
		};
	},

	onSubmit: function(values) {
		var nextRoute = this.getQueryVariable('next') || 'dashboard',
			form = this.refs.form;

		form.setState({errors: false});

		if ( !values.tos ) {
			form.setState({
				errors: {
					tos:"Please select our terms and conditions"
				}
			});
			return;
		}

		form.setState({loading:true});
		signupOp(values)
			.then(function(){
				Marionette.App.route(nextRoute);
			})
			.fail(function(vals){
				form.setState({errors:vals});
			})
			.always(function(){
   				form.setState({loading:false});
   			});
	}
	
});