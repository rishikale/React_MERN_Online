import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  //   const { propOne, propTwo } = props;
  const [users, setUsers] = React.useState([]);

  const defaultValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    age: 0,
  };

  const { handleSubmit, register, reset } = useForm({
    defaultValues: defaultValues,
  });

  //   handleSubmit -- handleSubmit is the function or a code block which is used for getting all the values at a single submit .
  //   register -- used to register the local form fields with the react hook form that react hook form can interact with each single field .

  // a function used to get the form values when the button clicked which is having tye type "Submit"
  console.log("The values in the form :", users);
  function getFormValues(values) {
    let dataArray = [...users];
    dataArray.push(values);
    setUsers(dataArray);
    reset(defaultValues);
  }

  return (
    <form onSubmit={handleSubmit(getFormValues)}>
      <label
        style={{
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        React Hook Form
      </label>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <input
          name="firstName"
          {...register("firstName")}
          placeholder="First Name"
        />
        <input
          name="middleName"
          {...register("middleName")}
          placeholder="Middle Name"
        />
        <input
          name="lastName"
          {...register("lastName")}
          placeholder="Last Name"
        />
        <input name="age" {...register("age")} placeholder="Age" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ReactHookForm;
