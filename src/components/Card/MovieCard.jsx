import PropType from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, overview, genres, poster }) => {
    return (
        <Link to={`/details/${id}`}>
            <div className="py-2 mx-auto">
                <div className="card bg-base-100 w-36 shadow-xl lg:w-80">
                    <figure>
                        <img src={poster} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{overview}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

MovieCard.propTypes = {
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    overview: PropType.number.isRequired,
    genres: PropType.any.isRequired,
    poster: PropType.any.isRequired,
};

export default MovieCard;
