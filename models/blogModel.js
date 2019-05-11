const mongoose=require('mongoose');



const BlogSchema=new mongoose.Schema({

    title:{
        type:String,
        required:"Cannot be empty"
    };
    comSentence:{
        type:String,
        required:"Cannot be empty"
    };
    comImage:{
        type:String,
        required:"Cannot be empty"
    };
    blog:{
        type:String,
        required:"Cannot be empty",
    };
    date:{
        type:date,
        default:date.now
    };

});

module.exports=mongoose.model("Blog",BlogSchema);
