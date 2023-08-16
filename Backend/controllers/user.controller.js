

const UserModel = require("../models/user.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


async function SignUp(req, res) {
   try {
    const { name, email, password, mobile } = req.body

    const isUser = await UserModel.findOne({ email })
    if (isUser) {
        return res.status(201).send({ msg: "user already present" })

    }
    bcrypt.hash(password,5,async(err,hash)=>{
        const newUser= new UserModel({name,email,password:hash,mobile})
        await  newUser.save()

        res.send({ msg: "Registration Succesful" })
    })

    
   } catch (error) {
    res.send({ msg: error.message })
   }

} 

async function Login(req,res){
   try {
    const { email, password } = req.body

    const isUser= await UserModel.findOne({email})

    if(!isUser){
        return res.status(201).send({ msg: "You Need To Register" })
    }
    bcrypt.compare(password,isUser.password,(err,result)=>{
        if(result){
            const token= jwt.sign({UserID:isUser._id},"Jammi",{expiresIn:"1h"})
            res.send({msg:"login succesful",token,isUser})
        }else{
            return res.send({msg:"invalid credintials"})
        }
    })
    
   } catch (error) {
    res.send({ msg: error.message })
   }

}

module.exports={SignUp,Login}