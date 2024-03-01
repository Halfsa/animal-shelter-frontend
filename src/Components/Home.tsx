import Navbar from "./navbar";
import Carousel from "./carousel";
import HomeBody from "./homeBody";
import Footer from "./footer";

function Home(){
    const body = document.getElementById("body")!;
    body.classList.replace("image", "color");
    return(
        <div>
            <Navbar/>
            <Carousel/>
            <HomeBody/>
            <Footer/>
        </div>
    )
}
export default Home;