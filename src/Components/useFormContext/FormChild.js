import React from "react";
import { useFormContext } from "react-hook-form";

function FormChild() {

  const { register, watch } = useFormContext();

  const educationWatch=watch("education")
  console.log("educationWatch",educationWatch);

  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Basic Info
      </div>
      <input
        name="firstName"
        {...register("firstName")}
        placeholder="First Name"
      />
      <input
        name="lastName"
        {...register("lastName")}
        placeholder="Last Name"
      />
    </div>
  );
}

export default FormChild;
