import express from "express";
const app = express();
const port = process.env.port || 5001;
import posts from "./routes/posts.route.js";
import logger from './middlewares/logger.js';
import errorHandler from './middlewares/errorHandler.js';
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger);

// routes..

app.use("/api/posts",posts);


app.use(errorHandler);
// setup static folder
// app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
    console.log("Server is listening on port 5000");
})
