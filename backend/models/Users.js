const mongoose=require("mongoose")
mongoose.set('debug', true);

const usersSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
profileImg:{
    type:String
},
followedMentors:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'mentors'}],
profileImg:{
    type:String,
    default:"https://64.media.tumblr.com/10f78200c26f42f392dbf700ba36ceaa/0486fb7b14805e5b-cc/s500x750/d6a256bc70b6ec9ae0285ed12670b97c73f192b7.gifv"
},
enrolledPrograms:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'programs'}],
savedForLater:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'articles'}], 
});
const users=mongoose.model("users",usersSchema);
users.createIndexes();
module.exports=users