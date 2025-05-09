// ! posts routes...
const express =require("express");
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

module.exports =router;