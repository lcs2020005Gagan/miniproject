const express=require("express")
const bodyParser = require("body-parser");
const Article=require("../models/Articles")
const User=require("../models/Users")
const Foundation=require("../models/Foundations")
const Stream=require("../models/Streams")
const router=express.Router()
let fetchuser=require("../middleware/fetchuser")
const app =express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { body, validationResult } = require('express-validator');


  //addarticle
  router.post('/addarticle', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 1}),
    body('image'),
    body('description').isLength({min:1}),
    body('tags')
   ], async (req, res) => {
        try {
            const { title, description, image,tags } = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const article = new Article({
                title, image,description, tags, author: req.id,
                })
                // console.log("article is",article);
            const savedNote = await article.save()
            await Article.findOneAndUpdate({
                _id:req.id
              },{
                $push:{
                    publishedArticles:article
                }
              })
              res.json(savedNote)
              res.send({success:"success"});        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })






//get all articles
router.get('/getallarticles',async (req,res)=>{
    const cards= Article.find()
    .exec()
    .then(p=>{
         res.status(200).json(p)
     })
     .catch(error=>console.log(error));
   })

   //get all foundations
router.get('/getallfoundations',async (req,res)=>{
    const cards= Foundation.find()
    .exec()
    .then(p=>{
         res.status(200).json(p)
     })
     .catch(error=>console.log(error));
   })



   //get article's author
   router.post('/getarticleauthor/:id',
   async (req, res) => {
     await User.findById(req.params.id)
   .select("-password")
   .exec()
   .then(p=>{
       res.status(200).json(p)
   })
   .catch(error=>console.log(error));
     
   });


   //get a specific story
   router.get('/getarticle/:id',
   async (req, res) => {
     await Article.findById(req.params.id)
     .populate('author')
   .exec()
   .then(p=>{
       res.status(200).json(p)
   })
   .catch(error=>console.log(error));
     
   });

module.exports=router
