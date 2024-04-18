import axios from "axios";
import { NewLocation} from "../../petDTO.tsx";

const addToLocation= async (locationDetails: NewLocation,tokenToSend:string|null)=>{
    return axios.post('/location/my',
        {
            ...locationDetails
        },{
        headers:{
            Authorization:`Bearer ${tokenToSend}`
        }
        }).then(res=>{
            console.log(res)
            return res;
    }).catch(err=>{
        console.log(err)
        return err.response;
    })
}
export default addToLocation;