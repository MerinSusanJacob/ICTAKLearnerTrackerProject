const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const userData=require('../model/userData');

//to get data
router.get('/getudata',async (req,res)=>{
    try {
        const data=await userData.find();
        res.json(data); 
    } catch (error) {
         res.json({message:"Not successful"});
    } 
})

//to post data
router.post('/postudata',(req,res)=>{
    try {
        const item=req.body;
        const newdata=new userData(item);
        newdata.save();
        res.json({message:"Posted successfully"});
    } catch (error) {
        res.json({message:"Post not successful"});   
    }
})

//to update data
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

//to delete data
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