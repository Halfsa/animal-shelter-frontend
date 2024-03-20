import Footer from "../footer.tsx";
import AdoptionFilter from "./adoptionFilter.tsx";
import NavbarHandler from "../Navbar/NavbarHandler.tsx";
import {useState} from "react";
import PetProfile from "../PetProfile/PetProfile.tsx";

function Adoption(){

    return(
        <div>
            <NavbarHandler/>
            <AdoptionFilter/>
            <Footer/>
        </div>
    )
}
export default Adoption;