import{ useState} from "react";
import Navbar from "./navbar.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function NavbarHandler(){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const navigate = useNavigate();
    const sendToken = localStorage.getItem('refresh_token');
    if (window.location.pathname !== currentPath){
        setCurrentPath(window.location.pathname);
    }
    function handleSignOut(){
            axios.get('/auth/logout',{
                headers:{
                    Authorization: `Bearer ${sendToken}`
                }
        });
            navigate("/")
    }
    return(
        <Navbar handleSignOut={handleSignOut} path={currentPath}/>
    )
}
export default NavbarHandler