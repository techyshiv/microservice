import express from "express";
const router = express.Router();
import { postController } from "../controllers";
// Auth Routes
router.post('/create_post', postController.create_post);
router.get('/get_post/:id', postController.get_post);
export default router;