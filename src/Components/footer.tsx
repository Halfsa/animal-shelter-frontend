function Footer(){
    return (
        <div className="container-fluid footer-container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a>
                    </li>
                    <li className="nav-item"><a href="/adopt"
                                                className="nav-link px-2 text-body-secondary">Adoption</a></li>
                    <li className="nav-item"><a href="/donation"
                                                className="nav-link px-2 text-body-secondary">Help us</a></li>
                    <li className="nav-item"><a href="/faq" className="nav-link px-2 text-body-secondary">FAQs</a>
                    </li>
                    <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">© 2024 WUFF Inc.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3"><a className="link-body-emphasis" href="#">
                        <svg className="bi" width="24" height="24">
                            <use xlinkHref="#instaLogo"></use>
                        </svg>
                    </a></li>
                    <li className="ms-3"><a className="link-body-emphasis" href="#">

                    </a></li>
                    <li className="ms-3"><a className="link-body-emphasis" href="#">
                        <svg className="bi" width="24" height="24">
                            <use xlinkHref="#facebook"></use>
                        </svg>
                    </a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;