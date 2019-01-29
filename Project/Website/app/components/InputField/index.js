import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';

export default function InputField(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      {props.type !== 'textarea' ? (
        <Field
          component="input"
          className="form-control"
          type={props.type}
          name={props.name}
        />
      ) : (
        <Field
          className="form-control"
          name={props.name}
          component="textarea"
          rows="8"
        />
      )}
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
