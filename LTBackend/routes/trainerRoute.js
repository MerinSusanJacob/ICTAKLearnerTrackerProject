const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const learnerData=require('../model/learnerData');

//to get data
router.get('/getldata',async (req,res)=>{
    try {
        const data=await learnerData.find();
        res.json(data); 
    } catch (error) {
         res.json({message:"Not successful"});
    } 
})

//to post data
router.post('/postldata',(req,res)=>{
    try {
        const item=req.body;
        const newdata=new learnerData(item);
        newdata.save();
        res.json({message:"Posted successfully"});
    } catch (error) {
        res.json({message:"Post not successful"});   
    }
})

//to update data
router.put('/putldata/:id', async (req,res)=>{
    try {
        const item=req.body;
        const index=req.params.id;
        const updatedData=learnerData.findByIdAndUpdate(index,item).exec();
        res.json({message:"Updated successfully"});
    } catch (error) {
        res.json({message:"Updation not successful"});
    }
})

//to delete data
router.delete('/delldata/:id', (req,res)=>{
    try {
        const ind=req.params.id;
        learnerData.findByIdAndDelete(ind).exec();
        res.json({message:"Deleted successfully"});
    } catch (error) {
        res.json({message:'Deletion not successful'});
    }
})

module.exports=router;