import React from "react";
import {Breed, Pet, Species} from "../../petDTO.tsx";
import empty from "../../assets/empty.jpg";
import unknown from "../../assets/unknown.svg";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import paw from "../../assets/paw.png";
interface Props{
    allatok:Pet[]|undefined;
    breedList:Breed[];
    breedNeeded:Breed[];
    speciesList:Species[];
    handleBreedChange: (e:React.ChangeEvent<HTMLSelectElement>)=>void;
    handleOrderChange: (e:React.ChangeEvent<HTMLSelectElement>)=>void;
    handleSpeciesChange: (e:React.ChangeEvent<HTMLSelectElement>)=>void;
    handleCheckMale: ()=>void;
    handleCheckFemale: ()=>void;
    handleFilterButton:(e:React.MouseEvent<HTMLInputElement>)=>void;
    femaleCheck:boolean;
    maleCheck:boolean;
    calcAge: (pet:Pet)=>number;
    toggleDetailPage:(petId:number)=>void;
}
function AdoptionBody(props:Props){
    return (
        <div className={"adoptionBody"}>
            <form className={"form-control d-flex"}>
                <label> Species: <br/>
                    <select defaultValue={'all'} onChange={props.handleSpeciesChange}>
                        <option value={'all'}>all</option>
                        {props.speciesList.map((species)=>{
                            return(
                                <option value={species.speciesId} key={species.speciesId}>{species.name}</option>
                            )
                        })}
                    </select>
                </label>
                <label className={props.breedNeeded.length === 0? "gone":"ungone"}> Breed: <br/>
                    <select defaultValue={'any'} onChange={props.handleBreedChange}>
                        <option value={'any'}>any</option>
                        {props.breedNeeded.map((breed)=>{
                            return(
                                <option value={breed.breedId} key={breed.breedId}>{breed.name}</option>
                            )
                        })}
                    </select>
                </label>
                <label>Male<br/>
                    <input checked={props.maleCheck} onChange={props.handleCheckMale} id={"checkBoxMale"} type={"checkbox"}/>
                </label>
                <label>Female<br/>
                    <input checked={props.femaleCheck} onChange={props.handleCheckFemale} id={"checkBoxFemale"} type={"checkbox"}/>
                </label>
                <label> <br/>
                    <select onChange={props.handleOrderChange} defaultValue={'default'}>
                        <option value={'namAsc'}>
                            Name ↑
                        </option>
                        <option value={'namDesc'}>
                            Name ↓
                        </option>
                        <option value={'ageAsc'}>
                            Age ↑
                        </option>
                        <option value={'ageDesc'}>
                            Age ↓
                        </option>

                    </select>
                </label>
                <label> <br/>
                    <input onClick={props.handleFilterButton} type={"submit"} value={'search'}/>
                </label>
            </form>
            <div
                className={"container-fluid animal-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 "}>
                {props.allatok !== undefined&&props.allatok.length !== 0?
                    props.allatok.map((pet)=>{
                        let petBreedName = '';
                        props.breedList.map((breed)=>{
                            if (breed.breedId === pet.breedId){
                                petBreedName = breed.name;
                            }
                        })
                        const years = props.calcAge(pet);
                        return(
                            <div key={pet.petId}
                                 className="card col animal-card"
                            onClick={()=>props.toggleDetailPage(pet.petId)}>
                                <img src={(pet.imageUrl === null) ? empty : pet.imageUrl.toString()}
                                     className="card-img-top animal-img" alt="Error when loading image"/>
                                <div className="card-body">
                                    <div className="card-text">
                                        <h6>
                                            <b className={"petCardName"}>{pet.name}</b>
                                            <img alt={pet.status} style={{marginLeft: "10px"}} width={"20px"}
                                                 height={"20px"}
                                                 src={(pet.sex === "OTHER") ? unknown : (pet.sex === "MALE" ? male : female)}/>
                                            <br/>
                                            {(years < 1) ? (years * 12 < 1) ?
                                                Math.ceil(years * 365) + (Math.ceil(years*365) === 1? " day" : " days" ):
                                                Math.floor(years * 12) + (Math.floor(years*12) === 1? " month": " months") :
                                                Math.floor(years) + (Math.floor(years) ===1?" year": " years")} old
                                            <br/>
                                            {petBreedName}
                                        </h6>
                                        <p>
                                            {pet.description}
                                        </p>
                                    </div>
                                </div>
                                <img src={paw} className={"paws"} id={"paw"}/>
                                <img src={paw} className={"paws"} id={"paw2"}/>
                                <img src={paw} className={"paws"} id={"paw3"}/>
                                <img src={paw} className={"paws"} id={"paw4"}/>
                            </div>)
                    }): <div className={'container notFoundDiv'}>No results found</div>}
            </div>
        </div>
    )
}


export default AdoptionBody;