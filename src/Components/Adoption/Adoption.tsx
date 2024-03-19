import Footer from "../footer.tsx";
import AdoptionFilter from "./adoptionFilter.tsx";
import NavbarHandler from "../Navbar/NavbarHandler.tsx";
import {useState} from "react";
import PetProfile from "./PetProfile.tsx";

function Adoption(){
    const [showDetails,setShowDetails] = useState<number|false>(false);
    function toggleDetailPage(id:number){
        setShowDetails(()=>{
            return id;
        });
    }
    return(
        <div>
            <NavbarHandler/>
            { !showDetails? <AdoptionFilter toggleDetailPage={toggleDetailPage}/>:<PetProfile petId={showDetails}/>}
            <Footer/>
        </div>
    )
}
export default Adoption;