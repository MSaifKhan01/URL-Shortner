const express=require("express")
const { GenrateUrl, Redirect } = require("../controllers/url.controller")
const auth = require("../middleware/auth")


const UrlRouter=express.Router()

UrlRouter.post("/add",auth,GenrateUrl)

UrlRouter.get("/get/:shortId",Redirect)

module.exports=UrlRouter