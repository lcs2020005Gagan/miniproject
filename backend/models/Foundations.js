const mongoose = require("mongoose");
mongoose.set('debug', true);

const foundationsSchema = new mongoose.Schema({
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
  },
  followers:[ {  type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
  }],
  aim:{
    type:Array,
  },
  achievements:{
    type:Array,
    default:["Saved Children","Provided education"]
  },

});
const foundations = mongoose.model("foundations", foundationsSchema);
foundations.createIndexes();
module.exports = foundations;
