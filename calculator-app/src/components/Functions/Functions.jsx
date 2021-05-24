import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const Functions = ({ onContentClear, onDelete }) => (
  <section className='functions'>
    <Button type='button-long-text' text='clear' clickHandler={onContentClear} />
    <Button type='button-long-text' text='remove' clickHandler={onDelete} />
  </section>
);
Functions.propTypes = {
  onContentClear: PropTypes.func,
  onDelete: PropTypes.func,
};
export default Functions;
