import React from 'react';
import '../assets/styles/components/Result.css';
import PropTypes from 'prop-types';

const Result = ({ value }) => (<div className='result'>{value}</div>);
Result.propTypes = {
  value: PropTypes.string.isRequired,
};

Result.defaultProps = {
  // value: '0',
};
export default Result;
