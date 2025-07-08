import Button from "../components/Button";

function PostDetailPage() {
    const handleClick = () => {
        alert("글 삭제됨");
    };

    return (
        <div>
            <h1>게시글 상세 조회</h1>
            <Button text="삭제" onClick={handleClick} />
        </div>
    );
}

export default PostDetailPage;