import getPetList from "../getPetList.tsx";
import axios from "axios";
interface Props{
    petId:number;
}
function PetProfile(props:Props){
    console.log(props.petId)
    const thisPet = axios.get(`/pet/${props.petId}`).then((res)=>{
        console.log(res.data.message)
        return res.data
    })
return(
    <div>
        <p></p>
    </div>
)
}
export default PetProfile;