import React, { FunctionComponent } from "react";
import { Pet as PetType } from "./ApiResponsesTypes";
import Pet from "./Pet";

const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
    return (
        <div>
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        key={pet.id}
                        id={pet.id}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                    />
                ))
            )}
        </div>
    );
};

export default Results;
