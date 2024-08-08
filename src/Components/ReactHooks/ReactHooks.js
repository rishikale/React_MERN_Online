import React from "react";

function ReactHooks() {
  const [count, setCount] = React.useState(0);
  // 1. useEffect();
  //         this is the most widely used and important React hook .
  //         it avoids the code block to re-render the whole component or
  //         it avoids the side effects of perticular code block .

  // 2. setTimeout(); clearTimeout();
  //         this is the hook used when you want to do some function or
  //         execute some code block after some delay in react application you need to implement
  //         the setTimeOut(); and for clearing the timeout you need clearTimeout(); hook;

  // 3. setInterval(); clearInterval();
  //        it is hook used to set an interval in such conditions that you need to execute a code block
  //        again after some instance .

  // 4. useReducer();   hook this hook reduces the line of codes / functions / part of code where you have to manage multiple conditions in a single component .

  React.useEffect(() => {
    console.log("The component is Rendered..!!");
  }, []); // this useEffect or code inside useEffect executes only once when the component is rendered first time

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(count + 1);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [count]);

  // React.useEffect(() => {
  //   console.log("Changing count is :", count);
  // }, [count]); // this useEffect will execute or re-render after the dependancy changes .

  const initialState = 0;

  // array , 
  // objects ,
  // nested array ,
  // access values in objects or in arrays 
  // array modification and array mapping

  // reducer - reducer is function in which we are actually modifying our state depending on the condition

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return (state = state + action.payload);
      }
      case "decrement": {
        return (state = state - action.payload);
      }
      case "multiply": {
        return (state = state * action.payload);
      }
      case "divide": {
        return (state = state / action.payload);
      }
      case "reset": {
        return (state = action.payload);
      }
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  // dispatch is a function or an argument passed to reducer perform an action based on our condition .

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  function multiplyCount(argument) {
    setCount(count * argument);
  }

  function divideCount(argument) {
    setCount(count / argument);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <label>React Hooks</label>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        The Count Is : {count}
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        The State Is : {state}
      </div>
      <button
        type="button"
        onClick={() => {
          incrementCount();
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          decrementCount();
          dispatch({ type: "decrement", payload: 3 });
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          multiplyCount(5);
          dispatch({ type: "multiply", payload: 5 });
        }}
      >
        Multiply
      </button>
      <button
        type="button"
        onClick={() => {
          divideCount(2);
          dispatch({ type: "divide", payload: 3 });
        }}
      >
        Divide
      </button>
      <button
        type="button"
        onClick={() => {
          resetCount();
          dispatch({ type: "reset", payload: 0 });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ReactHooks;
