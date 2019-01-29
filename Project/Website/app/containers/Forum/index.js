import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import TextField from 'components/TextContainer';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import makeSelect from './selectors';
import makeSelectUser from '../LoginUserPage/selectors';
import saga from './saga';
import { getComments } from './actions';

export class Forum extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.user.user, this.props.id);
  }

  render() {
    return (
      <div>
        {this.props.forum.comments.map(comment => (
          <TextField
            key={comment.id}
            title={comment.userName}
            text={comment.text}
          />
        ))}
        <br />
      </div>
    );
  }
}

Forum.propTypes = {
  getComments: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  forum: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  forum: makeSelect(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    getComments: (user, pageId) => dispatch(getComments(user, pageId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'forum', reducer });
const withSaga = injectSaga({ key: 'forum', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Forum);
