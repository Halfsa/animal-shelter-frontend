import {useEffect, useState} from "react";
import {Location} from "../petDTO.tsx";
import axios from "axios";

function GetMyLocation(){
    const [locations,setLocations] = useState<Location[]>()
    useEffect(() => {
        axios.get('/location/my',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then((res)=>{
                setLocations(res.data)
        })
    }, []);

    return locations;
}
export default GetMyLocation;