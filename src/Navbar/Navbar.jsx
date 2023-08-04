import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav_logo">
                        <Link href="#"><img src="assets/Image/logo.png" alt="Logo" /></Link>
                    </div>

                    <div className="nav_menu">
                        <ul className="nav_list">
                            <div className="dropdown">
                                <li className="home">
                                    <Link to='/'>Home</Link>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                </li>
                                <ul className="dropdown_list">
                                    <li><Link to='/ons' >Orgaizations Speece</Link></li>
                                    <li><Link to='/document'>All Documentation</Link></li>
                                    <li><Link to='/blood'>Blood Request Cheek</Link></li>
                                    <li><Link to='profile' >Profile</Link></li>
                                </ul>
                            </div>
                            <li><Link to='/donation'>Donation</Link></li>
                            <li><Link to='/blood'>Blood request</Link></li>
                            <li><Link to='/income'>Income Expenditure</Link></li>
                            <div className="dropdown">
                                <li className="home">
                                    <Link href="./index.html">Project</Link>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                </li>
                                <ul className="dropdown_list">
                                    <li><Link to='/ffa' >Food for All</Link></li>
                                    <li><Link to='/health' >Health</Link></li>
                                    <li><Link to='/education'  >Education</Link></li>
                                </ul>
                            </div>
                            <li><Link to='/gallery' >Gallery</Link></li>
                            <li><Link to='/foundation' >Foundations</Link></li>
                            <button className="logout_m"><Link href="#">Logout</Link></button>
                        </ul>
                        <div className="search">
                            <form action="#" method="post" className="form_search">
                                <input type="search" placeholder="Search" />
                                <span type="submit"><img src="assets/Image/search.svg" alt="icon" /></span>
                            </form>
                            <button className="logout"><Link href="#">Logout</Link></button>
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
