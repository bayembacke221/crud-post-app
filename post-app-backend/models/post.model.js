class Post {
    constructor(id, title, slug, body, thumbnails, isPublished, createdAt) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.body = body;
        this.thumbnails = thumbnails;
        this.isPublished = isPublished;
        this.createdAt = createdAt;
    }
}

module.exports = Post;