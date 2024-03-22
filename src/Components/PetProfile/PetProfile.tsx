import axios from "axios";
import React, { useState} from "react";
import {Pet} from "../../petDTO.tsx";
// @ts-ignore
import empty from "../../assets/empty.jpg";
import GetBreedList from "../getBreedList.tsx";
function PetProfile(){
    let petId:number = -1;
    const [imageSrc,setImageSrc] = useState('');
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
        function fileInput(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.files);
        const files = e.target.files;
        let data  = new FormData();
            if (files !== null) {
                data.append('file', files[0]);
            }
        axios.post('/media',
            data,
            {headers: {'Content-Type':'image/png'}}).then((data)=>{
            console.log(data.data.url);
            setImageSrc(data.data.url);
            }
        ).catch(err=>{
            console.log(err)
            console.log(err.message)
        })
    }
    return(
        <div className={"container-fluid adoptionBody p-0"}>
            <img alt={"selected animal's image"} className={"selectedImage"} src={pet?.imageUrl === null || pet?.imageUrl ===undefined? empty:pet.imageUrl.toString()}/>
            <div className={"container selectedPet-content"}>
                <h2>{pet?.name}</h2>
                <p><b>sex: </b> {pet?.sex}</p>
                <p><b>breed: </b> {isBreedValid?thisBreed.name:"Breed unknown"}</p>
                <p id={"breedDescription"}>{isBreedValid? thisBreed.name+"'s are "+ thisBreed.description:"No description"}</p>
                <p><b>birthday: </b> {pet?.birthDate.slice(0,10)}</p>
                <p><q>{pet?.description}</q></p>
                <p id={"status"}><b>status: </b><span className={pet?.status}>{pet?.status === "INSHELTER"? "IN SHELTER":pet?.status}</span></p>
                <input onInput={fileInput} id={"fileUpload"} type={"file"}/>
                <img src={imageSrc}/>
                <button className={"adoptButton btn btn-success"}>I want to adopt {pet?.name}</button>
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
                .catch( (e) => {
                    console.log(e)
                })
        return pet;
    }
}
export default PetProfile;