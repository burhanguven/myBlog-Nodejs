const express=require('express'),
      mongoose=require('mongoose'),
      passport=require('passport'),
      LocalStrategy=require('passport-local'),
      expressSession=require('express-session'),
      bodyParser=require('body-parser'),
      User=require('./models/userModel'),
      app=express();


//routes
const indexRoutes=require("./routes/indexRoutes");
const adminRoutes=require("./routes/adminRoutes");

//app config
mongoose.connect("mongodb://localhost/BlogApp", { useNewUrlParser: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//passport config
app.use(require("express-session") ({
    secret:"bu bizim güvenlik cumlemiz",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes Using
app.use(indexRoutes);
app.use(adminRoutes);

const server=app.listen(3000,(err)=>{
    if(err)
        console.log(err);
    console.log('App started. Port number : %d ',server.address().port);
});