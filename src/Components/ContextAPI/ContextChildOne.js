import React, { useContext } from "react";
import { FirstContext } from "./ContextParent";

function ContextChildOne() {
  const { count, setCount, string, setString } = useContext(FirstContext);

  function handleIncrement() {
    setCount(count + 1);
    setString(string + "Rishi");
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <label
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Context Child One
      </label>
      <div>
        <button type="button" onClick={handleIncrement}>
          Increment Count
        </button>
      </div>
      <div>
        <button type="button" onClick={handleDecrement}>
          Decrement Count
        </button>
      </div>
    </div>
  );
}

export default ContextChildOne;
