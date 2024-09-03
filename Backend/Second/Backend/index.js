import express from "express";
import "dotenv/config";

const app=express();

// console.log(process.env);

app.listen(process.env.PORT,()=>{
    console.log(`App is listening at port ${process.env.port}`);
});

// app.get('/',(req,res)=>{
//     res.send("This is the home page");
// });

// * serving the static files
app.use(express.static('dist'));


const jokes=[
    {
        id:1,
        content:"Joke1"
    },
    {
        id:2,
        content:"Joke2"
    },
    {
        id:3,
        content:"Joke3"
    },
];

app.get('/api/jokes',(req,res)=>{
    res.send(jokes);
})