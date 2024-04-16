// @ts-expect-error cant find the pic for some reason
import empty from "../../assets/empty.jpg";
import GetBreedList from "../getBreedList.tsx";
import GetPet from "../getPet.tsx";
import adoptThisPet from "./adoptThisPet.ts";
import ValidateToken from "../../ValidateToken.tsx";
function PetProfile(){
    let petId:string = '-1';
   // const [imageSrc,setImageSrc] = useState('');
    const selectedPet = sessionStorage.getItem('selected-pet');
    const token = ValidateToken();
    if (selectedPet !== null)
    {
        petId = (selectedPet);
    }
    if (petId === '-1'){
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
    function startAdoption(){
        console.log(token)
        adoptThisPet(pet?.petId,token);
    }
    return(
        <div className={"container-fluid adoptionBody p-0"}>
            <img alt={"selected animal's image"} className={"selectedImage"} src={pet? pet.imageUrls.length !==0?pet?.imageUrls[0]:empty:empty}/>
            <div className={"container selectedPet-content"}>
                <h2>{pet?.name}</h2>
                <p><b>sex: </b> {pet?.sex}</p>
                <p><b>breed: </b> {isBreedValid?thisBreed.name:"Breed unknown"}</p>
                <p id={"breedDescription"}>{isBreedValid? thisBreed.name+"'s are "+ thisBreed.description:"No description"}</p>
                <p><b>birthday: </b> {pet?.birthDate.slice(0,10)}</p>
                <p><q>{pet?.description}</q></p>
                <p id={"status"}><b>status: </b><span className={pet?.status}>{pet?.status === "INSHELTER"? "IN SHELTER":pet?.status}</span></p>
                <button className={"adoptButton btn btn-success"} onClick={startAdoption}>I want to adopt {pet?.name}</button>
            </div>
        </div>
    )

}
export default PetProfile;