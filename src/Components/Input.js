import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

	render () {
		const cn = this.props.icon ? "control has-icons-left" : "control"

		return (
			<div className="field">
				<label className="label">{ this.props.objLabel }</label>
				<div className={ cn }>
					<input name={ this.props.objName } className="input" type="text" placeholder={ this.props.objPlaceholder } />
					{ this.props.icon && (
						<span className="icon is-small is-left">
							<i className="mdi mdi-account"></i>
						</span>
					) }
				</div>
			</div>
		)
	}

}

Input.defaultProps = {
	icon: false
};

Input.propTypes = {
	objName: PropTypes.string.isRequired,
	objLabel: PropTypes.string.isRequired,
	objPlaceholder: PropTypes.string.isRequired,
}

export default Input;