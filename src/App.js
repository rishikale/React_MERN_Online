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
import TailwindCssIntro from "./Components/TailwindCss/TailwindCssIntro";
import ClassComponent from "./Components/ClassComponents.js/ClassComponent";
import MaterialUIIntro from "./Components/MaterialUIIntro/MaterialUIIntro";
import NestedMapping from "./Components/NestedMapping/NestedMapping";
import TableModification from "./Components/TableModifications/TableModification";
import { Provider } from "react-redux";
import store from "./store";
import Products from "./Components/Products/Products";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
            Dynamic Form
          </legend>
          <div>
            <DynamicForm />
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
            React Hook Form
          </legend>
          <div>
            <ReactHookForm />
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
            Use Form Context
          </legend>
          <div>
            <UseFormContext />
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
            Table Modification
          </legend>
          <div>
            <TableModification />
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
            Nested Mapping Component
          </legend>
          <div>
            <Products />
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
            Nested Mapping Component
          </legend>
          <div>
            <NestedMapping />
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
            Material UI
          </legend>
          <div>
            <MaterialUIIntro />
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
            Tailwind CSS Overview
          </legend>
          <div>
            <TailwindCssIntro />
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
            React Class Components
          </legend>
          <div>
            <ClassComponent />
          </div>
        </fieldset>
        {/* <MainLayout /> */}
      </div>
    </Provider>
  );
}

export default App;
