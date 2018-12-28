import React from 'react';
import config from '../../utils/config';

export default function StatisticsTable(props) {
  return (
    <div className="bg-secondary box text-white">
      <h5>{config.STATISTICS}</h5>
      {props.data.map(statistics => (
        <dl key={statistics.id} className="row">
          <dt className="col">{statistics.key}</dt>
          <dd className="col">{statistics.value}</dd>
        </dl>
      ))}
    </div>
  );
}
