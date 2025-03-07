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

//jsx

document.write(parent);   //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  //it will render the parent inside the root