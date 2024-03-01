import React, {ReactNode, useEffect, useState} from "react";
import CardFill from "./CardFill";


function AdoptionBody(){
    const allatok:ReactNode[] = CardFill();
    return (
        <div className={"adoptionBody"}>
            <form className={"form-control d-flex"}>
                <label> species: <br/>
                    <input className={"form-text input"} role={"search"} type={"text"}/>
                </label>
                <label>Male<br/>
                    <input type={"checkbox"}/>
                </label>
                <label>Female<br/>
                    <input type={"checkbox"}/>
                </label>
                <label>
                    <button>Keresés</button>
                </label>
            </form>
            <div className={"container animal-list row row-cols-xs-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-5 d-flex align-content-center"}>
                {allatok}
            </div>
        </div>
    )
}


export default AdoptionBody;