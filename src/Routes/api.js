const ProfileConmtroller = require("../controllers/ProfileConmtroller")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const TodoListController = require("../controllers/TodoListController")
const express = require("express")

const router = express.Router()


router.post("/createProfile", ProfileConmtroller.createProfile)
router.post("/loginUser", ProfileConmtroller.loginUser)
router.get("/selectUser", AuthVerifyMiddleware, ProfileConmtroller.selectUser)
router.post("/updateProfile", AuthVerifyMiddleware, ProfileConmtroller.updateProfile)
router.post("/createTodo", AuthVerifyMiddleware, TodoListController.createTodo)
router.get("/findTodo", AuthVerifyMiddleware, TodoListController.findTodo)
router.post("/updateTodo", AuthVerifyMiddleware, TodoListController.updateTodo)
router.post("/updateTodoStatus", AuthVerifyMiddleware, TodoListController.updateTodoStatus)
router.post("/removeTodo", AuthVerifyMiddleware, TodoListController.removeTodo)
router.post("/todoStatusFilter", AuthVerifyMiddleware, TodoListController.todoStatusFilter)








module.exports = router;