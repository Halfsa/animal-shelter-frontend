import GetProfile from "../getProfile.tsx";
// @ts-expect-error image being dumb
import profileImg from "../../assets/profile-icon.png";
// @ts-expect-error image being dumb
import editImg from "../../assets/edit-icon-png-3587.png";
interface Props{
    path:string;
    handleSignOut:()=>void;
}
function Navbar(props:Props){
    const yoohoo = GetProfile();
    return (
        <nav className="navbar navbar-fixed-top navbar-expand-sm">
            <div className="container-fluid navbar-contentus">
                <a className="navbar-brand" href="/home">WUFF</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <a className={props.path === "/" ? "nav-link active" : "nav-link"} aria-current="page"
                               href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={props.path === "/adoption" ? "nav-link active" : "nav-link"}
                               href="/adoption">Adoption</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        {yoohoo ? <div className={"dropdown profileImage"}>
                            <a className="dropbtn">
                                <img alt={"show profile"} width={30}
                                     src={profileImg}/>
                            </a>
                            <div className={"dropdown-content"}>
                                <h5>{yoohoo.username}</h5>
                                <p>{yoohoo.email ? yoohoo.email : <i>No email added</i>}</p>
                                <button className={"signout"} onClick={props.handleSignOut}>Sign out</button>
                                <a href={'/edit'}><img alt={"edit profile"} width={15} src={editImg}/> edit
                                    profile</a>
                            </div>
                        </div> :<div className={"logregButtons"}>
                            <a className="btn loginBtn" href={"/login"}>Login</a>
                            <a className="btn loginBtn" href={"/register"}>Register
                    </a></div>
                    }
                </form>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;