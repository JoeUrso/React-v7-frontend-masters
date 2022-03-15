import React, { useContext, useEffect, useState } from "react";
import { Animal, Pet, PetApiResponse } from "./ApiResponsesTypes";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function SearchParams() {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("" as Animal);
    const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    const [pets, setPets] = useState([] as Pet[]);
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        void requestPets();
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = (await res.json()) as PetApiResponse;

        setPets(json.pets);
    }
    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    void requestPets();
                }}
            >
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
                <label htmlFor="animal">
                    animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value as Animal);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value as Animal);
                            setBreed("");
                        }}
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
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
}
