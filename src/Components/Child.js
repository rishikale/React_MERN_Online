import React from "react";

// function Child({number,setNumber}){
function Child(props) {
    const { number, setNumber,array } = props;
    console.log("The property from parent :", array);

  function modifyNumber() {
    setNumber(number + 2);
  }

  return (
    <div>
      <label
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Child Component
      </label>
      <button
        type="button"
        onClick={() => {
          modifyNumber();
        }}
      >
        Modify / Callback
      </button>
    </div>
  );
}

export default Child;
