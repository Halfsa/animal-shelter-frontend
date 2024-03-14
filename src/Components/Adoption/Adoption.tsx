import Navbar from "../Navbar/navbar.tsx";
import Footer from "../footer.tsx";
import AdoptionFilter from "./adoptionFilter.tsx";
import NavbarHandler from "../Navbar/NavbarHandler.tsx";
import {useState} from "react";
import PetProfile from "./PetProfile.tsx";

function Adoption(){
    let petId = -1;
    const [showDetails,setShowDetails] = useState<number|false>(false);
    function toggleDetailPage(id:number){
        setShowDetails(petId);
        petId = id;
        console.log(petId)
    }
    return(
        <div>
            <NavbarHandler/>
            { !showDetails? <AdoptionFilter toggleDetailPage={toggleDetailPage}/>:<PetProfile petId={petId}/>}
            <Footer/>
        </div>
    )
}
export default Adoption;