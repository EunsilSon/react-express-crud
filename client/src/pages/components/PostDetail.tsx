import { Post } from "../../types/post";

export const PostDetail = ({ post }: { post: Post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};