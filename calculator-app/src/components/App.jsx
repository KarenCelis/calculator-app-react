import React from 'react';

import Button from './Button';
import Result from './Result';
import MathOperation from './MathOperation';
import '../assets/styles/components/App.css';

const App = () => {

  const clickHandlerFunction = (text) => {
    console.log('dddd');
  };
  return (
    <main className='react-calculator'>
      <Result value='0' />
      <div className='numbers'>
        <Button text='1' clickHandler={clickHandlerFunction} />
        <button type='button'>2</button>
        <button type='button'>3</button>
        <button type='button'>4</button>
        <button type='button'>5</button>
        <button type='button'> 6</button>
        <button type='button'>7</button>
        <button type='button'>8</button>
        <button type='button'>9</button>
        <button type='button'>0</button>
      </div>
      <div className='functions'>
        <button type='button'>clear</button>
        <button type='button'>remove</button>
      </div>
      <MathOperation />
    </main>
  );
};
export default App;
