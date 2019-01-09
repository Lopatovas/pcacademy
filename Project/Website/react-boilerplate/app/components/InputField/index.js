import React from 'react';
import PropTypes from 'prop-types';

export default function InputField(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input className="form-control" type={props.type} name={props.name} />
      {props.helperText.length > 0 ? <small>{props.helperText}</small> : null}
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultProps = {
  name: '',
  label: '',
  helperText: '',
  type: 'text',
};
