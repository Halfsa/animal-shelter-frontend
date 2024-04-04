import axios from "axios";
import {useEffect, useState} from "react";
import {User} from "../petDTO.tsx";
import ValidateToken from "../ValidateToken.tsx";

function GetProfile(){
    const [yoo,setYoo] = useState<User|undefined>(undefined);
    const tokenToSend = ValidateToken();
    useEffect(() => {
        axios.get('/user/me',
            {
                headers: {
                    Authorization: `Bearer ${tokenToSend}`
                }
            }
            ).then((res)=>{
            setYoo({username:res.data.username,name:res.data.name,email:res.data.email});
        }).catch((err)=>{
            console.log(err);
        });
    }, [tokenToSend]);
    return yoo
}
export default GetProfile;