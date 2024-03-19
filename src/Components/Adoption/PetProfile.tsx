import axios from "axios";
import { useRef, useState} from "react";
import {Pet} from "../../petDTO.tsx";
interface Props{
    petId:number;
}
function PetProfile(props:Props){
    const pet = GetPet(props.petId);
    console.log(pet);
    return(
        <div className={"adoptionBody"}>
            {pet !== undefined&& pet.name}
        </div>
    )
    function GetPet(id:number){
    const pet = useRef<Pet|undefined>(undefined);
            axios.get(`/pet/${id}`).then((res)=>{
                pet.current = (res.data)
                return res.data;
            })
        return pet.current;
    }
}
export default PetProfile;