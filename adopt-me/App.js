import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <h1>Adopt Me!</h1>
            </BrowserRouter>
            <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
            </Routes>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));
