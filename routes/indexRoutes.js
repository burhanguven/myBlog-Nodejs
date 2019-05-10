const express=require('express');
const router=express.Router();

let data=[
    {
        postTitle:'Makale Turkce',
        postSubTitle:'İlk turkçe makale denemesi',
        postImage:'https://images.unsplash.com/photo-1556725726-03e4fae0cbef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80'
    },
    {
        postTitle:'Article Ing',
        postSubTitle:'first english trial article',
        postImage:'https://images.unsplash.com/photo-1556780547-25b93bd93f38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
        postTitle:'Geçmişten geleceğe',
        postSubTitle:'Geçmişte ve gelecekte merak ettiğiniz konular bu makalede',
        postImage:'https://images.unsplash.com/photo-1556634648-7110f11a3559?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
    }
];
//render edilen data da {data:data} iknci data indexRotes.js dosyasında değişken diğeri ise render edilen sayfada gönderilen değişken
router.get('/',(req,res)=>{
    res.render('home.ejs',{data:data});
    console.log('/home');
});

router.get('/about',(req,res)=>{
    res.send('about');
    console.log('/about');

});
router.get('/contact',(req,res)=>{
    res.send('contact');
    console.log('/contact');

});
router.get('/resume',(req,res)=>{
    res.render('resume');
    console.log('/resume');

});


module.exports=router;