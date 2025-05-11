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
router.get("/:id", (req, res,next) => {
    const { id } = req.params;
    const post = posts.find((item) => item.id === parseInt(id));
    if (post) {
      return res.status(200).json(post);
    }
    const error=new Error(`post not founded on this id :${id}`);
    return next(error);
})
router.post("/",(req,res,next)=>{    
    if(!req.body?.title){
        const error=new Error("Please include a title with post..");
        error.status=400;
        return next(error);
    }

    const newpost={
        id:posts.length+1,
        title:req.body.title
    };
    posts.push(newpost);
    res.status(201).json({message:"New Post is created"});
})
router.put("/:id",(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find(item=>item.id===id);
    if(!post){
      const error=new Error("Post not found to update");
      error.status=404;
      return next(error);
    }
    post.title=req.body.title;
    res.status(200).json(posts);
})
router.delete("/:id",(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find(item=>item.id===id);
    if(!post){
       const error=new Error("post not founded");
       error.status=404;
       return next(error);
    }
    posts=posts.filter((item=>item.id!==post.id));
    res.status(200).json(posts);
})
export default router;
// ! I have added the commits as well as the pushed the code 
//! will add some of the controllers which will get the function calls as well..