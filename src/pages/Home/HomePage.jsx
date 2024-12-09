import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjA5NjYyZDcwNDI5ODFhNThkNThiNjljYTBiZDc0OCIsIm5iZiI6MTY5NTgxODUyOC40NDcsInN1YiI6IjY1MTQyMzIwOWI4NjE2MDBmZjY3OTU1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOvyYjmXEmauTFJd8WcEhJTl6gHrayHF8ErMxhozMUk",
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
