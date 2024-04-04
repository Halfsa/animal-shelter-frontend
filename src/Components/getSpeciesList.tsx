import {useEffect, useState} from "react";
import {Species} from "../petDTO.tsx";
import axios from "axios";

function GetSpeciesList(){
    const [species, setSpecies] = useState<Species[]>([]);
    useEffect(() => {
        axios.get("/species", {})
            .then((res) => setSpecies(res.data))
            .catch((error) => console.log(error));
    }, []);

    return species;
}
export default GetSpeciesList;