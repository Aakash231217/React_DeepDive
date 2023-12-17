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
const heading = React.createElement(
    "h1",
    {
        id:"title",
    },
    "heading1 From parcel"
    //it is equal to <div id="title">heading</div>
);

//JSX
const heading1= (
<h1 id="title" key="h2">Namaste React</h1>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);
