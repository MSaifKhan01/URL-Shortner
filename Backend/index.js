const express=require("express")
const {connection} = require("./connection/db")
const UrlRouter = require("./routers/url.routes")
const cors=require("cors")
const UserRouter = require("./routers/user.routes")


const app=express()
app.use(cors())
app.use(express.json())


app.use("/user",UserRouter)

app.use("/url",UrlRouter)



app.listen(3400,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("connected to server")
})