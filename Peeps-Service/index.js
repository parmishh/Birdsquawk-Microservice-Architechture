
const express=require('express');
const {randomBytes}=require('crypto');
const app=express();
app.use(express.json());
const peepsBysquawkId={};

app.post('/birdsquawk/:id/peeps',(req,res)=>{
    const peepId=randomBytes(8).toString('hex');
    const {peep}=req.body;
    const peeps=peepsBysquawkId[req.params.id] || [];
    peeps.push({id:peepId,peep})
   peepsBysquawkId[req.params.id]=peeps;
    res.status(201).send(peeps)

})
app.get('/birdsquawk/:id/peeps',(req,res)=>{
    res.send(peepsBysquawkId[req.params.id] || [])
})


app.listen(5001,()=>{
    console.log("listening on port 5001")
})