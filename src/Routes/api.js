const ProfileConmtroller = require("../controllers/ProfileConmtroller")
const express = require("express")
const router = express.Router()


router.post("/createProfile", ProfileConmtroller.createProfile)








module.exports = router;