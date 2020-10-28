import React, { useEffect, useState } from 'react';

const ExampleUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} times`;
    console.log('effect handler run');
  });

  return ( 
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
   );
}
 
export default ExampleUseEffect;