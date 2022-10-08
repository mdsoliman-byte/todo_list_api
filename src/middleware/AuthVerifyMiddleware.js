const jwt = require("jsonwebtoken")
module.exports = (req, res, next) => {
    let token = req.headers["token_kye"];
    jwt.verify(token, "shakil12345678", (err, decodeData) => {
        if (err) {
            res.status(401).json({ status: "Unauthorized", data: err })
        } else {
            const EmailAddress = decodeData["data"]["EmailAddress"];
            req.headers.EmailAddress = EmailAddress;
            next()
        }
    })
    // jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
    //     console.log(token);
    //   });
}