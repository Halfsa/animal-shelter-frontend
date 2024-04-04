import {useEffect, useState} from "react";
import {Pet} from "../petDTO.tsx";
import axios from "axios";

function GetPet(id:number){
    const [pet,setPet] = useState<Pet|undefined>(undefined);
    useEffect(() => {
        axios.get(`/pet/${id}`).then((res)=>{
                setPet(res.data)
            return res.data;
        })
            .catch( (e) => {
                console.log(e)
            })
    }, );
    return pet;
}
export default GetPet;