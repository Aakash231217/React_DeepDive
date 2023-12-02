const heading = React.createElement(
    "h1",
    {
        id:"title",
    },
    "heading1"
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
    [heading1, heading2]
);
const root= ReactDOM.createRoot(document.getElementById("root"))

//async defer
root.render(container);