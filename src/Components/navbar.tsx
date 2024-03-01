import React from "react";

function Navbar(){

    return (
        <nav className="navbar navbar-fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">WUFF</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/adoption">Adoption</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <a className="btn btn-outline-success" href={"/login"}>Login</a>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;