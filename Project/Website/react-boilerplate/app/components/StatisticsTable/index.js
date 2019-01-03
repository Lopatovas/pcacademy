import React from 'react';
import PropTypes from 'prop-types';
import config from '../../utils/config';
import Style from './style.css';

export default function StatisticsTable(props) {
  return (
    <div className={Style.paddingTop}>
      <div className="bg-secondary box text-white text-center">
        <h5>{config.STATISTICS}</h5>
        {props.data.map(statistics => (
          <dl key={statistics.id} className="row">
            <dt className="col">{statistics.key}</dt>
            <dd className="col">{statistics.value}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
}

StatisticsTable.propTypes = {
  data: PropTypes.array,
};
