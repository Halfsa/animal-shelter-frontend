import NavbarHandler from "../Navbar/NavbarHandler.tsx";
import PetProfile from "./PetProfile.tsx";
import Footer from "../footer.tsx";

function PetProfileAssembler(){
    return(
        <div>
            <NavbarHandler/>
            <PetProfile/>
            <Footer/>
        </div>
    )
}
export default PetProfileAssembler;