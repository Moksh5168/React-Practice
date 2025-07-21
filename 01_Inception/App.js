{
  /* <div id="parent">
  <div id="child">
    <h1>
I am h1 tag
    </h1>
    <h2>I am h2 tag</h2> -->  for sibling create Array for multiple sibling
  </div>
  <div id="child2">
    <h1>
I am h1 tag
    </h1>
    <h2>I am h2 tag</h2> -->  for sibling create Array for multiple sibling
  </div>
</div> 
ReactElement(object) => HTML(Borwser Understand)
*/
}

// nested html sturcture using react
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);



console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello React World");
//   console.log(heading) // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
