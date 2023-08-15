const express=require("express")
const { GenrateUrl, Redirect } = require("../controllers/url.controller")


const UrlRouter=express.Router()

UrlRouter.post("/add",GenrateUrl)

UrlRouter.get("/get/:shortId",Redirect)

module.exports=UrlRouter