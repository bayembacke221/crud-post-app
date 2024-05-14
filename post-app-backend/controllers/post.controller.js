const Post = require('../models/post.model');
const PostService = require('../services/post.service');

class PostController {
    constructor() {
        this.postService = new PostService();
    }

    async getAllPosts(req, res) {
        const posts = await this.postService.getAllPosts();
        res.send(posts);
    }

    async getPostById(req, res) {
        const post = await this.postService.getPostById(req.params.id);
        if (!post) {
            res.status(404).json(`no record with given id: ${req.params.id}`);
        } else {
            res.send(post);
        }
    }

    async deletePost(req, res) {
        const affectedRows = await this.postService.deletePost(req.params.id);
        if (affectedRows === 0) {
            res.status(404).json(`no record with given id: ${req.params.id}`);
        } else {
            res.send('deleted successfully.');
        }
    }

    async createPost(req, res) {
        const { title, slug, body, thumbnails, isPublished } = req.body;
        const post = new Post(title, slug, body, thumbnails, isPublished);
        await this.postService.addOrPost(post);
        res.status(201).send('created successfully.');
    }

    async updatePost(req, res) {
        const id = req.params.id;
        const { title, slug, body, thumbnails, isPublished } = req.body;
        const post = new Post(title, slug, body, thumbnails, isPublished);
        const affectedRows = await this.postService.editPost(post, id);
        if (affectedRows === 0) {
            res.status(404).json(`no record with given id: ${req.params.id}`);
        } else {
            res.send('updated successfully.');
        }
    }
}

module.exports = PostController;