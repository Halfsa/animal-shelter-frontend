import {Adoption, Pet} from "../petDTO.tsx";
import GetPetList from "../Components/getPetList.tsx";

interface Props{
    adoption:Adoption
    cancelAdoption: (id:string)=>void
}
export default function AdoptionDisplay(props:Props){
    const petList:Pet[] = GetPetList();
    const selectedPet = petList.filter(pet=>{
        if (pet.petId === props.adoption.petId){
            return pet;
        }
    })
    const pet = selectedPet[0];
    return(
        <div className={"adoptionDisplay"}>
            <img width={100} height={100} src={pet?.imageUrls[0]} alt=""/>
            <div className={"adoptionDisplayContent"}>
                <p>{pet?.name}</p>
                <p>status: {props.adoption.status}</p>
                {props.adoption.status === "PENDING" &&
                    <button className={"cancelButton"} onClick={()=>props.cancelAdoption(pet.petId)}>Cancel</button>
                }
            </div>
        </div>
    )
}