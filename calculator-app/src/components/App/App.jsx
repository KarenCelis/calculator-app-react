import React, { useState } from 'react';
import words from 'lodash.words';
import Result from '../Result/Result';
import MathOperation from '../MathOperation/MathOperation';
import Functions from '../Functions/Functions';
import Numbers from '../Numbers/Numbers';
import './App.css';

const App = () => {

  const [stack, setStack] = useState('');
  ///arroja un array que contiene cada una de los numeros de la operacion introducidos
  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length - 1] : '0';
  //console.log(items);
  // const clickHandlerFunction = (text) => {
  //   console.log(text);
  // };
  return (
    <main className='react-calculator'>
      <Result value={value} />
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
