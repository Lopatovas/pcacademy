import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import injectSaga from 'utils/injectSaga';
import Form from 'components/Form';
import InputField from 'components/InputField';
import makeSelectForum from './selectors';
import config from '../../utils/config';
import saga from './saga';
import { postComment } from './actions';

export class ForumForm extends React.Component {
  handleSubmit = data => {
    this.props.postComment(data, this.props.user, this.props.id);
  };

  render() {
    return (
      <Form buttonText="Submit" onSubmit={this.handleSubmit}>
        <InputField
          label={config.LEAVE_COMMENT}
          name="comment"
          type="textarea"
        />
      </Form>
    );
  }
}

ForumForm.propTypes = {
  postComment: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const mapStateToProps = makeSelectForum();

function mapDispatchToProps(dispatch) {
  return {
    postComment: (comment, user, id) =>
      dispatch(postComment(comment, user, id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'forumForm', saga });

export default compose(
  withSaga,
  withConnect,
)(ForumForm);
