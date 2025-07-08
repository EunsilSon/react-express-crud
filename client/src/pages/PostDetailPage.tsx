import Button from "../components/Button";
import PostDetail from "./components/PostDetail";
import {getPost, deletePost} from "../service/postService";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function PostDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("loading...");
    const [content, setContent] = useState("loading...");

    useEffect(() => {
        if (!id) {
            console.log("Not found post id");
            return;
        }

        getPost(id)
            .then((res) => {
                setTitle(res.title);
                setContent(res.content);
            })
        .catch((err) => {
            console.error(err);
            setTitle("no title");
            setContent("no content");
            console.log(err.message);
        })
    })

    const handleClick = () => {
        if (!id) {
            console.log("Not found post id");
            return;
        }
        deletePost(id);
        alert("Post deleted successfully");
        navigate("/");
    };

    return (
        <div>
            <h1>게시글 상세 조회</h1>
            <PostDetail title={title} content={content} />
            <Button text="삭제" onClick={handleClick} />
        </div>
    );
}
export default PostDetailPage;