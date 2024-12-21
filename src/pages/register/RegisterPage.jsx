import facebook from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";
import twitter from "../../assets/img/twitter-square.png";
import { useState, useEffect } from "react";

const RegisterPage = () => {
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [validPassword, setValidPassword] = useState(false);

    const checkPassword = () => {
        setValidPassword(password === passwordConf);
    };

    useEffect(() => {
        checkPassword();
    }, [passwordConf]);

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
                        <div>
                            <label className="form-control w-full max-w-xs mx-auto pb-5">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="email" className="input input-bordered w-full max-w-xs" autoComplete="off" />
                            </label>

                            <label className="form-control w-full max-w-xs mx-auto pb-5">
                                <div className="label">
                                    <span className="label-text">Username</span>
                                </div>
                                <input type="text" className="input input-bordered w-full max-w-xs" autoComplete="off" />
                            </label>

                            <label className="form-control w-full max-w-xs mx-auto pb-5">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" autoComplete="off" />
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
