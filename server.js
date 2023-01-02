const express=require("express");
const app=express();
const path=require("path");


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./public/index.html"));
});

app.listen(8000);

console.log("The server is running at port 8000");