const express=require("express")
const bodyParser = require("body-parser");
const User=require("../models/Users")
const Stream=require("../models/Streams")
const Foundation=require("../models/Foundations")
const Article=require("../models/Articles")
let fetchuser=require("../middleware/fetchUser")
const router=express.Router()
const app =express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const secretKey="helloworld"
var jwt=require("jsonwebtoken");
let success=false




//create user
router.post('/createuser',
[body('name','Enter a valid name').isLength({min:1}),
  body('email','Enter a valid email').isEmail(),
  body('password','password must be atleast 5 characters').isLength({ min: 5 }),
 
],
 async (req, res) => {
      success=false;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
        let user= await User.findOne({email:req.body.email});
        console.log(user);
        if(user)
        {
            return res.status(400).json({ success,errors: "Email is alerady registered with cloudNote" });

        }
        else{
            var salt =await bcrypt.genSaltSync(10);
var secpassword =  await bcrypt.hashSync(req.body.password, salt);
console.log(secpassword);
       user=await  User.create({
            name:req.body.name,
          email: req.body.email,
          about:req.body.about,
          password: secpassword,
         })
        // console.log("user ",user)
        // console.log(user);
        var authtoken=await jwt.sign({id:user.id},secretKey)
        // console.log(authtoken);
        // console.log(authtoken)
        success=true
        res.json({success,authtoken});
        success=false;
    }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured");
    }
res.send("hello");
  }
);


//create foundation
router.post('/createfoundation',
[body('name','Enter a valid name').isLength({min:1}),
  body('email','Enter a valid email').isEmail(),
  body('password','password must be atleast 5 characters').isLength({ min: 5 }),
  body('about'),
  body('aim'),
  body('achievements'),
  body('profileImg'),
 
],
 async (req, res) => {
      success=false;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
        let user= await Foundation.findOne({email:req.body.email});
        console.log(user);
        if(user)
        {
            return res.status(400).json({ success,errors: "Email is alerady registered with cloudNote" });

        }
        else{
            var salt =await bcrypt.genSaltSync(10);
var secpassword =  await bcrypt.hashSync(req.body.password, salt);
console.log(secpassword);
       user=await  Foundation.create({
            name:req.body.name,
          email: req.body.email,
          about: req.body.about,
          aim: req.body.aim,
          achievements: req.body.achievements,
          profileImg: req.body.profileImg,
          password: secpassword,
          
         })
        console.log("user ",user)
        // console.log(user);
        var authtoken=await jwt.sign({id:user.id},secretKey)
        console.log(authtoken);
        // console.log(authtoken)
        success=true
        res.json({success,authtoken});
        success=false;
    }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured");
    }
res.send("hello");
  }
);





//getuser
router.get('/getuser',fetchuser,
  async (req, res) => {
    await User.find({_id:req.id})
  .select("-password")
  .exec()
  .then(p=>{
      res.status(200).json(p)
  })
  .catch(error=>console.log(error));
  });


//getuserwithpopulatedfriends
router.get('/getuser2',fetchuser,
  async (req, res) => {
    await User.find({_id:req.id})
    .populate("friends")
  .select("-password")
  .exec()
  .then(p=>{
      res.status(200).json(p)
  })
  .catch(error=>console.log(error));
  });


  //getallusers
router.get('/getallusers',async (req,res)=>{
    const cards= User.find()
    .select("-password")
    .exec()
    .then(p=>{
         res.status(200).json(p)
     })
     .catch(error=>console.log(error));
   })

   //get a user with specific id
   router.get('/getuserwithid/:id', async (req, res) => {
    try {
      console.log("hey")
        let user =await User.find({_id:req.params.id})
        if(!user)
        {
            res.status(498).send("User note found");
        }
       user=await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
  

//add friend
router.post('/addfriend', fetchuser, [
  body('user_id'),
 ], async (req, res) => {
      try {
          const user_id = req.body.user_id;
         await User.findOneAndUpdate({
            _id:req.id
          },{
            $push:{
              friends:user_id
            }
          })
          await User.findOneAndUpdate({
            _id:user_id
          },{
            $push:{
              friends:req.id
            }
          })
          const user=await User.find({_id:req.id});
          res.json(user);
      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  })


//get name and profile image for user
router.post('/getunapi',fetchuser,
  async (req, res) => {
    await User.find({_id:req.id})
  .select({name:1,profileImg:1})
  .catch(error=>console.log(error));
  });


//login user
router.post('/loginuser',
[ body('email','Enter a valid email').isEmail(),
  body('password','password must be atleast 5 characters').isLength({ min: 5 }),
],
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
        let user= await User.findOne({email:req.body.email});
        if(!user)
        {
            return res.status(400).json({ success,errors: "wrong email" });
        }
        else{
           var passwordcompare=await bcrypt.compare(req.body.password,user.password)
           if(!passwordcompare)
           {
            return res.status(400).json({success, errors: "wrong passwrod" });
           }

        var authtoken=await jwt.sign({id:user.id},secretKey)
        // console.log(authtoken)
        // setsuccess(true);
        success=true;
        res.json({success,authtoken});
        success=false;  
    }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured");
    }
   
 
  }
  
)
module.exports=router
