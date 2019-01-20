import React from 'react';
import PropTypes from 'prop-types';
import config from '../../utils/config';
import Style from './style.css';

export default function StatisticsTable(props) {
  return (
    <div className={Style.paddingTop}>
      <div className="bg-secondary box text-white text-center">
        <h5>{config.STATISTICS}</h5>
        {props.children}
      </div>
    </div>
  );
}

StatisticsTable.propTypes = {
  children: PropTypes.array,
};

StatisticsTable.defaultProps = {
  children: [],
};
