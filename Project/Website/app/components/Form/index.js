import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import Style from './style.css';

function Form(props) {
  const { handleSubmit, children, buttonText } = props;
  return (
    <div className={`container ${Style.paddingTop}`}>
      <form
        className={`${Style.formBox} 
            ${Style.contentPadding}
            bg-secondary text-white`}
        onSubmit={handleSubmit}
      >
        {children}
        <button type="submit" className={`${Style.buttonCurve} btn btn-dark`}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  children: <div />,
  buttonText: '',
};

export default reduxForm({
  form: 'form',
})(Form);
