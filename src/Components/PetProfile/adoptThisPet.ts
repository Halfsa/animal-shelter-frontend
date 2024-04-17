import axios from "axios";
const adoptThisPet = async (id:string|undefined,sendThisToken:string|null)=>{
    if (id) {
        return axios.post ( `/adoption/pet/${id}`,{},{
            headers:{
                Authorization:`Bearer ${sendThisToken}`
            }
        } )
            .then ( res => {
                console.log ( res );
                return res;
            } ).catch ( err => {
                console.log ( err )
                return err;
            } )
    }
    return "Pet with id was not found"
}
export default adoptThisPet;