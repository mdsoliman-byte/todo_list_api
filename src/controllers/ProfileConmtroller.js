const ProfileModel = require("../models/ProfileModel")
const jwt = require("jsonwebtoken")
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
                // Create User Auth Json Web Token  Token 
                const payload = {
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: data[0]
                }
                var token = jwt.sign(payload, 'shakil12345678');

                res.status(200).json({ status: "SUCCESS", token: token, data: data[0] })
            } else {
                res.status(401).json({ status: "Unauthorized" })
            }
        }
    })

}
exports.selectUser = (req, res) => {
    const EmailAddress = req.headers["EmailAddress"];
    ProfileModel.find({ EmailAddress: EmailAddress }, { Password: 0, _id: 0 }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "ERROR", data: err })
        } else {
            res.status(200).json({ status: "SUCCESS", data: data })
        }
    })
}
exports.updateProfile = (req, res) => {
    const EmailAddress = req.headers["EmailAddress"];
    const reqBody = req.body;
    ProfileModel.updateOne({ EmailAddress: EmailAddress }, { $set: reqBody }, { upsert: true }, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Fail ", data: err })
        } else {
            res.status(200).json({ status: "Data Update Success Full ", data: data })
        }
    })


}