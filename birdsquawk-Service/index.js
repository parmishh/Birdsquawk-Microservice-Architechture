const express=require('express');
const {randomBytes}=require('crypto');
const app=express();
app.use(express.json());
const squawkData={};

app.post('/birdsquawk',(req,res)=>{
    const id=randomBytes(8).toString('hex');
    const {title}=req.body;
    squawkData[id]={id,title}
    res.status(201).send(squawkData[id])

})


app.listen(5000,()=>{
    console.log("listening on port 5000")
})