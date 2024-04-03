import EditProfile from "./EditProfile.tsx";
import NavbarHandler from "../Navbar/NavbarHandler.tsx";
import Footer from "../footer.tsx";

function EditProfileAssembler(){
    return(
        <div>
            <NavbarHandler/>
            <EditProfile/>
            <Footer/>
        </div>
    )
}
export default EditProfileAssembler;