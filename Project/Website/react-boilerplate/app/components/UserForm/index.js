import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function UserForm(props) {
  return (
    <div className={Style.bgUser}>
      <div className={`container ${Style.paddingTop}`}>
        <form
          className={`${Style.formBox} 
          ${Style.contentPadding}
          bg-secondary text-white`}
        >
          {props.children}
          <button type="submit" className={`${Style.buttonCurve} btn btn-dark`}>
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

UserForm.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.element,
};
