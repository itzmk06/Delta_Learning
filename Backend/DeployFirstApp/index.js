require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.PORT;

app.listen(port,()=>{
    console.log("App listening on port :",port);
});

app.get("/",(req,res)=>{
    res.send("This is home page!");
});

app.get("/login",(req,res)=>{
    res.send("This is login page!");
});

app.get("/youtube",(req,res)=>{
    res.send("<h1>Welcome to Code with Manoj</h1>")
})
