// ! posts routes...
import express from "express";
const router=express.Router();
let posts = [
    {
        id: 1,
        title: 'Some thing at first'
    },
    {
        id: 2,
        title: 'Some thing at second...'
    },
    {
        id: 3,
        title: 'Some thing at second...'
    },
    {
        id: 4,
        title: 'Some thing at second...'
    },

]
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        const requiredResult = posts.slice(0, limit);
        return res.status(200).json(requiredResult);
    }
    res.status(200).json(posts);
})
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find((item) => item.id === parseInt(id));
    if (post) {
      return res.status(200).json(post);
    }
    res.status(404).json({ message: `post not founded on id:${id}` });

})
router.post("/",(req,res)=>{
    const newpost={
        id:posts.length+1,
        title:req.body.title
    };
    if(!newpost.title){
        res.status(400).json({message:"new Post is'nt have title"});
    }
    posts.push(newpost);
    res.status(201).json({message:"New Post is created"});
})
router.put("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const post=posts.find(item=>item.id===id);
    if(!post){
      return res.status(404).json({message:"post not founded"});
    }
    post.title=req.body.title;
    res.status(200).json(posts);
})
router.delete("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const post=posts.find(item=>item.id===id);
    if(!post){
       return res.status(404).json({message:'post not founded'});
    }
    posts=posts.filter((item=>item.id!==post.id));
    res.status(200).json(posts);
})
export default router;