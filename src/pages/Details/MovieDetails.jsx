import instagram from "../../assets/img/instagram.png";
import justwatch from "../../assets/img/justwatch.png";
import link from "../../assets/img/link.png";
import twitter from "../../assets/img/twitter.png";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CarouselCasts from "../../components/casts-carousel/CarouselCasts";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieGenre, setMovieGenre] = useState([]);

    // get movie details
    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/movie/${movieId}`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const f_movieDetails = response.data;
                const f_genre = response.data.genres;

                setMovieGenre(f_genre);
                setMovieDetails(f_movieDetails);

                console.log(f_genre);
                console.log(f_movieDetails);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.status_message);
                    return;
                }
                alert(error?.message);
            }
        };
        getMovieDetails();
    }, []);

    return (
        <>
            {/* Movie data */}

            <div className="container mx-auto px-4">
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`} className="lg:max-w-sm rounded-lg shadow-2xl w-[60%]" />
                        <div>
                            <h1 className="text-5xl font-bold">{movieDetails?.original_title}</h1>
                            <div className="">
                                {movieGenre.map((g) => {
                                    return (
                                        <div key={g.id} className="badge badge-neutral mx-1 text-sm xl:hover:badge-primary">
                                            {g.name}
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-sm font-thin italic py-6">{movieDetails?.tagline}</p>
                            <p className="pb-6">{movieDetails?.overview}</p>
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>

                {/* Caster and Social */}
                <div className="flex flex-row pt-9">
                    {/* Casts */}
                    <div className="basis-3/4">
                        <div className="">
                            <CarouselCasts />
                        </div>
                    </div>
                    {/* Socials and data */}
                    <div className="basis-1/4">
                        <div className="flex justify-around">
                            <img src={instagram} className="w-10" />
                            <img src={twitter} className="w-10" />
                            <img src={justwatch} className="w-10" />
                            <img src={link} className="w-10" />
                        </div>

                        <div className="py-4">
                            <div className="py-2">
                                <p className="font-bold">Original Name</p>
                                <p>Original name..</p>
                            </div>
                            <div className="py-2">
                                <p className="font-bold">Status</p>
                                <p>Original name..</p>
                            </div>
                            <div className="py-2">
                                <p className="font-bold">Network</p>
                                <p>Network..</p>
                            </div>
                            <div className="py-2">
                                <p className="font-bold">Original Language</p>
                                <p>Original language</p>
                            </div>
                            <div className="py-2">
                                <p className="font-bold">Type</p>
                                <p>Type</p>
                            </div>
                            <div className="py-2">
                                <p className="font-bold">Keywords</p>
                                <p>Keywords</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social reviews and discussions */}
                <div>Social reviews and discussions</div>
            </div>
        </>
    );
};

export default MovieDetails;
