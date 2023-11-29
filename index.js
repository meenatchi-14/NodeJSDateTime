import express from "express"
import  router from "./src/router/router.js"
const PORT =process.env.PORT||8000;
console.log("working")
const app=express();
app.use("/",router)

app.listen(PORT,()=>{
    console.log(`Server listening port ${PORT} `)
})