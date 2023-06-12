const express=require("express")
const { connection } = require("./db")
const { userRoute } = require("./routes/userRoute.route")
const { postRoute } = require("./routes/postRoute.route")

const app=express()

require("dotenv").config()

app.use(express.json())

app.use("/users",userRoute)
app.use("/posts",postRoute)

app.get("/home",()=>{
    try {
        res.send("this is the home page")
    } catch (error) {
        res.send(error)
    }
})
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server run at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})