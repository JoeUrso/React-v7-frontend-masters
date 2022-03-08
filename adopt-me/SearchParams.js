import React from "react";

export default function SearchParams() {
    const location = "Seattle, WA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input
                        id="location"
                        value={location}
                        placeholder="location"
                    ></input>
                </label>
            </form>
            <button>Submit</button>
        </div>
    );
}
