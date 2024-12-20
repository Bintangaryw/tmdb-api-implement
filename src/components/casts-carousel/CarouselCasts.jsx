import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarouselCasts = () => {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);

    // get movie casts
    useEffect(() => {
        const getMovieCast = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/movie/${movieId}/credits`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const f_movieCast = response.data.cast.filter((person) => person.known_for_department === "Acting").slice(0, 6);
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
            <div className="carousel rounded-box">
                {movieCast.map((cast) => {
                    return (
                        <div key={cast?.id} className="carousel-item">
                            <Link to={``}>
                                <div className="relative overflow-hidden">
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 opacity-100">
                                        <div className="flex flex-col-reverse h-full">
                                            <p className="text-sm px-2 py-2">{cast?.character}</p>
                                            <p className="px-2 font-bold">{cast?.name}</p>
                                        </div>
                                    </div>

                                    {/* Gambar */}
                                    <img src={`https://image.tmdb.org/t/p/original${cast?.profile_path}`} className="w-40 object-cover" />
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CarouselCasts;
