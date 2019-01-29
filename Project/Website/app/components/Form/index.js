import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, reset } from 'redux-form/immutable';
import Style from './style.css';

function Form(props) {
  const { handleSubmit, children, buttonText } = props;
  return (
    <div className={`${props.container} ${Style.paddingTop}`}>
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
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleSubmit: PropTypes.func.isRequired,
  container: PropTypes.string,
};

Form.defaultProps = {
  children: <div />,
  buttonText: '',
  container: '',
};

const afterSubmit = (formValues, dispatch) => {
  dispatch(reset('form')); // string here is the name of the form, check the export default reduxForm below.
};

export default reduxForm({
  form: 'form',
  onSubmitSuccess: afterSubmit,
})(Form);
