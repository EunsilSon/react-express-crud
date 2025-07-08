import Button from "../components/Button";

function PostFormPage() {
    const handleClick = () => {
        alert("생성 완료");
    };

    return (
        <div>
            <h1>게시글 생성</h1>
            <Button text="확인" onClick={handleClick} />
        </div>
    );
}

export default PostFormPage;