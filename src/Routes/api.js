const ProfileConmtroller = require("../controllers/ProfileConmtroller")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const express = require("express")
const router = express.Router()


router.post("/createProfile", ProfileConmtroller.createProfile)
router.post("/loginUser", ProfileConmtroller.loginUser)
router.get("/selectUser/:useremail", AuthVerifyMiddleware, ProfileConmtroller.selectUser)








module.exports = router;