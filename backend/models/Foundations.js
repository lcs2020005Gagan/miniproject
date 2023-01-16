const mongoose = require("mongoose");
mongoose.set('debug', true);

const mentorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  about: {
    type: String,
  },
 
  profileImg: {
    type: String,
    default:"https://media.tenor.com/WM0Ji8E27KYAAAAd/scary.gif"
  },
  followers:[ {  type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
  }],
  aim:{
    type:Array,
    default:["Save Children","Provide education"]
  },
  achievements:{
    type:Array,
    default:["Saved Children","Provided education"]
  },
   
  about:{
    type:Array,
    default:["Save Children","Provide education"]
  },
  
 

});
const mentors = mongoose.model("foundations", mentorsSchema);
mentors.createIndexes();
module.exports = mentors;
