import React from "react";
import { useFormContext } from "react-hook-form";

function SecondFormChild() {
  const { register, watch } = useFormContext();
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
        Education Info
      </div>
      <input
        {...register("education")}
        name="education"
        placeholder="Education"
      />
      <input
        {...register("passingYear")}
        name="passingYear"
        placeholder="Passing Year"
      />
    </div>
  );
}

export default SecondFormChild;
