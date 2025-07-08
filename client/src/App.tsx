import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostFormPage from "./pages/PostFormPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostListPage />} />
                <Route path="/:id" element={<PostDetailPage />} />
                <Route path="/form" element={<PostFormPage />} />
            </Routes>
        </Router>
    );
}

export default App;
