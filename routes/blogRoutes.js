const express=require('express'),
      Blog=require('../models/blogModel'),
      router=express.Router();


router.get('/addNewBlog',(req,res)=>{
    res.render('blog/newBlog');
});

router.post('/addNewBlog',(req,res)=>{
    let title=req.body.data.blogTitle;
    let comSentence=req.body.data.comSentence;
    let comImage=req.body.data.comImage;
    let blog=req.body.data.blog;

    let newBlog={
        title:title,
        comSentence:comSentence,
        comImage:comImage,
        blog:blog
    };
    Blog.create(newBlog)
        .then((newBlog)=>{
            console.log(newBlog);
            res.status(201).json(newBlog);
        })
        .catch((err)=>{
            console.log(err);
        })
});

router.get('/testing',(req,res)=>{
    Blog.find()
        .then((foundBlogs)=>{
            res.json(foundBlogs);
        })
        .catch((err)=>{
            console.log(err);
        })
})

module.exports=router;