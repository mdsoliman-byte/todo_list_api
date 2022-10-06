const mongoose = require("mongoose");


const dataSchema = mongoose.Schema({

}, { versionKye: false })

const profileModel = mongoose.model("profile", dataSchema);


module.exports = profileModel;