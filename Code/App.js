import React from "react";
import ReactDOM from "react-dom/client";

/* react element
 const parent = React.createElement("div",{ id: "parent"}, React.createElement("div" ,{ id : " child"} ,[React.createElement("h1" , {} , "I am H1 tag") , React.createElement("h2", {} , "I am H2 tag")],
 )
 );
const heading = React.createElement("h1",{ id : "heading" , xyz: "abc"}, "Hello World From react");console.log(heading);
 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent) */

//JSX
//JSX (TRANSPILED before it reaches the JS) - parcel
//JSX => BABEL Transpiles it to React.createElement => ReactElement.JS object => HTMLelement(render)

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste react using JSX    
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

// React Component
// class based component - old
// functional component - new
//REACT Function component - 
// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);