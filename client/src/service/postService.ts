import axios from "axios";
import { Post } from "../types/post";

const BASE_URL = "http://localhost:3000/posts";
console.log(process.env.REACT_APP_BASE_URL);

export const getPost = () => axios.get<Post[]>(BASE_URL);
export const getPosts = (id: string) => axios.get<Post>(`${BASE_URL}/${id}`);
export const createPost = (post: Post) => axios.post<Post>(BASE_URL, post);
