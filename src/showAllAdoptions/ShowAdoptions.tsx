import {useEffect, useState} from "react";
import axios from "axios";
import ValidateToken from "../ValidateToken.tsx";
import {Adoption} from "../petDTO.tsx";
import AdoptionDisplay from "./adoptionDisplay.tsx";
import eventBus from "../EventBus.ts";

export default function ShowAdoptions(){
    const [allAdoptions,setAllAdoptions] = useState<Adoption[]>([]);
    const [displayAdoptions,setDisplayAdoptions] = useState<Adoption[]>([])
    const statuses:string[] = [];
    const tokenToSend = ValidateToken();
    console.log(displayAdoptions)
    function getAdoptions(){
        axios.get("/adoption/my",{
            headers:{
                Authorization: `Bearer ${tokenToSend}`
            }
        }).then(res=>{
            console.log(res)
            setAllAdoptions(res.data)
            if (displayAdoptions.length === 0){
                setDisplayAdoptions(res.data)
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(() => {
        getAdoptions();
    }, [tokenToSend]);
    useEffect(() => {
        eventBus.on("updateAdoptionInfo",()=>{
            getAdoptions();
        })
        return()=>{
            eventBus.remove("updateAdoptionInfo",()=>{})
        }
    });
    console.log(allAdoptions.length === 0)
    function cancelAdoption(id:string){
        axios.delete(`/adoption/pet/${id}`,{
            headers:{
                Authorization: `Bearer ${tokenToSend}`
            }
        }).then(res=>{
            console.log(res)
            eventBus.dispatch("updateAdoptionInfo","");
        }).catch(err=>{
            console.log(err)
        })
    }
    function filterAdoptions(e:React.ChangeEvent<HTMLSelectElement>){
        setDisplayAdoptions(allAdoptions.filter(adoption=>{
            if (e.target.value === "ALL"){
                return adoption;
            }
            return adoption.status === e.target.value
        }))
    }
    return(
        <div className={"showAdoptionsBody"}>
            {allAdoptions.length === 0?<p>No adoptions started yet. <a href={"/adopt"}>start one? </a></p>:
                <>
                    <div className={"select"}>
                        <select onChange={filterAdoptions}>
                            <option key={"all"} value={"ALL"}>ALL</option>
                            {allAdoptions.map(adoption => {
                                if (!statuses.includes(adoption.status)) {
                                    statuses.push(adoption.status);
                                    return <option key={adoption.status}
                                                   value={adoption.status}>{adoption.status}</option>
                                }
                                return;
                            })}
                        </select>
                    </div>

                    {displayAdoptions.map(adoption => {
                        return (
                            <AdoptionDisplay key={adoption.adoptionId} cancelAdoption={cancelAdoption}
                                             adoption={adoption}/>
                        )
                    })}
                </>
            }

        </div>
    )
}