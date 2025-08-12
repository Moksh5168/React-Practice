// {
//   /* <div id="parent">
//   <div id="child">
//     <h1>
// I am h1 tag
//     </h1>
//     <h2>I am h2 tag</h2> -->  for sibling create Array for multiple sibling
//   </div>
//   <div id="child2">
//     <h1>
// I am h1 tag
//     </h1>
//     <h2>I am h2 tag</h2> -->  for sibling create Array for multiple sibling
//   </div>
// </div> 
// ReactElement(object) => HTML(Borwser Understand)
// */
// }

// // nested html sturcture using react
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
// ]);



// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// // const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello React World");
// //   console.log(heading) // object
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement => JS-Object => HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React  ");
// console.log(heading);

//JSX- is not HTML in JS, It is HTML Like syntax(Looks like html/xml)

// JSX =>Babel transpiles it to React.createElement => ReactElement => JS-Object => HTMLElement(render)

//JSX(transpiled before it reaches the JS Engine) - Done by PARCEL - give to Babel

const elem = <span>React Element</span>;
//React Element
const jsxHeading = (
  <h1
    //   id="heading"
    className="head"
    // tabIndex="1"  --> Attribute
  >
    Namaste React using jsx
  </h1>
);
console.log(jsxHeading);

// React Component
//Class based Component - Old
// Functional  Component - New

//React Functional Component

const HeadingComponent = () => {
  return <h1 className="heading">Namaste functional component</h1>;
};

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using jsx
  </h1>
);

//Normal function without arrow but use return

const Title1 = function () {
  return (
    <h1 className="head" tabIndex="1">
      Namaste React using jsx
    </h1>
  );
};
//Another way
const fn = () => true;

const number = 10000;

// const data = api.getData();

//Below is Component Composition
const Heading2Component = () => (
  <div id="container">
    {jsxHeading}
    {Title()}
    <Title />
    <Title></Title>
    {/* <h2>{data}</h2> */}
    <h2>{100 + 200}</h2>
    {/* <Title /> */}
    <h1 className="heading">Namaste functional component</h1>
  </div>
);
const Heading3Component = () => <h1>Namaste functional component</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
root.render(<Heading2Component />);