import Button from "../components/Button";
import PostItem from "./components/PostItem";
import { getPosts } from "../service/postService";
import {Post} from "../types/post";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function PostListPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/form`);
    };

    const [posts, setPosts] = useState<Post []>([]);

    useEffect(() => {
        getPosts()
        .then(post => setPosts(post));
    }, []);

    return (
        <div>
            <h1>게시글 목록</h1>
            {posts.map(post => (
                <PostItem key={post._id} id={post._id} title={post.title} content={post.content} />
            ))}
            <Button text="생성" onClick={handleClick} />
        </div>
    );
}

export default PostListPage;
