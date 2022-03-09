import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
            </BrowserRouter>
            <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
            </Routes>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));
