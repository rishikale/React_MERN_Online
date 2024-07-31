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

  const { handleSubmit, register, reset, watch, getValues, setValue } = useForm(
    {
      defaultValues: defaultValues,
    }
  );

  //   handleSubmit -- handleSubmit is the function or a code block which is used for getting all the values at a single submit .
  //   register -- used to register the local form fields with the react hook form that react hook form can interact with each single field .
  //   watch -- watch is function used to get the field value before the submit targetting the field name
  //            it is noting but just like the fields onChange event .
  //   getValues -- getValues will work same as watch but it works onClick .
  //   setValue -- it is the function used to set a forcefull value to any field lying between your form tag .

  // a function used to get the form values when the button clicked which is having tye type "Submit" .
  console.log("The values in the form :", users);
  function getFormValues(values) {
    let dataArray = [...users];
    dataArray.push(values);
    setUsers(dataArray);
    reset(defaultValues);
  }

  // useCase of watch
  // 1.
  const firstNameWatch = watch("firstName");
  // 2 .
  const [firstName, middleName, lastName, age] = watch([
    "firstName",
    "middleName",
    "lastName",
    "age",
  ]);

  // useCase of getValues
  function getFieldValues() {
    let getValuesFirstName = getValues("firstName");


    // useCase of setValue 
    if(getValuesFirstName==="abc"){
      setValue("age",20)
      setValue("lastName","")
    }else{
      setValue("age",0)
      setValue("lastName","last name")
    }

    // if(country==="india"){
    //   setValue("isdCode",+91)
    // }

    console.log("getValues :", getValuesFirstName);
  }

  // useFieldArray() -- in tomorrows session

  console.log(
    "firstNameWatch value is :",
    firstName,
    middleName,
    lastName,
    age
  );

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
        <button
          type="button"
          onClick={() => {
            getFieldValues();
          }}
        >
          Get Values
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ReactHookForm;
