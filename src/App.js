import logo from "./logo.svg";
import "./App.css";
import Parent from "./Components/Parent";
import ContextParent from "./Components/ContextAPI/ContextParent";
import MainLayout from "./Components/ReactRouter/MainLayout";

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
      <MainLayout />
    </div>
  );
}

export default App;
