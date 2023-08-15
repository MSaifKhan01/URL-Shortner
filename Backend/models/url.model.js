const mongoose=require("mongoose")

const urlSchema=mongoose.Schema({
    shortid:{type:String,unique:true},
    redirecturl:String,
    // visithistory:Array
    visithistory:[{
        timestamp:{type:Number}
    }]
}
,
{timestamps:true}
)

const UrlModel=mongoose.model("url",urlSchema)

module.exports=UrlModel