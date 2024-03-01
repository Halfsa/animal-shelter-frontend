import Navbar from "./navbar";
import Footer from "./footer";
import AdoptionBody from "./adoptionBody";

function Adoption(){
    const body = document.getElementById("body")!;
    body.classList.replace("image", "color");
    return(
        <div>
            <Navbar/>
            <AdoptionBody/>
            <Footer/>
        </div>
    )
}
export default Adoption;