import{ useState} from "react";
import Navbar from "./navbar.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function NavbarHandler(){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const navigate = useNavigate();
    if (window.location.pathname !== currentPath){
        setCurrentPath(window.location.pathname);
    }
    function handleSignOut(){
            axios.get('/auth/logout');
            navigate("/")
    }
    return(
        <Navbar handleSignOut={handleSignOut} path={currentPath}/>
    )
}
export default NavbarHandler