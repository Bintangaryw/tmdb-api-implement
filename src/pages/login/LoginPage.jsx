import facebook from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";
import twitter from "../../assets/img/twitter-square.png";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://shy-cloud-3319.fly.dev/api/v1/auth/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.data.token);
            // should have using navigate, but before using redux, use window.location.replace to refresh the page
            // navigate("/");
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <div>
                    <div>
                        <div className="text-center">
                            <p className="text-xl py-2">Sign in to your account</p>
                            <p>
                                Or
                                <Link to="/register">
                                    <a href="" className="underline ">
                                        create your account
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="py-9">
                        <div>
                            <form onSubmit={login}>
                                <label className="form-control w-full max-w-xs mx-auto">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <input type="Email" className="input input-bordered w-full max-w-xs" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </label>
                                <label className="form-control w-full max-w-xs mx-auto">
                                    <div className="label">
                                        <span className="label-text">Password</span>
                                    </div>
                                    <input type="password" className="input input-bordered w-full max-w-xs" value={password} onChange={(event) => setPassword(event.target.value)} />
                                    <div className="flex justify-center pt-10">
                                        <button className="btn btn-active btn-neutral w-full">Login</button>
                                    </div>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-10">
                    <div className="text-center">
                        <p>Or continue with</p>
                    </div>

                    <div className="flex justify-center pt-5">
                        <div className="px-2">
                            <img src={google} className="w-9" />
                        </div>
                        <div className="px-2">
                            <img src={facebook} className="w-9" />
                        </div>
                        <div className="px-2">
                            <img src={twitter} className="w-9" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
