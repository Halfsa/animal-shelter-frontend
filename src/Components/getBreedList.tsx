import {useEffect, useState} from "react";
import {Breed} from "../petDTO.tsx";

function GetBreedList(){
    const [breed, setBreed] = useState<Breed[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/breed", {})
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBreed(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return breed;
}
export default GetBreedList