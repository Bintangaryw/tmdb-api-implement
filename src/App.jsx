import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";
import SearchPageParams from "./pages/Search/SearchPageParams";
import MovieDetails from "./pages/Details/MovieDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/searchParams" element={<SearchPageParams />} />
                <Route path="/details/:movieId" element={<MovieDetails />} />
                <Route path="*" element={<h1>Not Found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
