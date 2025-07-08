import { useNavigate } from "react-router-dom";

const PostItem = ({ id, title, content }: { id: string, title: string, content: string }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${id}`);
    }

    if (content.length > 50) {
        content = content.slice(50) + "...";
    }

    return (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default PostItem;