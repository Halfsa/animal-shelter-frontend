import{ useState} from "react";
import Navbar from "./navbar.tsx";
import axios from "axios";

function NavbarHandler(){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    if (window.location.pathname !== currentPath){
        setCurrentPath(window.location.pathname);
    }
    function handleSignOut(){
            axios.get('/auth/logout')
    }
    return(
        <Navbar handleSignOut={handleSignOut} path={currentPath}/>
    )
}
export default NavbarHandler