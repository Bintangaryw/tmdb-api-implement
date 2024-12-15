import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PropType from "prop-types";

const CarouselComp = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const getUpcomingMovies = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/movie/upcoming`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const f_upcomingMovies = response.data.results;
                setUpcomingMovies(f_upcomingMovies);
                console.log(f_upcomingMovies);
            } catch (error) {
                alert(error);
            }
        };

        getUpcomingMovies();
    }, []);
    return (
        <>
            <div className="pb-5">
                <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                    {upcomingMovies.map((movie) => {
                        return (
                            <div key={movie?.id} className="carousel-item">
                                <Link to={`/details/${movie?.id}`}>
                                    <div className="relative rounded-box overflow-hidden">
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 opacity-100">
                                            <div className="flex flex-col-reverse h-full">
                                                <p className="text-sm px-2 py-2">{movie?.release_date}</p>
                                                <p className="text-2xl px-2 font-bold">{movie?.original_title}</p>
                                            </div>
                                        </div>

                                        {/* Gambar */}
                                        <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} className="w-60 object-cover" />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

CarouselComp.propTypes = {
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    releaseDate: PropType.any.isRequired,
};

export default CarouselComp;
