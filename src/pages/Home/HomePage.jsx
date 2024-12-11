import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/Card/MovieCard";

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
                <div className="grid grid-cols-2 gap-2 lg:grid lg:grid-cols-4 lg:gap-4">
                    {popularMovies.map((movie) => {
                        return (
                            <div key={movie?.id}>
                                <MovieCard id={movie?.id} title={movie?.original_title} overview={movie?.overview} poster={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} />
                            </div>
                        );
                    })}
                </div>

                <div className="px-4">
                    {popularMovies.map((movie) => {
                        return (
                            <div className="py-2" key={movie?.id}>
                                <h2 className="font-bold text-3xl">{movie?.title}</h2>
                                <p>{movie?.overview}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default HomePage;
