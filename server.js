const express=require("express");
const path=require("path");
const app=express();
const port=process.env.port||5001;
app.use(express.json());
const posts=[
    {
        id:1,
        title:'Some thing at first'
    },
    {
        id:2,
        title:'Some thing at second...'
    },
    {
        id:3,
        title:'Some thing at second...'
    },
    {
        id:4,
        title:'Some thing at second...'
    },

]
// setup static folder
app.use(express.static(path.join(__dirname,"public")));

app.get('/api/posts',(req,res)=>{
    const limit=parseInt(req.query.limit);
    if(!isNaN(limit)&&limit>0){
        const requiredResult=posts.slice(0,limit);
        res.send(requiredResult);
    }else{
        res.send(posts);
    }
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"));
})
app.listen(port,()=>{
    console.log("Server is listening on port 5000");
})
app.get("/api/posts/:id",(req,res)=>{
    const {id}=req.params;
    const query=req.query;
    const post=posts.find((item)=>item.id===parseInt(id));
    res.send(post);
})