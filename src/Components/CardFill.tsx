import React, {ReactNode, useEffect, useState} from "react";
import empty from "../empty.jpg";
import unknown from "../unknown.svg";
import male from "../male.png";
import female from "../female.png";
import {Pet} from "../petDTO";

function CardFill(){
    const allatok:ReactNode[] = [];
    const Kok = TestCards();
    for (const pet of Kok) {
        const currentDate:Date = new Date();
        const dateOfBirth:Date = new Date((pet.birthDate === null)?currentDate:pet.birthDate.slice(0,10));
        const milisecDiff = currentDate.getTime()-dateOfBirth.getTime()
        console.log((milisecDiff/1000)/31556926)
        const years = Math.floor((milisecDiff/1000)/31556926)
        console.log(pet.name)
        console.log(pet.description);
        allatok.push(
            <div key={pet.petId} className="card col animal-card">
                <img src={(pet.imageUrl === null)? empty: pet.imageUrl.toString()} className="card-img-top animal-img" alt="..."/>
                <div className="card-body">
                    <div className="card-text">
                        <h4>
                            {pet.name}, {(years===0)?"unknown":years}
                            <img alt={pet.status} style={{marginLeft:"10px"}} width={"20px"} height={"20px"} src={(pet.sex === "OTHER")? unknown:(pet.sex === "MALE"? male:female)}/>
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
function TestCards() {
    const [pet,setPet] = useState<Pet[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/pet", {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPet(data as Pet[]);
            })
            .catch((error) => console.log(error));
    }, []);
    return pet;
}


export default CardFill;
