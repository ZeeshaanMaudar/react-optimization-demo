import React, { memo } from 'react';

// const Child = memo(({ val }) => {
//     return (
//     <div>
//       I am a child component +  {val}
//     </div>
//   );
// })

const Child = ({ val, memoizedFunc, memoizedMaxValue }) => {

  console.log('Child is rendering!')

  return (
    <div>
      <p>I am a child component +  {val}</p>
      <div>Max: {memoizedMaxValue}</div>
      <button onClick={memoizedFunc}>Child Button</button>
    </div>
  );
}

export default memo(Child);
