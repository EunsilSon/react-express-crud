import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostForm from "./pages/PostForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/:id" element={<PostDetail />} />
                <Route path="/form" element={<PostForm />} />
            </Routes>
        </Router>
    );
}

export default App;
