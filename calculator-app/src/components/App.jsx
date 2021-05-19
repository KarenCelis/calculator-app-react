import React from 'react';
import '../assets/styles/components/App.css';
import Result from './Result';

const App = () => {
  return (
    <main className='react-calculator'>
      <Result value='12' />
      <div className='numbers'>
        <button type='button'>1</button>
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
      <div className='math-operations'>
        <button type='button'>+</button>
        <button type='button'>-</button>
        <button type='button'>*</button>
        <button type='button'>/</button>
        <button type='button'>=</button>
      </div>

    </main>
  );
};
export default App;
