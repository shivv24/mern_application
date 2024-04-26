require("dotenv").config();
const express=require("express");
const app=express();
const router=require("./router/auth-router");
const connectDb=require("./utils/db");

app.use(express.json());

app.use("/api/auth",router);

const PORT=8000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running in port is 8000");
    });
});