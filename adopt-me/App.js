const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Roxy",
            animal: "Dog",
            breed: "Cockapoo",
        }),
        React.createElement(Pet, {
            name: "Slumpy",
            animal: "Cat",
            breed: "Ragdoll",
        }),
        React.createElement(Pet, {
            name: "Jim",
            animal: "Bird",
            breed: "Parrot",
        }),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
