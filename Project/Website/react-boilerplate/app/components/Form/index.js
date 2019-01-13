import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Style from './style.css';
import makeSelect from './selectors';
import { getInputs } from './actions';
import reducer from './reducer';

class Form extends React.Component {
  handleSubmit(event) {
    // bug
    event.preventDefault();
    const form = event.target.parentElement;
    const input = {};
    for (let i = 0; i < form.elements.length - 1; i += 1) {
      input[form.elements[i].name] = form.elements[i].value;
    }
    this.props.getInputs(input);
    console.log(this.props);
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
  getInputs: PropTypes.func.isRequired,
};

Form.defaultProps = {
  children: <div />,
  buttonText: '',
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    getInputs: inputs => dispatch(getInputs(inputs)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'form',
  reducer,
});

export default compose(
  withReducer,
  withConnect,
)(Form);
