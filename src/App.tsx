import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Adoption from "./Components/Adoption";
import LoginHandler from "./Components/loginHandler.tsx";
import RegisterHandler from "./Components/registerHandler.tsx";

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
                    {/* This route is for home component
          with exact path "/", in component props
          we passes the imported component*/}
                    <Route
                        path="/"
                        element={<Home/>}
                    />

                    {/* This route is for about component
          with exact path "/about", in component
          props we passes the imported component*/}
                    <Route
                        path="/register"
                        element={<RegisterHandler />}
                    />

                    {/* This route is for contactus component
          with exact path "/contactus", in
          component props we passes the imported component*/}
                    <Route
                        path="/login"
                        element={<LoginHandler />}
                    />
                    <Route
                        path="/adoption"
                        element={<Adoption/>}
                    />

                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
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
