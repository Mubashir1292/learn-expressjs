// ! posts routes...
import express from "express";
import { createPost, deletePost, getAllPosts, singlePost, updatePost } from "../controllers/posts.controller.js";
const router=express.Router();

router.get('/', getAllPosts)
router.get("/:id", singlePost)
router.post("/",createPost)
router.put("/:id",updatePost)
router.delete("/:id",deletePost)
export default router;
// ! I have added the commits as well as the pushed the code 
//! will add some of the controllers which will get the function calls as well..