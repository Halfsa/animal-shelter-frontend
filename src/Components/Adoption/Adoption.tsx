import Navbar from "../Navbar/navbar.tsx";
import Footer from "../footer.tsx";
import AdoptionFilter from "./adoptionFilter.tsx";
import NavbarHandler from "../Navbar/NavbarHandler.tsx";

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