import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
