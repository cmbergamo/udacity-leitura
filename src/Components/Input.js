import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

	render () {

		return (
			<div className="field">
				<label className="label">{ this.props.label }</label>
				<div className="control has-icons-left">
					<input name={ this.props.name } className="input" type="text" placeholder={ this.props.placeholder } />
					<span className="icon is-small is-left">
						<i className="mdi mdi-account"></i>
					</span>
				</div>
			</div>
		)
	}

}

Input.propTypes = {
	name: PropTypes.string.isrequired,
	label: PropTypes.string.isrequired,
	placeholder: PropTypes.string.isrequired
}

export default Input;