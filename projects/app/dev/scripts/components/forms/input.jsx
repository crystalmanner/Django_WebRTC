var _ = require('underscore'),
	React = require('react'),
	DatePicker = require('react-datepicker');

require('react-datepicker/dist/react-datepicker.css');

/* 
 * Select version
 */
var Select = React.createClass({
	render: function() {
		function renderOption(value,key){
			return <option key={key} value={key} >{value}</option>;
		};
		return (
			<select 
				ref='element'
				{...this.props}>
				{_.map(this.props.options, renderOption)}
			</select>
		);
	}
});

/* 
 *Input
 */
var Input = React.createClass({
	render: function() {
		return <input ref='element' {...this.props} />;
	}
});

var Date = React.createClass({
	render: function() {
		return 	(
			<DatePicker 
				ref='element' 
				disabled={this.props.disabled}
				maxDate={this.props.maxDate}
				minDate={this.props.minDate}
				onChange={this.props.onChange}
				selected={this.props.defaultValue}/>
		);
	}
});

var typeMap = {
	'text': Input,
	'password': Input,
	'checkbox':Input,
	'email': Input,
	'date': Date,
	'select': Select,
};


/*
 *	Template
 */
function r() {

	var errorDetail = '';
	if ( this.props.error && this.props.type != 'checkbox' ) {
		errorDetail = <div className = 'vp_error_detail'>{this.props.error}</div>;
	}

	var Input = typeMap[this.props.type];
	var required = this.props.required ? <span className='vp_required'>*</span>:'';
	
	function onChange(val) {
		this.currentValue = val;
		this.props.onChange && this.props.onChange(val);
	}

	return (
		<div className = {'vp_input vp_' + this.props.type + (this.props.error ? ' vp_error' : '')}>
			<label>
				{this.props.label}{required}
			</label>
			<Input 
				{...this.props}
				onKeyDown={this.onKeyDown}
				ref = 'input' 
				onChange={onChange.bind(this)}
				/>
			{errorDetail}
		</div>
	);
}
 
module.exports = React.createClass({
	render: r,
	value: function(){
		var el = this.refs.input.refs.element;
		if ( this.props.type == 'checkbox') {
			return el.checked;
		} else if ( this.props.type =='date' ) {
			return this.currentValue;
		}
		return el.value;
	},
	componentDidMount: function(){
		this.currentValue = this.props.defaultValue;
	},
	getDefaultProps: function() {
	    return {
	      type: 'text'
	    };
  	},
	onKeyDown: function(e) {
		if ( e.keyCode == 13 && this.props.onEnter) {
			this.props.onEnter();
		}
	},
	propTypes: {
	    type: React.PropTypes.oneOf(['text', 'password', 'email', 'checkbox', 'select', 'date']),
	    label: React.PropTypes.node,
	    placeholder: React.PropTypes.string,
	    onEnter:  React.PropTypes.func,
	    error: React.PropTypes.string,
	    required: React.PropTypes.bool,
	}
});





