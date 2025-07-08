import { Post } from "../../types/post";

export const PostForm = () => {
    return (
        <form>
            <input type="text" placeholder="제목" />
            <textarea placeholder="작성하세요" />
        </form>
    )
}