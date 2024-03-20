import axios from "axios";
import { useState} from "react";
import {Pet} from "../../petDTO.tsx";
import empty from "../../assets/empty.jpg";
import GetBreedList from "../getBreedList.tsx";
function PetProfile(){
    let petId:number = -1;
    const selectedPet = sessionStorage.getItem('selected-pet');
    if (selectedPet !== null)
    {
        petId = Number.parseInt(selectedPet);
    }
    if (petId === -1){
        return(
            <div>Baj van</div>
        );
    }

    const pet = GetPet(petId)
    const breeds = GetBreedList();
    const thisBreed = breeds.find((breed)=>{
        return breed.breedId === pet?.breedId;
    })
    const isBreedValid = thisBreed !== undefined && thisBreed !== null;
    return(
        <div className={"container-fluid adoptionBody p-0"}>
            <img alt={"selected animal's image"} className={"selectedImage"} src={pet?.imageUrl === null || pet?.imageUrl ===undefined? empty:pet.imageUrl.toString()}/>
            <div className={"container selectedPet-content"}>
                <h2>{pet?.name}</h2>
                <p><b>sex: </b> {pet?.sex}</p>
                <p><b>breed: </b> {isBreedValid?thisBreed.name:"Breed unknown"}</p>
                <span> <i>{isBreedValid? thisBreed.name+"'s are "+ thisBreed.description:"knsanks"}</i></span>
                <p><b>birthday: </b> {pet?.birthDate.slice(0,10)}</p>
                <p><i>"{pet?.description}"</i></p>
                <p><b>status: </b>{pet?.status}</p>
            </div>
        </div>
    )
    function GetPet(id:number){
    const [pet,setPet] = useState<Pet|undefined>(undefined);
            axios.get(`/pet/${id}`).then((res)=>{
                if (pet === undefined){
                setPet(res.data)
                }
                return res.data;
            })
        return pet;
    }
}
export default PetProfile;