import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      throw new Error('unknown action type')
  }
}

const ExampleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>+2</button>
    </>
  );
}

export default ExampleUseReducer;
