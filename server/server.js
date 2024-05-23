require("dotenv").config();
const express=require("express");
const cors=require("cors");
const app=express();
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const serviceRoute=require("./router/service-router");
const adminRoute=require("./router/admin-router");
const connectDb=require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//handling 2 diff ports

const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

app.use("/api/admin",adminRoute);

app.use(errorMiddleware);

const PORT=8000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running in port is 8000");
    });
});