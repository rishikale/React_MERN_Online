import React from "react";
import FormChild from "./FormChild";
import SecondFormChild from "./SecondFormChild";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNumber } from "../Reducers/CounterSlice";

function UseFormContext() {
  // useDispatch is hook provided by the redux toolkit
  // useDispatch is used to modify the global state available .
  const dispatch = useDispatch();
  const defaultValues = {
    firstName: "",
    lastName: "Xyz",
    education: "10th",
    passingYear: "2010",
  };

  const methods = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const { handleSubmit, watch, setValue } = methods;

  function onSubmitData(data) {
    console.log("Values From the child forms are :", data);
    if (data.firstName === "Abc") {
      setValue("passingYear", "2000");
    }
  }

  let passingYearWatch = watch("passingYear");
  console.log("passingYearWatch", passingYearWatch);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <label>Use Form Context</label>
        <div>
          <div>
            <div>
              <FormChild />
            </div>
            <div>
              <SecondFormChild />
            </div>
            <div>
              <button type="Submit">Submit</button>
            </div>
            <div>
              <button
                type="button"
                className="rounded px-3 bg-green-500 text-white my-5"
                onClick={() => {
                  dispatch(addNumber(10));
                }}
              >
                Add Number
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default UseFormContext;
