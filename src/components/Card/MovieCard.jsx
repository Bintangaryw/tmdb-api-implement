import PropType from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, overview, genres, poster }) => {
    return (
        <Link to={`/details/${id}`}>
            <div className="py-2 mx-auto">
                <div className="card bg-base-100 w-50 h-[550px] shadow-xl lg:w-90 lg:h-[780px] flex flex-col justify-between">
                    <figure>
                        <img src={poster} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="truncate ...">{overview}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">
                                <p className="text-xs">Genre</p>
                            </div>
                            <div className="badge badge-outline">
                                <p className="text-xs">Genre</p>
                            </div>
                            <div className="badge badge-outline">
                                <p className="text-xs">Genre</p>
                            </div>
                            <div className="badge badge-outline">
                                <p className="text-xs">Genre</p>
                            </div>
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
    overview: PropType.string.isRequired,
    genres: PropType.any.isRequired,
    poster: PropType.any.isRequired,
};

export default MovieCard;
