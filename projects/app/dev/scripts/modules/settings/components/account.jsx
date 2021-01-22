var React = require('react'),
	
	// strings
	s = require('strings')('settings.account'),

	BackboneMixin = require('mixins/backbone'),

	// components
	AppPage = require('components/app_page'),
	PageSection = require('components/pageSection'),

	Forms = require('components/forms'),

	changeEmailOp = require('app/operations/changeEmailAddress'),
    changePasswordOp = require('app/operations/changePassword');



function r() {
	return (
		<AppPage 
			hasBackButton
			title={s('title')}
			compAboveSheet = {s('txt_top')}
			>

			<PageSection title={s('title_email')} >
				<Forms.Form
					submitButtonTitle = {s('btn_submit_email')}
					onSubmit = {this.onSubmitEmail}
					ref = 'email_form'
					>
					<Forms.Input 
						label={s('lbl_email')}
						name='email'
						defaultValue={this.props.user.get('email')}
					/>
					<Forms.Input 
						label={s('lbl_password')}
						type='password'
						name='password'
					/>
				</Forms.Form>
			</PageSection>


			<PageSection title={s('title_password')} >
				<Forms.Form
					submitButtonTitle = {s('btn_submit_password')}
					onSubmit = {this.onSubmitPassword}
					ref = 'password_form'
					>
					<Forms.Input 
						label={s('lbl_old_password')}
						type='password'
						name='oldPassword'
					/>
					<Forms.Input 
						label={s('lbl_new_password')}
						type='password'
						name='newPassword'
					/>
					<Forms.Input 
						label={s('lbl_new_password_repeat')}
						type='password'
						name='newPasswordRepeat'
					/>
				</Forms.Form>
			</PageSection>

		</AppPage>
		);
}



module.exports = React.createClass({

	mixins: [BackboneMixin],

	onSubmitEmail: function(vals){
		var form = this.refs.email_form;
		form.setState({loading:true});
		changeEmailOp(vals).then(function() {
        }).always(function(){
        	form.setState({loading:false});
        });
	},

	onSubmitPassword: function(vals){
		var form = this.refs.password_form;
		form.setState({loading:true});
		changePasswordOp(vals).then(function() {
        }).always(function(){
        	form.setState({loading:false});
        });
	},

	render: r,

	backboneProps: ['user'],

	propTypes: {
	    user: BackboneMixin.PropTypes.Model.isRequired,
	},
	
});