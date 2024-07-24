// landing page .

import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // there is hook called useNavigation() ---- which is used to navigate / Redirect... between pages .

  const navigate = useNavigate();

  //   let object={
  //     key:value
  //   }

  let Name = "Rishi"; // this can be anything like arrays objects strings or array of objects or content like images
  let numbersArray = [1, 2, 3, 4];

  function handleNavigateAbout() {
    navigate("/about", { state: { nameString: Name, numbers: numbersArray } });
  }

  function handleNavigateContact() {
    navigate("/contact");
  }

  function handleNavigateProducts() {
    navigate("/products");
  }

  return (
    <div>
      <label
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Home
      </label>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <span>
          <button type="button" onClick={handleNavigateAbout}>
            About
          </button>
        </span>
        <span>
          <button type="button" onClick={handleNavigateContact}>
            Contact
          </button>
        </span>
        <span>
          <button type="button" onClick={handleNavigateProducts}>
            Products
          </button>
        </span>
      </div>
    </div>
  );
}

export default Home;
