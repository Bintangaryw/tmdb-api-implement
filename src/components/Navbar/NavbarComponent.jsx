import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <div className="pb-12">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Search by</a>
                                <ul className="p-2">
                                    <li>
                                        <Link to={"/"}>
                                            <a>Collection</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>Company</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>Keyword</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/search/movies"}>Movie</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>Multi</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>Person</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>TV</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">MovieReview</a>
                </div>
                <div className="navbar-center hidden dropdown-content lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <details>
                                <summary>Search by</summary>
                                <ul className="p-2">
                                    <li>
                                        <Link to={"/"}>
                                            <a>Collection</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>Company</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>Keyword</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/search/movies"}>Movie</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>Multi</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>Person</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <a>TV</a>
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;
