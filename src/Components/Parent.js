// Data sharing

// 1 . Props -- Props are the properties shared from Parent To Child . One way Transmission .
// 2 . Callback -- Callback is Property Modification By child in which properties
//  are available in child by using props from the parent component .


//    3 . Context API --
// you have one Parent and 10 childs .
// you have to create a context in Parent and export it so it .
// can available to every child present .


// 4 . React Router ---  npm install react-router-dom
// 1. For internal navigation between pages .
// 2. While you are navigating you can also pass the data to the child
// where you'll navigate in the form of state which is a data object paased while navigating .

// 5 . Redux-React -- Toolkit for managing the global states which are available
//     to every child at any instance in your whole react application .

// we create a store just like our grocerry strore .
// which is accessible to any child or component present in your web app / React App .
// Redux also can be used for secure login and log out functionalities using
// Redux async thunk Api .

import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0); // property of the Parent Component .
  const [array, setArray] = useState([1, 2, 3]);

  return (
    <div>
      <label
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Parent
      </label>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {"The count is :" + " " + count}
        
      </div>
      <div>
        <Child array={array} number={count} setNumber={setCount} />
      </div>
    </div>
  );
}

export default Parent;
