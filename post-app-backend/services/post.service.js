const db = require('../db');
const Post = require('../models/post.model');

module.exports.getAllPosts = async () => {
    const [records] = await db.query("SELECT * FROM posts");
    return records.map(record => new Post(record.title, record.slug, record.body, record.thumbnails, record.isPublished));
}

module.exports.getPostById = async (id) => {
    const [[record]] = await db.query("SELECT * FROM posts WHERE id = ?", [id]);
    return record ? new Post(record.title, record.slug, record.body, record.thumbnails, record.isPublished) : null;
}

module.exports.deletePost = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM posts WHERE id = ?", [id]);
    return affectedRows;
}

module.exports.addOrPost = async (post) => {
    const { title, slug, body, thumbnails, isPublished } = post;
    const query = 'INSERT INTO posts (title, slug, body, thumbnails, isPublished) VALUES (?, ?, ?, ?, ?)';
    const [{ affectedRows }] = await db.query(query, [title, slug, body, thumbnails, isPublished]);
    return affectedRows;
}

module.exports.editPost = async (post, id) => {
    const { title, slug, body, thumbnails, isPublished } = post;
    const query = 'UPDATE posts SET title = ?, slug = ?, body = ?, thumbnails = ?, isPublished = ? WHERE id = ?';
    const [{ affectedRows }] = await db.query(query, [title, slug, body, thumbnails, isPublished, id]);
    return affectedRows;
}