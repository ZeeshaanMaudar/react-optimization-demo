import React, { useState, useCallback, useMemo } from 'react';
import Child from './Child';

const App = () => {

  const [counter, setCounter] = useState(0);
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleClick = () => {
    setCounter(prevCount => prevCount + 1);
  }

  let val = 10;

  const someFunc = () => {
    setArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  }

  const memoizedFunc = useCallback(someFunc, []);

  // const someFunc2 = useCallback(() => {
  //   console.log('hello')
  // }, [])

  const maxValue = () => {
    const max = Math.max(...array);
    return max;
  }

  const memoizedMaxValue = useMemo(maxValue, [array])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>Click Me</button>
      <Child {...{ val, memoizedFunc, memoizedMaxValue }} />
    </div>
  );

}

export default App;
