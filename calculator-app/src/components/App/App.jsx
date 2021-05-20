import React, { useState } from 'react';
import Result from '../Result/Result';
import MathOperation from '../MathOperation/MathOperation';
import Functions from '../Functions/Functions';
import Numbers from '../Numbers/Numbers';
import './App.css';

const App = () => {

  const [stack, setStack] = useState('');
  // const clickHandlerFunction = (text) => {
  //   console.log(text);
  // };
  return (
    <main className='react-calculator'>
      <Result value={stack} />
      <Numbers onClickNumber={(num) => setStack(`${stack}${num}`)} />
      <Functions
        onContentClear={() => setStack('')}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(`${newStack}`);
          }

        }}
      />
      <MathOperation
        onClickOperation={(operation) => setStack(`${stack}${operation}`)}
        // eslint-disable-next-line no-eval
        OnclickEqual={() => setStack(eval(stack).toString())}
      />
    </main>
  );
};
export default App;
