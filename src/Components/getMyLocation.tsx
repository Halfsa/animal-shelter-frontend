import {useEffect, useState} from "react";
import {Location} from "../petDTO.tsx";
import axios from "axios";
import ValidateToken from "../ValidateToken.tsx";

function GetMyLocation(){
    const [locations,setLocations] = useState<Location[]>()
    const tokenToSend = ValidateToken();
    useEffect(() => {
        axios.get('/location/my',{
            headers: {
                Authorization: `Bearer ${tokenToSend}`
            }
        }).then((res)=>{
                setLocations(res.data)
        })
    }, [tokenToSend]);

    return locations;
}
export default GetMyLocation;