const mongoose=require("mongoose")

const urlSchema=mongoose.Schema({
    shortid:{type:String,unique:true},
    redirecturl:String,
    createdAtURL:String,
    visithistory:[{
        timestamp:{type:Number}
    }]
}
,
{timestamps:true}
)

const UrlModel=mongoose.model("url",urlSchema)

module.exports=UrlModel