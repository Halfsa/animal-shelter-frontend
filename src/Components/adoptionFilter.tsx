import AdoptionBody from "./adoptionBody.tsx";
import React from "react";
import CardFill from "./CardFill.tsx";
import GetBreedList from "./getBreedList.tsx";
import GetPetList from "./getPetList.tsx";

function AdoptionFilter(){
    const allatok = GetPetList();
    const breeds = GetBreedList();
    function handleBreedChange(e:React.ChangeEvent<HTMLSelectElement>){
        console.log(e.target.value)
    }
    return(
        <AdoptionBody handleBreedChange={handleBreedChange} breedList={breeds} allatok={allatok}/>
    )
}
export default AdoptionFilter;