const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:String
})

const UserModel=mongoose.model("User",UserSchema)

module.export=UserModel