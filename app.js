const express =require('express');
const path=require('path');
c
const PORT=process.env.PORT||"5000";

var app=express();

const bodyparser=require('body-parser');

const cors=require('cors');
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:false;
}))
app.use(express.urlencoded({
    extended:false
}))
app.use(cors());

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,"myfirstweb/build")));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,"myfirstweb/build","index.html"));
    })
}

app.listen(PORT,()=>{
    console.log("server running on"+PORT);
})


