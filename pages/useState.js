import React, { useState } from 'react';

const ExampleUseState = () => {
  const [count, setCount] = useState(0);

  return ( 
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(pre => pre + 1)}>+</button>
      <button onClick={() => setCount(pre => pre - 1)}>-</button>
    </div>
   );
}
 
export default ExampleUseState;
