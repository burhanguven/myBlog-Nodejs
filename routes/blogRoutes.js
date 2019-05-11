const express=require('express'),
      router=express.Router();

router.get('/addNewBlog',(req,res)=>{
    res.render('blog/newBlog');
});


module.exports=router;