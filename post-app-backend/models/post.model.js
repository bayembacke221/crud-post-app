class Post {
    constructor(title, slug, body, thumbnails, isPublished) {
        this.title = title;
        this.slug = slug;
        this.body = body;
        this.thumbnails = thumbnails;
        this.isPublished = isPublished;
    }
}

module.exports = Post;