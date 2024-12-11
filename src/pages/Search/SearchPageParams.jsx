import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchPageParams = () => {
    const [searchParams] = useSearchParams();
    const [searchedMovies, setSearchedMovies] = useState([]);

    useEffect(() => {
        const getSearchedMovies = async () => {
            try {
                const query = searchParams.get("query");
                // const page = searchParams.get("page");
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/search/movie`, {
                    params: {
                        query: query,
                        page: 1,
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

    //Display
    return (
        <div>
            <label htmlFor="">
                Judul:
                <input type="text" name="searchInput" />
            </label>
            <button>Cari</button>
        </div>
    );
};

export default SearchPageParams;
