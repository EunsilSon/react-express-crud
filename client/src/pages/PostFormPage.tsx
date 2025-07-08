import { useRef } from "react";
import Button from "../components/Button";
import PostForm from "./components/PostForm";
import { createPost } from "../service/postService";
import { useNavigate } from "react-router-dom";

function PostFormPage() {
    const navigate = useNavigate();
    const formRef = useRef<{ getFormData: () => { title: string, content: string }}>(null);

    const handleClick = async () => {
        if (formRef.current) {
            const { title, content } = formRef.current.getFormData();
            const post = { title, content };

            try {
                await createPost(post);
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("FormRef is not exist");
        }
    };

    return (
        <div>
            <h1>게시글 생성</h1>
            <PostForm ref={formRef}/>
            <Button text="등록" onClick={handleClick} />
        </div>
    );
}

export default PostFormPage;