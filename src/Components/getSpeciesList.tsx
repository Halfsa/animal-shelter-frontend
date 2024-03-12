import {useEffect, useState} from "react";
import {Species} from "../petDTO.tsx";

function GetSpeciesList(){
    const [species, setSpecies] = useState<Species[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/species", {})
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSpecies(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return species;
}
export default GetSpeciesList;