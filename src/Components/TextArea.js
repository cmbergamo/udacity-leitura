import React from 'react';
import PropTypes from 'prop-types';

function TextArea( props ) {
	return (
		<div className="field">
			<label className="label">{ props.label }</label>
			<div className="control">
				<textarea name={ props.name } className="textarea" placeholder={ props.placeholder } ></textarea>
			</div>
		</div>
	);
}

TextArea.propTypes = {
	name: PropTypes.string.isrequired,
	label: PropTypes.string.isrequired,
	placeholder: PropTypes.string.isrequired
}

export default TextArea;