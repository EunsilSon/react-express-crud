import {forwardRef, useImperativeHandle, useState} from "react";

const PostForm = forwardRef((props, ref) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useImperativeHandle(ref, () => ({
        getFormData: () => ({ title, content })
    }));

    return (
        <form>
            <input
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="작성하세요"
                />
        </form>
    );
});

export default PostForm;