import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<h1>Not Found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
