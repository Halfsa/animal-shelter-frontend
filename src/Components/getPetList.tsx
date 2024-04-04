import {useEffect, useState} from "react";
import {Pet} from "../petDTO.tsx";
import axios from "axios";

function GetPetList() {
    const [pet, setPet] = useState<Pet[]>([]);
    useEffect(() => {
        axios.get("/pet", {})
            .then((response)=>{
                setPet(response.data as Pet[]);
            })
            .catch((error) => console.log(error));
    }, []);
    return pet;
}
export default GetPetList;