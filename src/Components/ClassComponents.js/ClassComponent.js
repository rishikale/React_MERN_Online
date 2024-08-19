// class components -- Class components are the components which are used before React 18 .
// functional components -- After the launch of React 18 .

// 1 .
//  class components uses render method to render a component in user interface

//  functional components dont need the render method anymore .

// 2 .
// class components dont have any hook .
// functional components have several hooks .

//   3 .
// class component uses this keyword for state management like
//  this.state to access the state and this.setState to modify the the state

// functional components have useState hook for state management

//  4.
// where functional components have useEffect hook to avoid the sideEffects .

// in class components we have lifeCycle methods to handle or avoid the sideEffects
//   or to control the cycle of components life .

import React from "react";

//   function FunctionalComponent(){
//     return()
//   }

class ClassComponent extends React.Component {
  // Constructor  -- is keyword which is used to construct the initial state of component.
  // super        -- is keyword which shares the state created with constructor to the component .
  //  -- these are the keywords used in class components to manage the states .

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      string: "",
      array: [1, 2, 3, 4, 5],
    };
    // this.incrementCount = this.incrementCount.bind(this);
  }

  // inputs

  // Price
  // Quantity 
  // Total Amount

  // useForm
  // useEffect
  // setValue / value

  //   const [count,setCount]=React.useState(0)

  // lifecycle methods .

  //   React.useEffect(()=>{

  //   },[])

  componentDidMount() {
    console.log("The component is mounted..!");
  }
  //   React.useEffect(()=>{

  //   },[count])
  componentDidUpdate() {
    console.log("Component is updated..!");
  }
  // to control the components updation
  shouldComponentUpdate() {
    // if(condition){
    //     return true;
    // }else {
    //     return false;
    // }
    return true;
  }
  // modify the state
  //   setCount(newCount)
  incrementCount() {
    this.setState((previousState) => ({
      count: previousState.count + 2,
    }));
  }

  render() {
    return (
      <div>
        <label>Class Component..!!</label>
        <div>Count variable From the State :&nbsp;{this.state.count}</div>
        <button type="button" onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassComponent;
