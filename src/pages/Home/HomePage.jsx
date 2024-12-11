import axios from "axios";
import { useEffect, useState } from "react";

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
            <div className="">
                {popularMovies.map((movie) => {
                    return (
                        <div className="py-2" key={movie?.id}>
                            <h2 className="font-bold text-3xl">{movie?.title}</h2>
                            <p>{movie?.overview}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default HomePage;
