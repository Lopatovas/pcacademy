import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function championshipTableCell(props) {
  return <td className={Style.paddingTop}>{props.text}</td>;
}

championshipTableCell.propTypes = {
  text: PropTypes.string,
};

championshipTableCell.defaultProps = {
  text: '',
};
