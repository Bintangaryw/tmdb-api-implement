import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchPageParams = () => {
    const [searchParams] = useSearchParams();
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [genreOptions, setgenreOptions] = useState([]);

    // Get params
    useEffect(() => {
        const getSearchedMovies = async () => {
            try {
                const query = searchParams.get("query");
                const withGenres = searchParams.get("with_genres");
                // const page = searchParams.get("page");

                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/discover/movie`, {
                    params: {
                        query: query,
                        page: 1,
                        with_genres: withGenres,
                    },
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const fetchedMovies = response.data.results;
                setSearchedMovies(fetchedMovies);
                console.log(fetchedMovies);
                console.log(query);
            } catch (error) {
                console.error(error);
            }
        };
        getSearchedMovies();
    }, [searchParams]);

    // Get movie genre from TMDB
    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/genre/movie/list`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const f_genres = response.data.genres;
                setgenreOptions(f_genres);
                console.log(f_genres);
            } catch (error) {
                alert.error;
            }
        };
        getGenres();
    }, []);

    //Display
    return (
        <>
            <div>
                <div className="container mx-auto px-4">
                    <div className="lg:flex lg:flex-row">
                        {/* Search form */}
                        <div className="lg:basis-1/4">
                            <div className="flex flex-col">
                                {/* Title */}
                                <div>
                                    <label className="form-control w-full max-w-xs pb-4">
                                        <div className="label">
                                            <span className="label-text font-bold text-xl">Title</span>
                                        </div>
                                        <input type="text" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                </div>

                                {/* Genre */}
                                <div>
                                    <div className="form-control w-screen max-w-xs pb-4">
                                        <div className="label">
                                            <span className="label-text font-bold text-xl">Genre</span>
                                        </div>

                                        <div className="flex flex-col">
                                            {genreOptions.map((g) => {
                                                return (
                                                    <div key={g.id}>
                                                        <label className="cursor-pointer label">
                                                            <span className="label-text">{g.name}</span>
                                                            <input type="checkbox" className="checkbox checkbox-accent" value={g.name} />
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <div>
                                    <button className="btn">Search</button>
                                </div>
                            </div>
                        </div>

                        {/* Search result */}
                        <div className="lg:basis-3/4">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPageParams;
