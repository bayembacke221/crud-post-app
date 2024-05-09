const express = require('express'),
    router = express.Router()

const service = require('../services/post.service')


router.get('/', async (req, res) => {
    const posts = await service.getAllPosts()
    res.send(posts)
})

router.get('/:id', async (req, res) => {
    const post = await service.getPostById(req.params.id)
    if (post == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(post)
})

router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deletePost(req.params.id)
    if (affectedRows === 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

router.post('/', async (req, res) => {
    const { title, slug, body, thumbnails, isPublished } = req.body;
    const post = { title, slug, body, thumbnails, isPublished };
    await service.addOrPost(post)
    res.status(201).send('created successfully.')
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { title, slug, body, thumbnails, isPublished } = req.body;
    const post = { title, slug, body, thumbnails, isPublished };
    const affectedRows = await service.editPost(post, id)
    if (affectedRows === 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})



module.exports = router;