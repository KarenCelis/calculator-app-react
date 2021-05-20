import React from 'react';
import Result from '../Result/Result';
import MathOperation from '../MathOperation/MathOperation';
import Functions from '../Functions/Functions';
import Numbers from '../Numbers/Numbers';
import './App.css';

const App = () => {
  const clickHandlerFunction = (text) => {
    console.log(text);
  };
  return (
    <main className='react-calculator'>
      <Result value='0' />
      <Numbers onClickNumber={(num) => clickHandlerFunction(num)} />
      <Functions
        onContentClear={(clear) => clickHandlerFunction(clear)}
        onDelete={(del) => clickHandlerFunction(del)}
      />
      <MathOperation
        onClickOperation={(operation) => clickHandlerFunction(operation)}
        OnclickEqual={(equal) => clickHandlerFunction(equal)}
      />
    </main>
  );
};
export default App;
