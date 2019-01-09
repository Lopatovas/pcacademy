import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target.parentElement;
    const input = {};
    for (let i = 0; i < form.elements.length - 1; i += 1) {
      input[form.elements[i].name] = form.elements[i].value;
    }
  }

  render() {
    return (
      <div className={`container ${Style.paddingTop}`}>
        <form
          className={`${Style.formBox} 
            ${Style.contentPadding}
            bg-secondary text-white`}
        >
          {this.props.children}
          <button
            onClick={this.handleSubmit}
            type="submit"
            className={`${Style.buttonCurve} btn btn-dark`}
          >
            {this.props.buttonText}
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.array,
};

Form.defaultProps = {
  children: <div />,
  buttonText: '',
};
