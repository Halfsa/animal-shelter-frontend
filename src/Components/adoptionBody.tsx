import React, {ReactNode} from "react";
import {Breed, Pet} from "../petDTO.tsx";
import empty from "../empty.jpg";
import unknown from "../unknown.svg";
import male from "../male.png";
import female from "../female.png";

interface Props{
    allatok:Pet[];
    breedList:Breed[];
    handleBreedChange: (e:React.ChangeEvent<HTMLSelectElement>)=>void;
}
function AdoptionBody(props:Props){
    return (
        <div className={"adoptionBody"}>
            <form className={"form-control d-flex"}>
                <label> breed: <br/>
                    <select onChange={props.handleBreedChange}>
                        {props.breedList.map((breed)=>{
                            return(
                                <option key={breed.name}>{breed.name}</option>
                            )
                        })}
                    </select>
                </label>
                <label>Male<br/>
                    <input type={"checkbox"}/>
                </label>
                <label>Female<br/>

                    <input type={"checkbox"}/>
                </label>
                <label>
                    <button>Keresés</button>
                </label>
            </form>
            <div className={"container animal-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 "}>
                {props.allatok.map((pet)=>{
                    let petBreedName = '';
                    props.breedList.map((breed)=>{
                        if (breed.breedId === pet.breedId){
                            console.log(breed.name)
                            petBreedName = breed.name;
                        }
                    })
                    const currentDate: Date = new Date();
                    const dateOfBirth: Date = new Date((pet.birthDate === null) ? currentDate : pet.birthDate.slice(0, 10));
                    const milisecDiff = currentDate.getTime() - dateOfBirth.getTime()
                    console.log((milisecDiff / 1000) / 31556926)
                    const years = ((milisecDiff / 1000) / 31556926)
                    return(
                        <div key={pet.petId}
                                className="card col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 animal-card">
                        <img src={(pet.imageUrl === null) ? empty : pet.imageUrl.toString()}
                             className="card-img-top animal-img" alt="Error when loading image"/>
                        <div className="card-body">
                            <div className="card-text">
                                <h4>
                                    {pet.name}, {(years < 1) ? (years * 12 < 1) ? Math.ceil(years * 365) + " nap" : Math.floor(years * 12) + " hónap" : Math.floor(years) + " év"}
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
                    </div>)
                })}
            </div>
        </div>
    )
}


export default AdoptionBody;