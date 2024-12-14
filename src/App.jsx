import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import SearchPageParams from "./pages/search/SearchPageParams";
import MovieDetails from "./pages/details/MovieDetails";
import NavbarComponent from "./components/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search/movies" element={<SearchPage />} />
                <Route path="/searchParams" element={<SearchPageParams />} />
                <Route path="/details/:movieId" element={<MovieDetails />} />
                <Route path="*" element={<h1>Not Found!</h1>} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
