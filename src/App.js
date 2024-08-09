import logo from "./logo.svg";
import "./App.css";
import Parent from "./Components/Parent";
import ContextParent from "./Components/ContextAPI/ContextParent";
import MainLayout from "./Components/ReactRouter/MainLayout";
import DynamicForm from "./Components/DynamicForm/DynamicForm";
import ReactHookForm from "./Components/ReactHookForm/ReactHookForm";
import UseFormContext from "./Components/useFormContext/UseFormContext";
import ReactHooks from "./Components/ReactHooks/ReactHooks";
import ArrayAndObjects from "./Components/ArrayAndObjects/ArrayAndObjects";

function App() {
  return (
    <div className="App">
      {/* <fieldset
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          padding: "5px",
        }}
      >
        <legend
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Props And Callback
        </legend>
        <div>
          <Parent />
        </div>
      </fieldset>
      <fieldset
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          padding: "5px",
        }}
      >
        <legend
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Context API
        </legend>
        <div>
          <ContextParent />
        </div>
      </fieldset>
      <fieldset
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          padding: "5px",
        }}
      >
        <legend
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          React Router
        </legend>
        <div>
          <ContextParent />
        </div>
      </fieldset> */}
      {/* <fieldset
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          padding: "5px",
        }}
      >
        <legend
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Dynamic Form
        </legend>
        <div>
          <DynamicForm />
        </div>
      </fieldset> */}
      <fieldset
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          padding: "5px",
        }}
      >
        <legend
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          React Hook Form
        </legend>
        <div>
          <ReactHookForm />
        </div>
      </fieldset>
      {/* <fieldset
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          padding: "5px",
        }}
      >
        <legend
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Use Form Context
        </legend>
        <div>
          <UseFormContext />
        </div>
      </fieldset> */}
      <fieldset
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          padding: "5px",
        }}
      >
        <legend
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          React Hooks
        </legend>
        <div>
          <ReactHooks />
        </div>
      </fieldset>
      <fieldset
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          padding: "5px",
        }}
      >
        <legend
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Array And Objects
        </legend>
        <div>
          <ArrayAndObjects />
        </div>
      </fieldset>
      {/* <MainLayout /> */}
    </div>
  );
}

export default App;
