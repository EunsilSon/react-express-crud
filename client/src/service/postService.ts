import axios from "axios";
import { Post } from "../types/post";

const BASE_URL = "http://localhost:4000/posts";

export const getPosts = () =>
    axios.get<Post[]>(BASE_URL)
        .then(res => res.data);

export const getPost = (id: string) =>
    axios.get<Post>(`${BASE_URL}/${id}`)
        .then(res => res.data);

export const createPost = (post: Omit<Post, "_id">) =>
    axios.post<Post>(BASE_URL, post)
        .then(res => res.data);
