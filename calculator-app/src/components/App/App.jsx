import React, { useState } from 'react';
import Result from '../Result/Result';
import MathOperation from '../MathOperation/MathOperation';
import Functions from '../Functions/Functions';
import Numbers from '../Numbers/Numbers';
import './App.css';

const App = () => {

  const [stack, setStack] = useState('');
  const clickHandlerFunction = (text) => {
    console.log(text);
  };
  return (
    <main className='react-calculator'>
      <Result value={stack} />
      <Numbers onClickNumber={(num) => {
        clickHandlerFunction(num);
        setStack(num);
      }}
      />
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
