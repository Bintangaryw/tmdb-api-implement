import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/3/movie/${movieId}`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });
                const f_movieDetails = response.data;
                setMovieDetails(f_movieDetails);
                console.log(f_movieDetails);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.status_message);
                    return;
                }
                alert(error?.message);
            }
        };
        getMovieDetails();
    }, []);

    return <div>This is your movie id you searched for: {movieId}</div>;
};

export default MovieDetails;
