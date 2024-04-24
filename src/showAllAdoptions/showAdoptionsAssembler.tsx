import NavbarHandler from "../Components/Navbar/NavbarHandler.tsx";
import ShowAdoptions from "./ShowAdoptions.tsx";
import Footer from "../Components/footer.tsx";

export default function ShowAdoptionsAssembler(){
    return(
        <>
            <NavbarHandler/>
            <ShowAdoptions/>
            <Footer/>
        </>
    )
}