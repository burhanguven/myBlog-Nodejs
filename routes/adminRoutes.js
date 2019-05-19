const express=require('express'),
      passport=require('passport'),
      User=require('../models/userModel');

const router=express.Router();

let adminActions=[
    {
        actionId:1,
        actionName:"changeHomeImage",
        displayName:"Change Home Image"
    },
    {
        actionId:2,
        actionName:"changeAboutImage",
        displayName:"Change About Image"
    },
    {
        actionId:3,
        actionName:"changeAboutText",
        displayName:"Change About Text"
    },
    {
        actionId:4,
        actionName:"addNewBlog",
        displayName:"Add New Blog"
    },
    {
        actionId:5,
        actionName:"listAllBlogs",
        displayName:"List All Blogs"
    }

];

router.get('/admin',(req,res)=>{
    res.render("admin/admin", {adminActions:adminActions});
})

router.get('/signIn',(req,res)=>{
    res.render('admin/signIn');
    console.log('get:/signIn');

});
router.get('/signUp',(req,res)=>{
    res.render('admin/signUp');
    console.log('get:/signUp');

});

//kullanıcı giriş
//kullanıcı bilgilerini db den dkarşılaştırmak için passport.authenticate fonk. kullanılır.
router.post('/signIn',passport.authenticate("local",{
        successRedirect:"/",
        failRedirect:"/signIn"
    }),(req,res)=>{
    console.log("post:/signIn -> /");
});

//user kayıt
router.post('/signUp',isLoggedIn, (req,res)=>{
    let newUser=new User({username:req.body.username});

    User.register(newUser, req.body.password, (err,user)=>{
        if(err){
            console.log(err);
            res.redirect("/signUp");
        }
        passport.authenticate("local")(req,res, ()=>{
            res.redirect("/");
        });
    });
    console.log("post:/signUp -> /");
});
//çıkış
router.get('/signOut',isLoggedIn,(req,res)=>{
    req.logout();
    res.redirect('/');
});
//login olma kontrolü
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signIn")
}

module.exports=router;