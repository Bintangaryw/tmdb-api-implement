import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";
import SearchPageParams from "./pages/Search/SearchPageParams";
import MovieDetails from "./pages/Details/MovieDetails";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";

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
