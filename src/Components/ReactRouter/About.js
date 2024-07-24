import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  // for accessing the data if something is passed or available while navigating .

  // there is another hook to access the data passed from parent -- useLocation()

  const location = useLocation();

  console.log("location in the About component :", location.state.nameString);

  return (
    <div>
      <label
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        About Us..
      </label>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {location.state.nameString}
      </div>
    </div>
  );
}

export default About;
