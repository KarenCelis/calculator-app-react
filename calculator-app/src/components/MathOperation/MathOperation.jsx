import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const MathOperation = ({ onClickOperation, OnclickEqual }) => (
  <section className='math-operations'>
    <Button type='button' text='+' clickHandler={onClickOperation} />
    <Button type='button' text='-' clickHandler={onClickOperation} />
    <Button type='button' text='*' clickHandler={onClickOperation} />
    <Button type='button' text='/' clickHandler={onClickOperation} />
    <Button type='button' text='=' clickHandler={OnclickEqual} />
  </section>
);
MathOperation.propTypes = {
  onClickOperation: PropTypes.func,
  OnclickEqual: PropTypes.func,
};
export default MathOperation;
