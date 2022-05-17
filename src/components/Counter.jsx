import React from "react";

const Counter = () =>{
    const [count , setCount] = React.useState(0)

    return (
      <React.Fragment>
          <h1>Counter App: {count}</h1>

          <button onClick={ () => setCount(count+1)}>Increment</button>
          <button onClick={ () => setCount(count-1)}>Decrement</button>
          <button onClick={ () => setCount(count*2)}>Double</button>

      </React.Fragment>  
    );
}

export default Counter;