import express from 'express';
import { getCollection } from "./db/db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get('/', async (req, res) => {
    const collection = await getCollection();

    try {
        const posts = await collection.find().toArray();
        res.status(200).send(posts);
    } catch (e) {
        console.error("Get posts error : " + e);
        res.status(500).send("Server Error");
    }
});

router.get('/:id', async (req, res) => {
    const collection = await getCollection();

    try {
        const post = await collection.findOne(new ObjectId(req.params.id));
        res.status(200).send(post);
    } catch (e) {
        console.error("Get posts error : " + e);
        res.status(500).send("Failed to get posts");
    }
});

router.post('/', async (req, res) => {
    const collection = await getCollection();

    try {
        const result = await collection.insertOne(req.body);
        console.log(result);
        const inserted = await collection.findOne({ _id: result.insertedId });
        res.status(200).send(inserted);
    } catch (e) {
        console.error("Create posts error - " + e);
        res.status(500).send('Failed to create posts');
    }
});

router.delete('/:id', async (req, res) => {
    const collection = await getCollection();

    try {
        const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

        if (result.deletedCount === 0) {
            return res.status(404).send('Not found posts');
        }
        return res.status(200).send('Successfully deleted');
    } catch (e) {
        console.error("Delete post error - " + e);
    }

});

export default router;