import {useState} from "react";
import {Pet} from "../petDTO.tsx";
import axios from "axios";

function GetPet(id:number){
    const [pet,setPet] = useState<Pet|undefined>(undefined);
    axios.get(`/pet/${id}`).then((res)=>{
        if (!pet){
            setPet(res.data)
        }
        return res.data;
    })
        .catch( (e) => {
            console.log(e)
        })
    return pet;
}
export default GetPet;