const mongoose=require("mongoose")

const dotenv = require("dotenv");

dotenv.config();

const connection=mongoose.connect(process.env.mongourl)

module.exports=connection