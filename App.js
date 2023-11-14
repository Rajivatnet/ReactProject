import React from "react"
import  ReactDOM  from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"React Application 🚀"),
    React.createElement("h2",{},"I'm an h2 tag")
])
]);

const Title =()=> (
    <h1 className="head" tabIndex="5">React Using JSX</h1>
);
const Heading =()=> (
    <div>
     {Title()}
     <Title />
     <Title></Title>
     <h1>This is React from functional component</h1>
     </div>
);

const jsxheading = <h1 id ="heading"> React using JSX 🚀🚀🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);