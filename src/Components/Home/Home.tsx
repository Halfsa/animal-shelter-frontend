import Navbar from "../Navbar/navbar.tsx";
import Carousel from "../carousel.tsx";
import HomeBody from "./homeBody.tsx";
import Footer from "../footer.tsx";
import NavbarHandler from "../Navbar/NavbarHandler.tsx";

function Home(){
    const body = document.getElementById("body")!;
    body.classList.replace("image", "color");
    return(
        <div>
            <NavbarHandler/>
            <Carousel/>
            <HomeBody/>
            <Footer/>
        </div>
    )
}
export default Home;