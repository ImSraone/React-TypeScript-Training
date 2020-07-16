import React from "react";
import { render } from "@testing-library/react";

class Demo extends React.Component {
  render() {
    let name = "mike";
    return (
      <React.Fragment>
        <h1>Demo Component</h1>
        <p>this is a demo component</p>
        <p> Name is {name}</p>
      </React.Fragment>
    );
  }
}

export default Demo;
