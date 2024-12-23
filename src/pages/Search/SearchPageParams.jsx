import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchPageParams = () => {
    const [searchParams] = useSearchParams();
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [genreOptions, setgenreOptions] = useState([]);

    useEffect(() => {
        const getSearchedMovies = async () => {
            try {
                // Get params query and genre
                const withGenres = searchParams.get("with_genres");

                // Get the searched movie
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/discover/movie`, {
                    params: {
                        page: 1,
                        with_genres: withGenres,
                    },
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const fetchedMovies = response.data.results;
                setSearchedMovies(fetchedMovies);
                console.log("Search data:", withGenres);
                console.log("Results:", fetchedMovies);
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
                                {/* Sort by */}
                                <div>
                                    <label className="form-control w-full max-w-xs pb-4">
                                        <div className="label">
                                            <span className="label-text font-bold text-xl">Sort by</span>
                                        </div>
                                        <select className="select select-ghost w-full max-w-xs">
                                            {/* Ascending sort */}
                                            <option disabled selected>
                                                Ascending
                                            </option>
                                            <option>Original Title</option>
                                            <option>Popularity</option>
                                            <option>Vote Average</option>
                                            <option>Primary Release Date</option>

                                            {/* Descending sort */}
                                            <option disabled selected>
                                                Descending
                                            </option>
                                            <option>Original Title</option>
                                            <option>Popularity</option>
                                            <option>Vote Average</option>
                                            <option>Primary Release Date</option>
                                        </select>
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
                                                            <input type="checkbox" className="checkbox checkbox-accent" value={g.id} />
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="pb-10">
                                    <button className="btn">Search</button>
                                </div>
                            </div>
                        </div>

                        {/* Search result */}
                        <div className="lg:basis-3/4">
                            <div className="lg:grid lg:grid-cols-4 grid grid-cols-2">
                                <div className="mx-auto">
                                    <div className="card bg-base-100 w-40 lg:w-72 shadow-xl">
                                        <figure>
                                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-sm lg:text-lg">Shoes!</h2>
                                            <p className="text-sm lg:text-lg">If a dog chews shoes whose shoes does he choose?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPageParams;
