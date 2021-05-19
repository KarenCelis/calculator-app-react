import React from 'react';
import '../assets/styles/components/Result.css';

const Result = (props) => {
//desetructuracion
  const { value } = props;
  return (<div className='result'>{value}</div>);
};
export default Result;
