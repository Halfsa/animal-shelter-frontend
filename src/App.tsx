import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home.tsx";
import Adoption from "./Components/Adoption/Adoption.tsx";
import LoginHandler from "./Components/Login/loginHandler.tsx";
import RegisterHandler from "./Components/Register/registerHandler.tsx";
import PetProfileAssembler from "./Components/PetProfile/PetProfileAssembler.tsx";
import EditProfileAssembler from "./Components/EditProfile/EditProfileAssembler.tsx";
import {useState} from "react";
import ShowAdoptions from "./showAllAdoptions/ShowAdoptions.tsx";
import ShowAdoptionsAssembler from "./showAllAdoptions/showAdoptionsAssembler.tsx";

function App() {
    const [myLocation,setMyLocation] = useState(location.pathname)
    if ( myLocation !== "/login"&& myLocation !== "/register"&&myLocation !== "/profile/edit" &&myLocation !== "/profile/adoptions" &&myLocation !== "/profile/users/manage" ){
        localStorage.setItem("pathToReturnTo",myLocation)
    }
   /* const body = document.getElementById("body")!;
    const [currentPath, setCurrentPath] = useState("/");
    switch (currentPath) {
        case ("/"):{
            body.classList.replace("image", "color");
            break;
        }
        case ("/login"):{
            body.classList.replace("color", "image");
            break;
        }
        case ("/auth/register"):{
            body.classList.replace("color", "image");
            break;
        }
    }
    if (window.location.pathname !== currentPath){
        setCurrentPath(window.location.pathname);
    }*/

    return (
        <>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home/>}
                        />
                        <Route
                            path="/register"
                            element={<RegisterHandler />}
                        />
                        <Route
                            path="/login"
                            element={<LoginHandler />}
                        />
                        <Route
                            path="/adopt"
                            element={<Adoption/>}
                        />
                        <Route
                            path={`/detail`}
                            element={<PetProfileAssembler/>}
                        />
                        <Route
                            path={`/profile/edit`}
                            element={<EditProfileAssembler/>}/>
                        <Route
                            path={`/profile/adoptions`}
                            element={<ShowAdoptionsAssembler/>}/>
                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />

                    </Routes>
                </Router>
        </>
    )
}

export default App;
