import express from 'express'
import * as postController from '../controllers/post'
const router =express.Router()
// postController.getPost
router.get('/all', postController.getPost)
router.get('/limit', postController.getPostLimit)
router.get('/newpost', postController.getNewPost)


export default router