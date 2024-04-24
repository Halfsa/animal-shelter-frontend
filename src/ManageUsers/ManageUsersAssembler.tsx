import NavbarHandler from "../Components/Navbar/NavbarHandler.tsx";
import ManageUsers from "./ManageUsers.tsx";
import Footer from "../Components/footer.tsx";

export default function ManageUsersAssembler(){
    return(
        <>
            <NavbarHandler/>
            <ManageUsers/>
            <Footer/>
        </>
    )
}