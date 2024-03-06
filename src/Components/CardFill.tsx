import {ReactNode} from "react";
import empty from "../empty.jpg";
import unknown from "../unknown.svg";
import male from "../male.png";
import female from "../female.png";
import GetBreedList from "./getBreedList.tsx";
import GetPetList from "./getPetList.tsx";
/* async function checkImage(url){

     const res = await fetch(url);
     const buff = await res.blob();

     return buff.type.startsWith('image/')

}*/
function CardFill() {
    const allatok: ReactNode[] = [];
    for (const pet of GetPetList()) {
        let petBreedName:string = "";
        for (const breed of GetBreedList()) {
            if (breed.breedId === pet.breedId){
                console.log(breed.name)
                petBreedName = breed.name;
            }
        }
        const currentDate: Date = new Date();
        const dateOfBirth: Date = new Date((pet.birthDate === null) ? currentDate : pet.birthDate.slice(0, 10));
        const milisecDiff = currentDate.getTime() - dateOfBirth.getTime()
        console.log((milisecDiff / 1000) / 31556926)
            const years = ((milisecDiff / 1000) / 31556926)
        if (years )
            console.log(years);
            console.log(pet.name)
            console.log(pet.description);
           // console.log(GetBreedList(pet.breedId)[0].name)
            allatok.push(
                <div key={pet.petId} className="card col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 animal-card">
                    <img src={(pet.imageUrl === null) ? empty : pet.imageUrl.toString()}
                         className="card-img-top animal-img" alt="Error when loading image"/>
                    <div className="card-body">
                        <div className="card-text">
                            <h4>
                                {pet.name}, {(years < 1) ? (years*12 < 1)? Math.ceil(years*365)+" nap" : Math.floor(years*12) +" hónap": Math.floor(years)+" év"}
                                <img alt={pet.status} style={{marginLeft: "10px"}} width={"20px"} height={"20px"}
                                     src={(pet.sex === "OTHER") ? unknown : (pet.sex === "MALE" ? male : female)}/>
                                <br/>
                                {petBreedName}
                            </h4>
                            <p>
                                {pet.description}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        console.log(allatok);
        return allatok;
    }





export default CardFill;
