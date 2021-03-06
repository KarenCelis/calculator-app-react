import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const renderButtons = (onClickNumber) => {
  const renderButton = (number) => (<Button key={number} type='button' text={number.toString()} clickHandler={onClickNumber} />);
  return (numbers.map((number) => renderButton(number)));
};
const Numbers = ({ onClickNumber }) => (
  <section className='numbers'>
    {
      renderButtons(onClickNumber)
    }
  </section>
);
Numbers.propTypes = {
  onClickNumber: PropTypes.func,
};
export default Numbers;
