import NavbarHandler from "../Navbar/NavbarHandler.tsx";
import Footer from "../footer.tsx";
import EditProfileHandler from "./EditProfileHandler.tsx";

function EditProfileAssembler(){
    return(
        <div>
            <NavbarHandler/>
            <EditProfileHandler/>
            <Footer/>
        </div>
    )
}
export default EditProfileAssembler;