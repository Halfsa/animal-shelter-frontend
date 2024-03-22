import axios from "axios";
import {useEffect, useState} from "react";
import {User} from "../petDTO.tsx";

function GetProfile(){
    const [yoo,setYoo] = useState<User|undefined>(undefined);
    useEffect(() => {
        axios.get('/user/me').then((res)=>{
            setYoo({username:res.data.username,name:res.data.name,email:res.data.email});
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return yoo
}
export default GetProfile;