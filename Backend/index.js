// const express=require("express")
// const {connection} = require("./connection/db")
// const UrlRouter = require("./routers/url.routes")
// const cors=require("cors")
// const UserRouter = require("./routers/user.routes")
// const StatsRouter = require("./routers/stats.routes")


// const app=express()
// app.use(cors())
// app.use(express.json())


// app.use("/user",UserRouter)

// app.use("/url",UrlRouter)
// app.use("/",StatsRouter)


// app.listen(3400,async()=>{
//     try {
//         await connection
//         console.log("connected to DB")
//     } catch (error) {
//         console.log(error)
//     }
//     console.log("connected to server")
// })











const express = require("express");
const { connection } = require("./connection/db");
const UrlRouter = require("./routers/url.routes");
const UserRouter = require("./routers/user.routes");
const StatsRouter = require("./routers/stats.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", UserRouter);
app.use("/url", UrlRouter);
app.use("/", StatsRouter);

// ✅ Use Render’s provided PORT (important fix)
const PORT = process.env.PORT || 3400;

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server running on port ${PORT}`);
});
