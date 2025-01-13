import facebook from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";
import twitter from "../../assets/img/twitter-square.png";
import axios from "axios";
import { useState, useEffect } from "react";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [validPassword, setValidPassword] = useState(false);

    // Password match checker
    const checkPassword = () => {
        setValidPassword(password === passwordConf);
    };
    useEffect(() => {
        checkPassword();
    }, [passwordConf]);

    // register function
    const register = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_AUTH_URL}/api/v1/auth/register`, {
                email,
                name,
                password,
            });
            localStorage.setItem("token", response.data?.data.token);
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
                            <p className="text-xl py-2">Create your new account</p>
                            <p>
                                <a href="" className="underline">
                                    Already have an account
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="py-9">
                        <form onSubmit={register}>
                            <div>
                                <label className="form-control w-full max-w-xs mx-auto pb-5">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <input type="email" className="input input-bordered w-full max-w-xs" autoComplete="off" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </label>

                                <label className="form-control w-full max-w-xs mx-auto pb-5">
                                    <div className="label">
                                        <span className="label-text">Name</span>
                                    </div>
                                    <input type="text" className="input input-bordered w-full max-w-xs" autoComplete="off" value={name} onChange={(event) => setName(event.target.value)} />
                                </label>

                                <label className="form-control w-full max-w-xs mx-auto pb-5">
                                    <div className="label">
                                        <span className="label-text">Password</span>
                                    </div>
                                    <input type="password" className="input input-bordered w-full max-w-xs" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </label>

                                <label className="form-control w-full max-w-xs mx-auto pb-5">
                                    <div className="label">
                                        <span className="label-text">Password Confirm</span>
                                    </div>
                                    <input type="password" value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)} className="input input-bordered w-full max-w-xs" autoComplete="off" />

                                    <p className="text-sm text-red-800">{validPassword ? "" : "Sorry, your password did not match."}</p>

                                    <div className="flex justify-center pt-10">
                                        <button className="btn btn-active btn-neutral w-full">Register</button>
                                    </div>
                                </label>
                            </div>
                        </form>
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

export default RegisterPage;
