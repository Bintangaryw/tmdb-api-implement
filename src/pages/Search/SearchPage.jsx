import axios from "axios";
import { useState } from "react";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchedMovies, setSearchedMovies] = useState([]);

    const searching = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    query: searchQuery,
                },
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjA5NjYyZDcwNDI5ODFhNThkNThiNjljYTBiZDc0OCIsIm5iZiI6MTY5NTgxODUyOC40NDcsInN1YiI6IjY1MTQyMzIwOWI4NjE2MDBmZjY3OTU1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOvyYjmXEmauTFJd8WcEhJTl6gHrayHF8ErMxhozMUk",
                },
            });
            const f_searchMovie = response.data.results;
            setSearchedMovies(f_searchMovie);
            console.log(searchQuery);
            console.log(f_searchMovie);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error?.response?.data?.status_message);
                return;
            }
            alert(error?.message);
        }
    };
    return (
        <>
            <div>
                <label htmlFor="">
                    Judul:
                    <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
                </label>
                <button onClick={searching}>Cari</button>
            </div>

            <div className="mt-3">
                {searchedMovies.map((movie) => {
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

export default SearchPage;
