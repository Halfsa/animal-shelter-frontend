import React from "react";
import {Breed, Pet, Species} from "../../petDTO.tsx";
// @ts-expect-error image being stupid
import empty from "../../assets/empty.jpg";
// @ts-expect-error image being stupid
import unknown from "../../assets/unknown.svg";
// @ts-expect-error image being stupid
import male from "../../assets/male.png";
// @ts-expect-error image being stupid
import female from "../../assets/female.png";
// @ts-expect-error image being stupid
import paw from "../../assets/paw.png";
// @ts-expect-error image being stupid
import happyDogs from "../../assets/happy-dogs.jpg";
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
    toggleDetailPage:(petId:string)=>void;
    handleSearchBarChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
function AdoptionBody(props:Props){
    return (
        <div className={"adoptionBody"}>
            <div className={"container-fluid card p-0 "}>
                <img  alt={"Many dogs await adoption"} className={"adoptionImage promotionImage"} src={happyDogs}/>
                <div className=" container card-img-overlay">
                    <h5 className="adoptionImageOverlayText"></h5>
                </div>
            </div>
            <div className={"row adoptionContent"}>
                <div className={"container filter"}>
                    <form className={"form-control"}>
                        <div className={"container-fluid filter-section"}>
                            <input className={"filterInput"} name={'searchBar'} onChange={props.handleSearchBarChange}
                                   type={"text"} id={"animal-search-bar"}
                                   placeholder={"Search by name..."}/>
                        </div>
                        <div className={"container-fluid filter-section"}>
                        <select className={"form-select-sm filterInput"} name={'selectSpecies'} defaultValue={'all'}
                                onChange={props.handleSpeciesChange}>
                            <option value={'all'}>species - all</option>
                            {props.speciesList.map((species) => {
                                return (
                                    <option value={species.speciesId} key={species.speciesId}>{species.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={(props.breedNeeded.length === 0 ? "gone" : "ungone") + " container-fluid filter-section"}>

                        <select
                            className={" form-select-sm filterInput"}
                            name={'selectBreed'} defaultValue={'any'} onChange={props.handleBreedChange}>
                            <option value={'any'}>breed - any</option>
                            {props.breedNeeded.map((breed) => {

                                return (
                                    <option value={breed.breedId} key={breed.breedId}>{breed.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div id="checkBoxContainer" className={"container-fluid filter-section"}>
                        <label className={"checkbox-labels"}><p>male</p>
                            <input className={"filterInput"} checked={props.maleCheck}
                                   onChange={props.handleCheckMale}
                                   id={"checkBoxMale"}
                                   type={"checkbox"}/>
                        </label>
                        <label className={"checkbox-labels"}> <p>female</p>
                            <input className={"filterInput"} checked={props.femaleCheck}
                                   onChange={props.handleCheckFemale}
                                   id={"checkBoxFemale"}
                                   type={"checkbox"}/>
                        </label>
                    </div>
                    <div className={"container-fluid filter-section"}>
                        <select className={"form-select-sm filterInput"} name={'selectOrder'}
                                onChange={props.handleOrderChange}
                                defaultValue={'default'}>
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
                    </div>
                    <div className={"container-fluid"}>
                        <input className={"filterInput"} id={"adoptionFilterButton"} onClick={props.handleFilterButton}
                               type={"submit"} value={'search'}/>
                    </div>

                </form>
            </div>
            <div
                className={"container col animal-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 "}>
                {props.allatok !== undefined && props.allatok.length !== 0 ?
                    props.allatok.map((pet) => {
                        let petBreedName = '';
                        props.breedList.map((breed) => {
                            if (breed.breedId === pet.breedId) {
                                petBreedName = breed.name;
                            }
                        })
                        const years = props.calcAge(pet);
                        return (
                            <div key={pet.petId}
                                 className="card col animal-card"
                                 onClick={() => props.toggleDetailPage(pet.petId)}>
                                <img src={(pet.imageUrls.length ===0) ? empty : pet.imageUrls[0].toString()}
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
                                                    Math.ceil(years * 365) + (Math.ceil(years * 365) === 1 ? " day" : " days") :
                                                    Math.floor(years * 12) + (Math.floor(years * 12) === 1 ? " month" : " months") :
                                                Math.floor(years) + (Math.floor(years) === 1 ? " year" : " years")} old
                                            <br/>
                                            {petBreedName}
                                        </h6>
                                        <p>
                                            {pet.description}
                                        </p>
                                    </div>
                                </div>
                                <img alt={"paw"} src={paw} className={"paws"} id={"paw"}/>
                                <img alt={"paw"} src={paw} className={"paws"} id={"paw2"}/>
                                <img alt={"paw"} src={paw} className={"paws"} id={"paw3"}/>
                                <img alt={"paw"} src={paw} className={"paws"} id={"paw4"}/>
                            </div>)
                    }) : <div className={'container notFoundDiv'}>No results found</div>}
                </div>
            </div>
        </div>
    )
}


export default AdoptionBody;