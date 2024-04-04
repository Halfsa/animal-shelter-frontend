import {useEffect, useState} from "react";
import {Breed} from "../petDTO.tsx";
import axios from "axios";

function GetBreedList(){
    const [breed, setBreed] = useState<Breed[]>([]);
    useEffect(() => {
        axios.get("/breed", {})
            .then((response) => setBreed(response.data))
            .catch((error) => console.log(error));
    }, []);

    return breed;
}
export default GetBreedList