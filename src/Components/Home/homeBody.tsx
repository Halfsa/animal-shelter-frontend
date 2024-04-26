// @ts-expect-error image being weird
import hamsterHat from "../../assets/hamster-hat.jpg"
// @ts-expect-error image being weird
import easterBunny from "../../assets/easter-bunny.webp"
// @ts-expect-error image being weird
import noodleBirthday from "../../assets/noodle-birthday.jpg"
// @ts-expect-error image being weird
import guineaPigTwerking from "../../assets/guinea-pig-twerks.webp"
// @ts-expect-error image being weird
import catPic from "../../assets/jamaica-cabahug-eV4K50SxYfU-unsplash.jpg"
// @ts-expect-error image being weird
import facebook from "../../assets/pngfind.com-facebook-icons-png-transparent-2570866.png"
// @ts-expect-error image being weird
import instagram from "../../assets/instagram.png"
// @ts-expect-error image being weird
import twitter from "../../assets/twitter.png"
function Body(){
    return(
        <div className="container-fluid homeBody">
            <div className="container-fluid">
                <img className={"promotionImage"} src={catPic} alt=""/>
                <div className={"informationDiv"}>
                    <img alt={"information about our shelter"} width={30}
                         src={"https://www.tsirc.qld.gov.au/sites/default/files/ICON%203%20-%20Information_0.png"}/>
                    <h2>Wuff animal shelter</h2>
                    <p>More than 2000 animals rescued each year</p>
                    <p>We provide all animals with a safe place until they find their very own home</p>
                    <p>Over 200 workers and supporters help our work around the world</p>
                    <p>4 shelters in four locations within Europe</p>
                    <div className={"featureNavigation"}>
                        <label htmlFor="">
                            <img width={60}
                                 src="https://www.clker.com//cliparts/Y/0/9/B/E/Y/house-blue-outline.svg.hi.png"
                                 alt=""/>About us
                        </label><label htmlFor="">
                        <img width={100}
                             src="https://images.onlinepets.com/uploads/2021/02/780X450.jpg?auto=format&width=500&height=500&dpr=1.25"
                             alt=""/>Animals
                    </label><label htmlFor="">
                        <img width={60}
                             src="https://cdn.iconscout.com/icon/free/png-256/free-coin-1750311-1493125.png?f=webp"
                             alt=""/>Donate
                    </label>
                    </div>
                </div>
            </div>
            <div className={"container-fluid position-relative hhh"}>
                <img alt={"this hamster twerks"} className={"testImg"} src={guineaPigTwerking}/>
                <h1 className={"body-h1"}>
                    Newspage
                </h1>
                <div className={"container-fluid newspage row row-cols-lg-3 row-cols-md-2 row-cols-xs-1"}>
                    <div className="container col">
                        <div className="card content-card">
                            <img src={hamsterHat}
                                 className="card-img-top" alt="A hamster with an adorable hat"
                                 title={"I'm so happy!! ✨✨✨✨✨✨✨"}/>
                            <div className="card-body">
                                <h5 className="card-title">Our first hamster hat!</h5>
                                <p className="card-text">Everyone gets cold in the winter, which is why Custard Cream
                                    was very happy when trying on his new strawberry hat.
                                    <br/>Thank you to Frank Einstein for knitting the hat, and Custard Cream for
                                    modelling!</p>
                            </div>
                        </div>
                    </div>
                    {//https://images.vexels.com/media/users/3/281852/isolated/preview/4e9648b2e1579595b087531c51dfb09d-hamster-guinea-pig-pet-animals.png
                    }
                    <div className="container col">
                        <div className="card content-card">
                            <img src={easterBunny}
                                 className="card-img-top" alt="Easter sales image"
                                 title={"Adopt an adorable pet for easter"}/>
                            <div className="card-body">
                                <h5 className="card-title">Easter sales</h5>
                                <p className="card-text">Spring is here, so that must mean Easter is also near. Surprise
                                    yourself or your family with one of our adorable bunnies. </p>
                                <a href="/public" className="btn btn-success btn-outline-warning">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="container col">
                        <div className="card content-card">
                            <img src={noodleBirthday}
                                 className="card-img-top" alt="Noodle's birthday pic"
                                 title={"Noodle just turned 15"}/>
                            <div className="card-body">
                                <h5 className="card-title">The wise and elderly Noodle!</h5>
                                <p className="card-text">Noodle the Goldendoodle is celebrating her 15th birthday today.
                                    Our workers and supporters have showered her with gifts, and we even managed to
                                    capture a genuine smile from when she saw the cake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"preFooter container-fluid"}>
                <div className={"preFooter-content"}>
                    <p>Check out our social media for extra information</p>
                    <div className={"preFooter-images"}>
                        <img className={"social-icons"} onClick={()=>window.open("http://facebook.com/wuff_animal_shelter","_blank")} src={facebook} alt="our facebook page" title={"Wuff_animal_shelter"}/>
                        <img className={"social-icons"} onClick={()=>window.open("http://instagram.com/wuffshelter","_blank")} src={instagram} alt="our instagram page" title={"@wuffshelter"}/>
                        <img className={"social-icons"} onClick={()=>window.open("http://twitter.com/wuffanimalshelter","_blank")} src={twitter} alt="our twitter page" title={"@wuffanimalshelter"}/>
                    </div>
                    <p> or contact us at</p>
                    <b>wuff.animalshelter@gmail.com</b>
                </div>
            </div>
        </div>
    )
}

export default Body;