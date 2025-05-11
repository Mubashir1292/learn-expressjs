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
// @desc get all posts
// @route /api/posts
export const getAllPosts=(req,res )=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0){
        const requiredResult = posts.slice(0,limit);
        return res.status(200).json(requiredResult);
    }


    res.status(200).json(posts);
}
//@desc get single post
//@route /api/post
export const singlePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post = posts.find(item=>item.id===id);
    if(!post){
        const error=new Error("Post not founded");
        error.status=404;
        next(error);
    }
}
//@desc create single post
//@route /api/posts
export const createPost=(req,res,next)=>{
    if(!req.body?.title){
        const error=new Error("Please include the title..");
        error.status=400;
        next(error);
    }
    const newPost={
        id:posts.length+1,
        title:req.body.title,
    };
    posts.push(newPost);
    res.status(201).json({message:"Post Created Successfully"});
}
//@desc update the post
//@route /api/posts
export const updatePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find(item=>item.id===id);
    if(!post){
        const error=new Error("Post not founded");
        error.status=404;
        next(error);
    }
    post.title=req.body.title;
    res.status(200).json({message:'Post updated...'});
}
//@desc delete the post
//@route /api/posts
export const deletePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find(item=>item.id===id);
    if(!post){
        const error=new Error("Post not founded");
        error.status=404;
        next(error);
    }
    posts=posts.filter(item=>item.id!==id);
    res.status(200).json(posts);
}




