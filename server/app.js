import express from 'express';
import cors from "cors";
import postsRouter from './posts.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/posts', postsRouter);

export default app;
