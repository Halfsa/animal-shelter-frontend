import {useState} from "react";
import {Location} from "../petDTO.tsx";
import axios from "axios";

function GetMyLocation(){
    const [locations,setLocations] = useState<Location[]>()
    axios.get('/location/my').then((res)=>{
        if (!locations){
            setLocations(res.data)
        }
    })
    return locations;
}
export default GetMyLocation;