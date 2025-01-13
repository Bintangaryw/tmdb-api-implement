import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const NavbarComponent = () => {
    const [profile, setProfile] = useState([]);
    const token = localStorage.getItem("token");

    // get login user data
    useEffect(() => {
        if (!token) return;
        const getProfile = async () => {
            const response = await axios.get("https://shy-cloud-3319.fly.dev/api/v1/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile(response.data?.data);
            console.log("Profile: ", profile);
        };
        getProfile();
    }, []);

    // logout
    const logout = () => {
        localStorage.removeItem("token");
        window.location.replace("/login");
    };

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
                                            <p>Collection</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>Company</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>Keyword</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/search/movies"}>Movie</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>Multi</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>Person</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>TV</p>
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
                                            <p>Collection</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>Company</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>Keyword</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/search/movies"}>Movie</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>Multi</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>Person</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <p>TV</p>
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
                    {token ? (
                        <details className="dropdown">
                            <summary className="appearance-none cursor-pointer list-none">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-10 rounded-full" />
                            </summary>

                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow right-0 left-auto">
                                <li>
                                    <a>{profile.name}</a>
                                </li>
                                <li>
                                    <a onClick={logout}>Logout</a>
                                </li>
                            </ul>
                        </details>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-primary">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;
