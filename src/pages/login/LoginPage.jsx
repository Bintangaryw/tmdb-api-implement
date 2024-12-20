import facebook from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";
import twitter from "../../assets/img/twitter-square.png";

const LoginPage = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div>
                    <div>
                        <div className="text-center">
                            <p className="text-xl py-2">Sign in to your account</p>
                            <p>
                                Or
                                <a href="" className="underline ">
                                    create your account
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="py-9">
                        <div>
                            <label className="form-control w-full max-w-xs mx-auto">
                                <div className="label">
                                    <span className="label-text">Username</span>
                                </div>
                                <input type="text" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs mx-auto">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input type="password" className="input input-bordered w-full max-w-xs" />
                                <div className="flex justify-center pt-10">
                                    <button className="btn btn-active btn-neutral w-full">Login</button>
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

export default LoginPage;
