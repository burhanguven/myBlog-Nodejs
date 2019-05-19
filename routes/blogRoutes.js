const express=require('express'),
      Blog=require('../models/blogModel'),
      router=express.Router();


router.get('/addNewBlog',isLoggedIn,(req,res)=>{
    res.render('blog/newBlog');
});

router.post('/addNewBlog',isLoggedIn,(req,res)=>{
    let title=req.body.data.blogTitle,
        comSentence=req.body.data.comSentence,
        comImage=req.body.data.comImage,
        blog=req.body.data.blog;

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
router.get('/blogs/:blogId',(req,res)=>{
    Blog.findById(req.params.blogId)
        .then((foundBlog)=>{
            res.render("blog/showBlog",{foundBlog:foundBlog});
        })
        .catch((err)=>{
            console.log(err);
        })
})
//login olma kontrolü
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signIn")
}
module.exports=router;