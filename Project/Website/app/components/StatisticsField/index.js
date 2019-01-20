import React from 'react';
import PropTypes from 'prop-types';

export default function StatisticsField(props) {
  return (
    <dl className="row">
      <dt className="col">{props.name}</dt>
      <dd className="col">{props.value}</dd>
    </dl>
  );
}

StatisticsField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StatisticsField.defaultProps = {
  name: '',
  value: '',
};
