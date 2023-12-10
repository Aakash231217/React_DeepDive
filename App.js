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


const heading2 = React.createElement(
    "h2",
    {
        id:"title",

    },
    "heading2"
)


const container= React.createElement(
    "div",
    {
        id:"container",
    },
    [heading, heading2]
);
const root= ReactDOM.createRoot(document.getElementById("root"))

//async defer
root.render(container);