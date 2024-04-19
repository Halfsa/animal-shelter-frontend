import axios from "axios";
import {useEffect, useState} from "react";
import {User} from "../petDTO.tsx";
import ValidateToken from "../ValidateToken.tsx";

function GetProfile(){
    const [values,setValues] = useState<User|undefined>(undefined);
    const tokenToSend = ValidateToken();
    useEffect(() => {
        axios.get('/user/me',
            {
                headers: {
                    Authorization: `Bearer ${tokenToSend}`
                }
            }
            ).then((res)=>{
            setValues({...res.data});
        }).catch((err)=>{
            console.log(err);
        });
    }, [tokenToSend]);
    return values
}
export default GetProfile;