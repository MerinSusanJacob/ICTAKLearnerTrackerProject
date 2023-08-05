const express=require('express');
const router=express.Router();
const userData=require('../model/userData');
const jwt=require("jsonwebtoken")
const adm=require("../authz.js/adm")

router.use(express.json());
router.use(express.urlencoded({extended:true}));



//to get user data  
router.get('/getudata/:token',async (req,res)=>{
    const data=await userData.find();
    try {
        jwt.verify(req.params.token,"ict",
        (error,decoded)=>{
            if(decoded&&decoded.email){
                res.json(data); 
            }
            else{
                req.json({message:"Unauthorised User"})
            }
        })
        
    } catch (error) {
         res.json({message:"Not successful"});
    } 
})

//to post user data
router.post('/postudata',(req,res)=>{
    try {
        const item=req.body;
        const newdata=new userData(item);
       
        jwt.verify(req.body.token, "ict",
            (error, decoded) => {
                if (decoded && decoded.email) {
                    newdata.save();
                    res.json({ message: "Posted successfully" });

                } else {
                    res.json({ message: "Unauthorised User" })
                }
            })
    } catch (error) {
        res.json({message:"Post not successful"});   
    }
})

//to update user data
router.put('/putudata/:id', async (req,res)=>{
    try {
        const item=req.body;
        const index=req.params.id;
        const updatedData=userData.findByIdAndUpdate(index,item).exec();
        res.json({message:"Updated successfully"});
    } catch (error) {
        res.json({message:"Updation not successful"});
    }
})

//to delete user data
router.delete('/deludata/:id', (req,res)=>{
    try {
        const ind=req.params.id;
        userData.findByIdAndDelete(ind).exec();
        res.json({message:"Deleted successfully"});
    } catch (error) {
        res.json({message:'Deletion not successful'});
    }
})

module.exports=router;