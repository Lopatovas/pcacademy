import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import makeSelect from './selectors';
import { logoutUser } from '../LoginUserPage/actions';

class Header extends React.Component {
  logOut = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
            </li>
          </ul>
          {this.props.user.user.length < 1 ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="navbar-text text-white">{`Greetings ${
                  this.props.user.user
                }`}</span>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  onClick={this.logOut}
                >
                  Log out
                </button>
              </li>
            </ul>
          )}
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);
