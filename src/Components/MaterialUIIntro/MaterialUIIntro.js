import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import PublishIcon from '@mui/icons-material/Publish';

function MaterialUIIntro() {
  const defaultValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    address: "",
  };
  const { watch, handleSubmit, register } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  let firstNameWatch = watch("firstName");

  React.useEffect(()=>{
console.log("The first name value onChange is :",firstNameWatch);

  },[firstNameWatch])

  function onSubmitData(data) {
    console.log("The data in the form :", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <div>Material UI Intro</div>
      <div>
        {/* <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack> */}
      </div>
      <div className="flex gap-5 items-center justify-center my-5">
        <TextField
          sx={{
            width: 300,
          }}
          id="outlined-basic"
          name="firstName"
          {...register("firstName")}
          label="First Name"
          variant="outlined"
        />
        <TextField
          sx={{
            width: 300,
          }}
          id="outlined-basic"
          label="Middle Name"
          name="middleName"
          {...register("middleName")}
          variant="outlined"
        />
        <TextField
          sx={{
            width: 300,
          }}
          id="outlined-basic"
          label="Last Name"
          name="lastName"
          {...register("lastName")}
          variant="outlined"
        />
      </div>
      <div className="flex gap-5 items-center justify-center my-5">
        <TextField
          sx={{
            width: 300,
          }}
          id="outlined-basic"
          label="Age"
          name="age"
          {...register("age")}
          variant="outlined"
        />
        <TextField
          sx={{
            width: 300,
          }}
          id="outlined-basic"
          label="Address"
          name="address"
          {...register("address")}
          variant="outlined"
        />
      </div>
      <div className="flex gap-5 items-center justify-center my-5">
        <Button variant="contained">
            <PublishIcon/>
        </Button>
      </div>
    </form>
  );
}

export default MaterialUIIntro;
