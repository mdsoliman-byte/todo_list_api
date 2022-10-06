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
exports.loginUser = (req, res) => {
    const EmailAddress = req.body['EmailAddress'];
    const Password = req.body['Password'];
    ProfileModel.find({ EmailAddress: EmailAddress, Password: Password }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "ERROR", data: err })

        } else {
            if (data.length > 0) {
                res.status(200).json({ status: "SUCCESS", data: data })
            } else {
                res.status(401).json({ status: "Unauthorized" })
            }
        }
    })




}