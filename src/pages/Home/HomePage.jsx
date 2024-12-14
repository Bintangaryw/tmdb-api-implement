import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/card/MovieCard";
import CarouselComp from "../../components/carousel-bleed/CarouselComp";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/movie/popular`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const f_popularMovie = response.data.results; //mengambil results dari dalam objek data pada response
                console.log(f_popularMovie);
                setPopularMovies(f_popularMovie);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.status_message);
                    return;
                }
                alert(error?.message);
            }
        };
        getPopularMovies();
    }, []);

    // Display
    return (
        <>
            <div className="container mx-auto px-4">
                <div>
                    <h3 className="text-3xl font-bold py-2 pb-4">Now Playing</h3>
                    <CarouselComp />
                </div>
                <div className="grid grid-cols-2 gap-2 lg:grid lg:grid-cols-4 lg:gap-4">
                    {popularMovies.map((movie) => {
                        return (
                            <div key={movie?.id}>
                                <MovieCard id={movie?.id} title={movie?.original_title} overview={movie?.overview} poster={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default HomePage;
