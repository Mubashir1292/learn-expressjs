const express=require("express");
const app = express();
const port = process.env.port || 5001;
const posts = require("./routes/posts.route.js");
app.use(express.json());

app.use("/api/posts",posts)
// setup static folder
// app.use(express.static(path.join(__dirname, "public")));
app.use("/api/posts")
app.listen(port, () => {
    console.log("Server is listening on port 5000");
})
