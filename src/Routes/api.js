const ProfileConmtroller = require("../controllers/ProfileConmtroller")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const express = require("express")
const router = express.Router()


router.post("/createProfile", ProfileConmtroller.createProfile)
router.post("/loginUser", ProfileConmtroller.loginUser)
router.get("/selectUser", AuthVerifyMiddleware, ProfileConmtroller.selectUser)
router.post("/updateProfile", AuthVerifyMiddleware, ProfileConmtroller.updateProfile)








module.exports = router;