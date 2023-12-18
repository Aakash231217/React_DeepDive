//HMR- Hot Module Reload - it means parcel will keep track of everything changes
// File Watchers algorithm - written in C++
//Parcel
//HTTPS on dev
// why to put parcel cache in gitignore
//anything which can put on server can be put on gitignore
//port Number
//Consistent Hashing Alogrithm
//zero config bundler
import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const Title =()=>(
    <h1 id="title" key="h2">
        Namaste React !
    </h1>
)

const Heading1= ()=>{
   return (
   <div>
    <Title/>
    <h1>Namaste React Functional Component</h1>
   <h2>This is H2 tag</h2>
   </div>
   );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading1 />);
