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

  // 4. useReducer();   hook

  React.useEffect(() => {
    console.log("The component is Rendered..!!");
  }, []); // this useEffect or code inside useEffect executes only once when the component is rendered first time

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [count]);

  React.useEffect(() => {
      console.log("Changing count is :", count);
    // incrementCount()
  }, [count]); // this useEffect will execute or re-render after the dependancy changes .

  function incrementCount() {

    const timeout = setTimeout(() => {
      setCount(count + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }

  return (
    <div>
      <label>React Hooks</label>
      <button
        type="button"
        onClick={() => {
          incrementCount();
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default ReactHooks;
