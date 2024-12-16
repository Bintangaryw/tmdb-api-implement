import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieCast, setMovieCast] = useState([]);
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

    // get movie casts
    useEffect(() => {
        const getMovieCast = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/movie/${movieId}/credits`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const f_movieCast = response.data.cast.filter((person) => person.known_for_department === "Acting");
                console.log(f_movieCast);

                setMovieCast(f_movieCast);
            } catch (error) {
                alert(error);
            }
        };
        getMovieCast();
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

                {/* Cast data */}

                <div>Top Billed Cast</div>

                {/* Social reviews and discussions */}
                <div>Social reviews and discussions</div>
            </div>
        </>
    );
};

export default MovieDetails;
