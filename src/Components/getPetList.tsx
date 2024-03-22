import {useEffect, useState} from "react";
import {Pet} from "../petDTO.tsx";

function GetPetList() {
    const [pet, setPet] = useState<Pet[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/pet", {})
            .then((response) => response.json())
            .then((data) => {
                setPet(data as Pet[]);
            })
            .catch((error) => console.log(error));
    }, []);
    return pet;
}
export default GetPetList;