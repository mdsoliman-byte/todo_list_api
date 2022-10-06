const ProfileConmtroller = require("../controllers/ProfileConmtroller")
const express = require("express")
const router = express.Router()


router.post("/createProfile", ProfileConmtroller.createProfile)
router.post("/loginUser", ProfileConmtroller.loginUser)








module.exports = router;