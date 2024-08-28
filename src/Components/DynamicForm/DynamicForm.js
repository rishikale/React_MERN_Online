import React from "react";
import { useSelector } from "react-redux";

function DynamicForm() {
  const [formFields, setFormFields] = React.useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: 0,
  });

  const globalState = useSelector((state) => state.counter.value);
  const products = useSelector((state) => state.counter.products);
  // useSelector is hook provided by Redux toolkit
  // useSelector is used to access the global state from the redux store

  const [users, setUsers] = React.useState([]);

  console.log("The saved products are :", products);

  let object = {
    key: "value",
  };

  //   1 object.key
  //   2 object["key"]
  // these are the methods used to access the values assigned to the perticular key

  function handleChange(e) {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
    // setFormFields({[fisrtName]:e.target.value})
  }

  console.log("fromFields in the form :", users);

  function handleSubmitForm() {
    let dataArray = [...users];
    dataArray.push(formFields);
    setUsers(dataArray);
    let formId = document.getElementById("firstForm");
    formId.reset();

    setFormFields({
      firstName: "",
      middleName: "",
      lastName: "",
      age: 0,
    });
  }

  return (
    <form id="firstForm">
      <label
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Dynamic Form
      </label>
      <div className="flex justify-center text-xl font-bold">
        State from the redux store is :{globalState}
      </div>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <span>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            style={{ marginLeft: "10px" }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </span>
        <span>
          <input
            name="middleName"
            type="text"
            placeholder="Middle Name"
            style={{ marginLeft: "10px" }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </span>
        <span>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            style={{ marginLeft: "10px" }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </span>
        <span>
          <input
            name="age"
            type="number"
            placeholder="Age"
            style={{ marginLeft: "10px" }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </span>

        <span>
          <button type="button" onClick={handleSubmitForm}>
            Add
          </button>
        </span>
      </div>
      <div style={{ marginTop: "10px" }}>
        <table>
          <thead>
            <tr
              style={{
                border: "1px solid black",
              }}
            >
              <td
                style={{
                  border: "1px solid black",
                  fontWeight: "bold",
                  backgroundColor: "#d7d9db",
                }}
              >
                First Name
              </td>
              <td
                style={{
                  border: "1px solid black",
                  fontWeight: "bold",
                  backgroundColor: "#d7d9db",
                }}
              >
                Middle Name
              </td>
              <td
                style={{
                  border: "1px solid black",
                  fontWeight: "bold",
                  backgroundColor: "#d7d9db",
                }}
              >
                Last Name
              </td>
              <td
                style={{
                  border: "1px solid black",
                  fontWeight: "bold",
                  backgroundColor: "#d7d9db",
                }}
              >
                Age
              </td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0
              ? users.map((user, userIndex) => {
                  return (
                    <tr
                      style={{
                        border: "1px solid black",
                      }}
                    >
                      <td
                        style={{
                          border: "1px solid black",
                        }}
                      >
                        {user["firstName"]}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                        }}
                      >
                        {user.middleName}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                        }}
                      >
                        {user.lastName}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                        }}
                      >
                        {user.age}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="flex justify-start gap-5">
        {products?.length > 0
          ? products.map((product, productIndex) => {
              return (
                <div
                  className="border border-gray-500 rounded-lg p-2"
                  key={productIndex}
                >
                  <div className="font-bold tracking-wide text-xl">
                    Product :&nbsp; {product?.Name}
                  </div>
                  <div className="font-bold tracking-wide text-xl">
                    Product Price :&nbsp; {product?.Price}
                  </div>
                  <div className="font-bold tracking-wide text-xl">
                    Product Quantity :&nbsp; {product?.Quantity}
                  </div>
                  <div className="flex justify-center mt-5">
                    <img src={product?.Image} className="h-20 w-32" />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </form>
  );
}

export default DynamicForm;
