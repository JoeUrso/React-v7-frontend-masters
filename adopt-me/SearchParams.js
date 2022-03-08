import React, { useState } from "react";

export default function SearchParams() {
    // const location = "Seattle, WA";
    const [location, setLocation] = useState("");
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input
                        id="location"
                        value={location}
                        placeholder="location"
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                    ></input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}
