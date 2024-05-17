const db = require('../db');
const Post = require('../models/post.model');

class PostService {
    async getAllPosts() {
        const [records] = await db.query("SELECT * FROM posts");
        return records.map(record => new Post(record.id,record.title, record.slug, record.body, record.thumbnails, record.isPublished,record.createdAt));
    }

    async getPostById(id) {
        const [[record]] = await db.query("SELECT * FROM posts WHERE id = ?", [id]);
        return record ? new Post(record.id,record.title, record.slug, record.body, record.thumbnails, record.isPublished,record.createdAt) : null;
    }

    async deletePost(id) {
        const [{ affectedRows }] = await db.query("DELETE FROM posts WHERE id = ?", [id]);
        return affectedRows;
    }

    async addOrPost(post) {
        const { title, slug, body, thumbnails, isPublished } = post;
        const query = 'INSERT INTO posts (title, slug, body, thumbnails, isPublished) VALUES (?, ?, ?, ?, ?)';
        const [{ affectedRows }] = await db.query(query, [title, slug, body, thumbnails, isPublished]);
        return affectedRows;
    }

    async editPost(post, id) {
        const { title, slug, body, thumbnails, isPublished } = post;
        const query = 'UPDATE posts SET title = ?, slug = ?, body = ?, thumbnails = ?, isPublished = ? WHERE id = ?';
        const [{ affectedRows }] = await db.query(query, [title, slug, body, thumbnails, isPublished, id]);
        return affectedRows;
    }
}

module.exports = PostService;