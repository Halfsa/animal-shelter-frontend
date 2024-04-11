import {UpdateUser} from "../../petDTO.tsx";
import axios from "axios";

const EditMyProfile =async (newValues:UpdateUser,sendThisToken:string|null)=>{
    await axios.put('/user/me',{
        "username": newValues.username,
        "email": newValues.email,
        "name": newValues.name,
        "profileImageUrl": newValues.profileImageUrl
    },{
        headers: {
            Authorization: `Bearer ${sendThisToken}`
        }
    }).then(res=>{
        console.log(res);
        return res.data;
    }).catch(err=>{
        console.log(err)
        return err;
    })
}
export default EditMyProfile;