import React, { useContext, useEffect, useState } from "react";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function SearchParams() {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        requestPets();
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }
    return (
        <div className="my-0 mx-auto w-11/12">
            <form
                className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center"
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    location
                    <input
                        id="location"
                        type="text"
                        value={location}
                        placeholder="location"
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                        className="w-60 mb-5 block"
                    ></input>
                </label>
                <label htmlFor="animal">
                    animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        className="w-60 mb-5 block"
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="animal">
                    Breed
                    <select
                        id="Breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.value);
                        }}
                        className="w-60 mb-5 block disabled:opacity-50"
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={(e) => {
                            setTheme(e.target.value);
                        }}
                        onBlur={(e) => {
                            setTheme(e.target.value);
                        }}
                        className="w-60 mb-5 block"
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>
                    </select>
                </label>
                <button
                    style={{ backgroundColor: theme }}
                    className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
                >
                    Submit
                </button>
            </form>
            <Results pets={pets} />
        </div>
    );
}
