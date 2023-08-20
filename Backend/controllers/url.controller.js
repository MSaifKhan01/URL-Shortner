const shortid = require("shortid")
const  UrlModel  = require("../models/url.model")

async function GenrateUrl(req, res) {
    const { url } = req.body
    

    try {
        const urlPresent = await UrlModel.findOne({ redirecturl: url })
        if(urlPresent){
            return res.status(201).send({ msg: "url already created",urlPresent })
        }
        if (!url) {
            return res.status(209).send({ msg: "url Required" })
        }
        const shortId = shortid()
        const currentTime = new Date();
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Asia/Kolkata' // Indian time zone
        };

        const formattedTime = currentTime.toLocaleString('en-IN', options);
        const newUrl = new UrlModel({ shortid: shortId, redirecturl: url, visithistory: [],createdAtURL: formattedTime})
        await newUrl.save()
        return res.status(200).send({ msg: "Shorturl created", url:newUrl.shortid,newUrl })
    } catch (error) {
        console.log(error)
        return res.status(401).send({ msg: error.message })
    }

}

async function Redirect(req, res) {
    const { shortId } = req.params
    const Url = await UrlModel.findOneAndUpdate({ shortid: shortId }, { $push: { visithistory: { timestamp: Date.now() } } })
    res.redirect(Url.redirecturl)
    


}

module.exports = { GenrateUrl, Redirect }