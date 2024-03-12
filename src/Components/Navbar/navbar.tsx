import GetProfile from "../getProfile.tsx";
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
                        {yoohoo ? <div className={"dropdown"}>
                            <a className="dropbtn">
                                <img alt={"show profile"} width={30}
                                     src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}/>
                            </a>
                            <div className={"dropdown-content"}>
                                <h5>{yoohoo.username}</h5>
                                <p>{yoohoo.email ? yoohoo.email : <i>No email added</i>}</p>
                                <button className={"signout"} onClick={props.handleSignOut}>Sign out</button>
                            </div>
                        </div> : <a className="btn btn-outline-success" href={"/login"}>Login</a>}
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;