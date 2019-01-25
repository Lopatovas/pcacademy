import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './style.css';
import config from '../../utils/config';

export default function TeamListItem(props) {
  let index = 0;
  function createIndex() {
    index += 1;
    return index;
  }
  return (
    <div className={Style.paddingTop}>
      <div className={`${Style.card} card text-white bg-secondary text-center`}>
        <div className={`${Style.cardHeader} card-header bg-dark`}>
          {props.teamName}
        </div>
        <div className="card-body row">
          <div className="col">
            <img
              className={Style.imageStyle}
              src={props.imgUrl}
              alt="Team logo"
            />
          </div>
          <div className="col">
            {props.teamInfo.map(info => (
              <p
                key={createIndex()}
                className={`${Style.textSize} text-white card-text`}
              >
                {info}
              </p>
            ))}
          </div>
        </div>
        <Link
          className={`${Style.buttonCurve} btn btn-dark mb-2 mx-5`}
          to={`teams/${props.id}`}
        >
          {config.TEAM_CARD_BUTTON}
        </Link>
      </div>
    </div>
  );
}

TeamListItem.propTypes = {
  teamName: PropTypes.string,
  teamInfo: PropTypes.array,
  imgUrl: PropTypes.string,
  id: PropTypes.number,
};

TeamListItem.defaultProps = {
  teamName: 'No name provided',
  teamInfo: [],
  imgUrl: config.DEFAULT_PICTURE,
  id: -1,
};
