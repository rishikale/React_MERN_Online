import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function ReactHookForm() {
  //   const { propOne, propTwo } = props;
  const [users, setUsers] = React.useState([]);
  const [isEdit, setIsEdit] = React.useState(false);
  const [updateIndex, setUpdateIndex] = React.useState(null);

  const defaultValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    age: 0,
    education: [{ education: "", passingYear: "", place: "" }],
  };

  const errorObject = yup.object().shape({
    // firstName: yup.string().required(),
    // middleName: yup.string().required(),
    // lastName: yup.string().required(),
    // age: yup.number().required().min(1).max(150),
  });

  // 1. yup

  // yup is library that provides or used to create a error schema or errorObject

  // 2. yupResolver

  //  when yupResolver is passed to useForm it resolves the values inserted
  //  by the user with the errorObject that you have created using yup

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
    watch,
    getValues,
    setValue,
    control,
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
    resolver: yupResolver(errorObject),
  });

  const { fields, append, remove } = useFieldArray({
    name: "education",
    control,
  });

  //   handleSubmit -- handleSubmit is the function or a code block which is used for getting all the values at a single submit .
  //   register -- used to register the local form fields with the react hook form that react hook form can interact with each single field .
  //   watch -- watch is function used to get the field value before the submit targetting the field name
  //            it is noting but just like the fields onChange event .
  //   getValues -- getValues will work same as watch but it works onClick .
  //   setValue -- it is the function used to set a forcefull value to any field lying between your form tag .

  // a function used to get the form values when the button clicked which is having tye type "Submit" .
  function getFormValues(values) {
    if (isEdit === false) {
      console.log("The values in the form :");
      let dataArray = [...users];
      dataArray.push(values);
      setUsers(dataArray);
      reset(defaultValues);
    } else {
      let dataArray = structuredClone(users);
      // dataArray[updateIndex] = updateObject;
      dataArray.splice(updateIndex, 1, values);
      setUsers(dataArray);
      setIsEdit(false);
    }
  }

  // useCase of watch
  // 1.
  const firstNameWatch = watch("firstName");
  // 2 .
  const [firstName, middleName, lastName, age, educationWatch] = watch([
    "firstName",
    "middleName",
    "lastName",
    "age",
    "education",
  ]);

  console.log("educationWatch fieldArray is :", educationWatch);
  console.log("the errors in the form and the isValid flag :", errors, isValid);

  // useCase of getValues
  function getFieldValues() {
    let getValuesFirstName = getValues("firstName");

    // useCase of setValue
    if (getValuesFirstName === "abc") {
      setValue("age", 20);
      setValue("lastName", "");
    } else {
      setValue("age", 0);
      setValue("lastName", "last name");
    }

    // if(country==="india"){
    //   setValue("isdCode",+91)
    // }

    console.log("getValues :", getValuesFirstName);
  }

  // useFieldArray() -- in tomorrows session

  console.log(
    "firstNameWatch value is :",
    updateIndex
  );

  function handleEdit(user, userIndex) {
    setValue("firstName", user?.firstName);
    setValue("middleName", user?.middleName);
    setValue("lastName", user?.lastName);
    setValue("age", user?.age);
    setIsEdit(true);
    setUpdateIndex(userIndex);
  }
  const [firstNameVal, middleNameVal, lastNameVal, ageVal] = watch([
    "firstName",
    "middleName",
    "lastName",
    "age",
  ]);

  function handleUpdateUser() {
    console.log(
      "firstName,middleName,lastName,age",
      firstName,
      middleName,
      lastName,
      age
    );

    // array.splice(requiredIndex,deleteCount,replaceObject/object to push)

    let updateObject = {
      firstName: firstNameVal,
      middleName: middleNameVal,
      lastName: lastNameVal,
      age: ageVal,
      education: [
        {
          education: "",
          passingYear: "",
          place: "",
        },
      ],
    };

    let dataArray = structuredClone(users);
    dataArray[updateIndex] = updateObject;
    // dataArray.splice(updateIndex, 1, updateObject);
    setUsers(dataArray);
    setIsEdit(false);
    setValue("firstName", "");
    setValue("middleName", "");
    setValue("lastName", "");
    setValue("age", 0);
    reset(defaultValues);

    // setUpdateIndex(null);
  }

  console.log("dataArray after modification is :", users);
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
          type="text"
          placeholder="First Name"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
          }}
        />
        <input
          name="middleName"
          type="text"
          {...register("middleName")}
          placeholder="Middle Name"
        />
        <input
          name="lastName"
          {...register("lastName")}
          type="text"
          placeholder="Last Name"
        />
        <input
          name="age"
          type="number"
          {...register("age")}
          placeholder="Age"
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {fields.map((field, fieldIndex) => {
          return (
            <div key={fieldIndex}>
              <input
                name={`education[${fieldIndex}].education`}
                {...register(`education[${fieldIndex}].education`)}
                placeholder="Education"
                style={{ marginRight: "10px" }}
              />
              {/* `education[0].education` */}
              {/* `education[2].education` */}
              <input
                name={`education[${fieldIndex}].passingYear`}
                {...register(`education[${fieldIndex}].passingYear`)}
                placeholder="Passing Year"
                style={{ marginRight: "10px" }}
              />
              <input
                name={`education[${fieldIndex}].place`}
                {...register(`education[${fieldIndex}].place`)}
                placeholder="Place"
                style={{ marginRight: "10px" }}
              />
              <button
                type="button"
                onClick={() => {
                  append({ education: "", passingYear: "", place: "" });
                }}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  remove(fieldIndex);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      {/* <button
        type="button"
        onClick={() => {
          getFieldValues();
        }}
      >
        Get Values
      </button> */}
      {isEdit === true ? (
        <button type="submit">Update</button>
      ) : (
        <button type="submit">Submit</button>
      )}

      <div className="my-5 justify-center text-center">
        <table>
          <thead>
            <tr>
              <td className="border border-slate-700">Actions</td>
              <td className="border border-slate-700">First Name</td>
              <td className="border border-slate-700">Middle Name</td>
              <td className="border border-slate-700">Last Name</td>
              <td className="border border-slate-700">Age</td>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0
              ? users.map((user, userIndex) => {
                  return (
                    <tr>
                      <td className="border border-slate-700">
                        <div className="flex gap-2 items-center">
                          <button
                            onClick={() => {
                              handleEdit(user, userIndex);
                            }}
                            className="bg-green-800 text-white rounded px-2 m-2"
                            type="button"
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-800 text-white rounded px-2 m-2"
                            type="button"
                            onClick={() => {
                              let dataArray = [...users];
                              // let filtered=dataArray.filter((item)=>item!==user)
                              dataArray.splice(userIndex, 1);
                              setUsers(dataArray);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                      <td className="border border-slate-700">
                        {user?.firstName}
                      </td>
                      <td className="border border-slate-700">
                        {user?.middleName}
                      </td>
                      <td className="border border-slate-700">
                        {user?.lastName}
                      </td>
                      <td className="border border-slate-700">{user?.age}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default ReactHookForm;
