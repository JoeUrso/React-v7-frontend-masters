import { lazy, StrictMode, Suspense, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => {
    import("./Details.js");
});
const SearchParams = lazy(() => {
    import("./SearchParams.js");
});

const App = () => {
    const theme = useState("darkblue");
    return (
        <StrictMode>
            <Suspense fallback={<h2>loading...</h2>}>
                <ThemeContext.Provider value={theme}>
                    <BrowserRouter>
                        <header>
                            <Link to="/">Adopt Me!</Link>
                        </header>
                        <Routes>
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeContext.Provider>
            </Suspense>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));
