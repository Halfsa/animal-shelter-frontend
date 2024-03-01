function Body(){
    return(
        <div className={"container-fluid position-relative hhh"}>
            <img className={"testImg"} src={"https://images.vexels.com/media/users/3/281852/isolated/preview/4e9648b2e1579595b087531c51dfb09d-hamster-guinea-pig-pet-animals.png"}/>
            <h1 className={"body-h1"}>
                Newspage
            </h1>
            <div className={"container-fluid newspage row row-cols-lg-3 row-cols-md-2 row-cols-xs-1"}>
                <div className="container col">
                    <div className="card content-card">
                        <img src="https://i.pinimg.com/originals/f9/d9/29/f9d929c57909847eaae58ab812d799d1.jpg"
                             className="card-img-top" alt="A hamster with an adorable hat"
                             title={"I'm so happy!! ✨✨✨✨✨✨✨"}/>
                        <div className="card-body">
                            <h5 className="card-title">Our first hamster hat!</h5>
                            <p className="card-text">Everyone gets cold in the winter, which is why Custard Cream was very happy when trying on his new strawberry hat.
                                <br/>Thank you to Frank Einstein for knitting the hat, and Custard Cream for modelling!</p>
                        </div>
                    </div>
                </div>
                {//https://images.vexels.com/media/users/3/281852/isolated/preview/4e9648b2e1579595b087531c51dfb09d-hamster-guinea-pig-pet-animals.png
                }
                <div className="container col">
                    <div className="card content-card">
                        <img src="https://images.vexels.com/media/users/3/290077/isolated/preview/b5079e4df62c691ec2fa3b5c4b1e7015-cute-bunny-easter-egg-animal.png"
                             className="card-img-top" alt="A hamster with an adorable hat"
                             title={"I'm so happy!! ✨✨✨✨✨✨✨"}/>
                        <div className="card-body">
                            <h5 className="card-title">Easter sales</h5>
                            <p className="card-text">Spring is here, so that must mean Easter is also near. Surprise yourself or your family with one of our adorable bunnies. </p>
                            <a href="/" className="btn btn-success btn-outline-warning">Details</a>
                        </div>
                    </div>
                </div>
                <div className="container col">
                    <div className="card content-card">
                        <img src="https://www.petsworld.in/blog/wp-content/uploads/2015/02/great-birthday-cake.jpg"
                             className="card-img-top" alt="A hamster with an adorable hat"
                             title={"I'm so happy!! ✨✨✨✨✨✨✨"}/>
                        <div className="card-body">
                            <h5 className="card-title">The wise and elderly Noodle!</h5>
                            <p className="card-text">Noodle the Goldendoodle is celebrating her 15th birthday today. Our workers and supporters have showered her with gifts, and we even managed to capture a genuine smile from when she saw the cake.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Body;