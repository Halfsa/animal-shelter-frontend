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

function App() {
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
                        path="/adoption"
                        element={<Adoption/>}
                    />
                    <Route
                        path={`/detail`}
                        element={<PetProfileAssembler/>}/>
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
