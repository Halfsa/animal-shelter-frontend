function Carousel() {
    return(
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active first-slide" data-bs-interval="10000">
                <div className="card carousel-card bg-dark text-white">
                    <img src="https://http.cat/510" className="card-img" alt="..."/>
                        <div className=" container card-img-overlay">
                            <h5 className="card-title">Easter feaster</h5>
                            <p className="card-text">Adopt now with discounts!
                            And if you are adopting a bunny, we will give you all of the eggs it laid as a gratis!</p>
                            <p className="card-text"><a href={"/adopt"} className={"btn btn-light btn-outline-dark"}>Take me there</a></p>
                        </div>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <div className="card carousel-card bg-dark text-white">
                    <img src="https://www.aces.edu/wp-content/uploads/2023/04/iStock-1232014586.jpg" className="card-img" alt="..."/>
                    <div className="container card-img-overlay">
                        <h5 className="card-title">Help us help them</h5>
                        <p className="card-text">Thousands of animals await adoptions at our shelter each coming day.
                            Assist us in making these animals comfortable while they are waiting.</p>
                        <p className="card-text"><a href={"/donation"} className={"btn btn-light btn-outline-dark"}>Donate now</a></p>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="card carousel-card bg-dark text-white">
                    <img src="https://http.cat/200"
                         className="card-img" alt="..."/>
                    <div className="container card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={"container"}>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
    )
}
export default Carousel;