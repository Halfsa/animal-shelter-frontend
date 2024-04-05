import {jwtDecode} from 'jwt-decode'
import axios from "axios";
import {useEffect, useState} from "react";
function ValidateToken(){
    const token = localStorage.getItem('access_token');
    const refresh = localStorage.getItem('refresh_token');
    const [returnedToken,setReturnedToken] = useState(token);
    useEffect(() => {
        if (token !== null){
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp!- Date.now()*0.001 <=5){
            axios.post('auth/refresh', {}, {
                headers: {
                    Authorization: `Bearer ${refresh}`
                }
            }).then(res => {
                console.log(res.data.message);
                localStorage.setItem('access_token', res.data.access_token)
                localStorage.setItem('refresh_token', res.data.refresh_token)
                setReturnedToken(res.data.access_token)
            }).catch(e => {
                console.log(e)
            })
        }}
    });
    return returnedToken;
}
export default ValidateToken;