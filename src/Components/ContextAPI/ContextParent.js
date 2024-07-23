import React, { createContext, useState } from "react";
import ContextChildOne from "./ContextChildOne";
import ContextChildTwo from "./ContextChildTwo";

// 1. createContext() --- CreateContext is hook provided by react js to create a network
// which will be available to every child present .

// 2. useContext()  --- UseContext is a hook used to access the values present on the context created
// or the network created using createContext()

// 3. Provider -- it is used to provide the values on the network which is available in every child .

export const FirstContext = createContext();

function ContextParent() {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("");

  return (
    <FirstContext.Provider value={{ count, setCount, string, setString }}>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {"Count Variable in the context Parent :" + count}
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {"String Variable in the context Parent :" + string}
      </div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <ContextChildOne />
      </div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <ContextChildTwo />
      </div>
    </FirstContext.Provider>
  );
}

export default ContextParent;
