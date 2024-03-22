import AdoptionBody from "./adoptionBody.tsx";
import React, {useRef, useState} from "react";
import GetBreedList from "../getBreedList.tsx";
import GetPetList from "../getPetList.tsx";
import {Breed, Pet} from "../../petDTO.tsx";
import GetSpeciesList from "../getSpeciesList.tsx";
import {useNavigate} from "react-router-dom";

function AdoptionFilter(){
    const navigate = useNavigate();
    const [yoo,setYoo] = useState<Pet[]>();
    const order = useRef('namAsc');
    const speciesFilter = useRef('all');
    const breedFilter = useRef('any');
    const [checkMale,setCheckMale]=useState(false);
    const [checkFemale,setCheckFemale]=useState(false);
    const [breedNeeded,setBreedNeeded]=useState<Breed[]>([]);
    const searchBarInput= useRef('')
    const allatok = GetPetList();
    const speciesSelected = React.useRef<string>('all');
    const breedSelected = React.useRef<string>('any');
    const breeds = GetBreedList();
    const speciesList = GetSpeciesList();
    if (allatok.length >0 && yoo === undefined){
        setYoo(sortList(allatok,"namAsc"))
    }


    function calcAge(pet:Pet){
        const currentDate: Date = new Date();
        const dateOfBirth: Date = new Date((pet.birthDate === null) ? currentDate : pet.birthDate.slice(0, 10));
        const milisecDiff = currentDate.getTime() - dateOfBirth.getTime()
        const years = ((milisecDiff / 1000) / 31556926)
        return years;
    }
    function handleSearchBarChange(e:React.ChangeEvent<HTMLInputElement>){
        searchBarInput.current = e.target.value;
        console.log(searchBarInput.current)
    }
    function handleBreedChange(e:React.ChangeEvent<HTMLSelectElement>){
        breedSelected.current = e.target.value;
        console.log(e.target.value)
        breedFilter.current =(e.target.value)
    }
    function handleCheckMale(){
        setCheckMale(!checkMale);
        setCheckFemale(false);
        console.log(checkMale)
    }function handleCheckFemale(){
        setCheckFemale(!checkFemale);
        setCheckMale(false);
    }function handleOrderChange(e:React.ChangeEvent<HTMLSelectElement>){
        console.log(e.target.value);
        order.current=(e.target.value);
    }
    function handleFilterButton(e:React.MouseEvent<HTMLInputElement>){
        e.preventDefault();
        if (yoo !== undefined){
           let filterThisBitch:Pet[]|undefined = [];
           allatok.map((pet)=>{
              if (speciesFilter.current === "all"){
                  breedSelected.current = 'any';
                  breedFilter.current =("any")
                  filterThisBitch!.push(pet);
              } else {
                  if (pet.breedId !== null){
                      breeds.map((breed)=>{
                          if (breed.breedId === pet.breedId){
                              if (breed.speciesId.toString() === speciesFilter.current){
                                  filterThisBitch!.push(pet)
                              }
                          }
                      })
                  }
              }
           });
               filterThisBitch = filterThisBitch.filter((pet)=>{
               if (breedSelected.current === "any"){
                   return pet
               } else{
                   if (pet.breedId !== null && pet.breedId.toString() === breedFilter.current){
                       return pet
                   }
               }
            });
            if (filterThisBitch.length === 0){
                filterThisBitch = []
            } else{
               filterThisBitch = filterThisBitch.filter((pet)=>{
                   if (checkMale){
                       return pet.sex.toUpperCase() === "MALE"
                   }else if (checkFemale){
                       return pet.sex.toUpperCase() === "FEMALE"
                   }else{
                       return pet;
                   }
               })

            }
            filterThisBitch = filterThisBitch.filter((pet)=>{
                if (pet.name.trim().toLowerCase().includes(searchBarInput.current.trim().toLowerCase())){
                    return pet;
                }
            })
           sortList(filterThisBitch,order.current);
           setYoo(filterThisBitch);
           console.log(filterThisBitch);
           console.log(yoo)
        }
    }
    function sortList(list:Pet[]|undefined,order:string){
        if (list){
        const mom = list.sort((a,b)=>{
            switch (order) {
                case 'namAsc': {
                    if (a.name > b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
                case 'namDesc': {
                    if (a.name < b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
                case 'ageAsc': {
                    if (calcAge(a) > calcAge(b)) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
                case 'ageDesc': {
                    if (calcAge(a) < calcAge(b)) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
                default: {
                    return 0;
                }
            }
        });
            return mom;
        }
        return undefined;
    }
    function handleSpeciesChange(e:React.ChangeEvent<HTMLSelectElement>){
        console.log(e.target.value)
        speciesFilter.current =(e.target.value)
        speciesSelected.current = e.target.value;

        const mmm:Breed[] = []
        if (speciesSelected.current !== 'all'){
            breeds.map((breed)=>{
                if (breed.speciesId.toString() === speciesSelected.current){
                    mmm.push(breed);
                }
            })
        }
        setBreedNeeded(mmm);
    }
    function toggleDetailPage(id:number){
        sessionStorage.setItem('selected-pet',id.toString());
        navigate(`/detail`);
    }
    return(
        <AdoptionBody
            handleSpeciesChange={handleSpeciesChange}
            speciesList={speciesList}
            femaleCheck={checkFemale}
            maleCheck={checkMale}
            handleFilterButton={handleFilterButton}
            handleCheckMale={handleCheckMale}
            handleOrderChange={handleOrderChange}
            handleCheckFemale={handleCheckFemale}
            handleBreedChange={handleBreedChange}
            breedList={breeds}
            breedNeeded={breedNeeded}
            allatok={yoo}
            calcAge={calcAge}
            toggleDetailPage={toggleDetailPage}
            handleSearchBarChange={handleSearchBarChange}/>
    )
}
export default AdoptionFilter;