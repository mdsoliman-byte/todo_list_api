const ProfileModel = require("../models/ProfileModel")
exports.createProfile = (req, res) => {
    const reqBody = req.body;
    ProfileModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Fail ", data: err })
        } else {
            res.status(200).json({ status: "SUCCESS", data: data })
        }

    })
}