import axios from "axios";
import { NewLocation} from "../../petDTO.tsx";

const addToLocation= async (locationDetails: NewLocation,tokenToSend:string|null)=>{

    axios.post('/location/my',
        {
            ...locationDetails
        },{
        headers:{
            Authorization:`Bearer ${tokenToSend}`
        }
        }).then(res=>{
            console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}
export default addToLocation;