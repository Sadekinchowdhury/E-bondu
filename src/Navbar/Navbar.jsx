

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav_logo">
                        <a href="#"><img src="assets/Image/logo.png" alt="Logo" /></a>
                    </div>

                    <div className="nav_menu">
                        <ul className="nav_list">
                            <div className="dropdown">
                                <li className="home">
                                    <a href="/">Home</a>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                </li>
                                <ul className="dropdown_list">
                                    <li><a href="ons.html">Orgaizations Speece</a></li>
                                    <li><a href="docu.html">All Documentation</a></li>
                                    <li><a href="bdr.html">Blood Request Cheek</a></li>
                                    <li><a href="profile.html">Profile</a></li>
                                </ul>
                            </div>
                            <li><a href="/donation">Donation</a></li>
                            <li><a href="./bdr.html">Blood request</a></li>
                            <li><a href="/income">Income Expenditure</a></li>
                            <div className="dropdown">
                                <li className="home">
                                    <a href="./index.html">Project</a>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                </li>
                                <ul className="dropdown_list">
                                    <li><a href="ffa.html">Food for All</a></li>
                                    <li><a href="health.html">Health</a></li>
                                    <li><a href="education.html">Education</a></li>
                                </ul>
                            </div>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="foundation">Foundations</a></li>
                            <button className="logout_m"><a href="#">Logout</a></button>
                        </ul>
                        <div className="search">
                            <form action="#" method="post" className="form_search">
                                <input type="search" placeholder="Search" />
                                <span type="submit"><img src="assets/Image/search.svg" alt="icon" /></span>
                            </form>
                            <button className="logout"><a href="#">Logout</a></button>
                            <div className="nav_toggol"><img src="assets/Image/circled-menu.png" alt="" /></div>
                            <div className="close_toggol"><img src="assets/Image/close.svg" alt="" /></div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
