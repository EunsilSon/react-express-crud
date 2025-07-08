import Button from "../components/Button/Button";

function PostList() {
    const handleClick = () => {
        alert("글 생성 페이지로 이동");
    };

    return (
        <div>
            <h1>게시글 목록</h1>
            <Button text="생성" onClick={handleClick} />
        </div>
    );
}

export default PostList;