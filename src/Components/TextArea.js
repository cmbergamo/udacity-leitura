import React from 'react';
import PropTypes from 'prop-types';

function TextArea( props ) {
	return (
		<div className="field">
			<label className="label">{ props.objLabel }</label>
			<div className="control">
				<textarea name={ props.objName } className="textarea" placeholder={ props.objPlaceholder } ></textarea>
			</div>
		</div>
	);
}

TextArea.propTypes = {
	objName: PropTypes.string.isRequired,
	objLabel: PropTypes.string.isRequired,
	objPlaceholder: PropTypes.string.isRequired
}

export default TextArea;