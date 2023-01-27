const mongoose = require("mongoose");

const streamsSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 image:{
    type:String,
    default:"https://temp.compsci88.com/cover/Shingeki-No-Kyojin.jpg"
 },
 description:{
type:String
 },
 author:{
    type: mongoose.Schema.Types.ObjectId, ref:'users'
 },
 date:{
    type:Date,
    default:new Date(),
 },
 tags:{
    type:Array,
 },
});
const streams = mongoose.model("streams", streamsSchema);
streams.createIndexes();
module.exports = streams;
