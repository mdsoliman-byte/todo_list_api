const TodoModel = require("../models/TodoListModel")
exports.createTodo = (req, res) => {
    const reqBody = req.body;
    const TodoSubject = reqBody["TodoSubject"]
    const TodoDescription = reqBody["TodoDescription"]
    const EmailAddress = req.headers["EmailAddress"]
    const TodoStatus = "New "
    const TodoCreateData = Date.now()
    const TodoUpdateData = Date.now()
    const postBody = {
        EmailAddress: EmailAddress,
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoStatus: TodoStatus,
        TodoCreateData: TodoCreateData,
        TodoUpdateData: TodoUpdateData,
    }
    TodoModel.create(postBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Data Not Found ", data: err })
        } else {
            res.status(200).json({ status: "Data Created Success Full ", data: data })
        }
    })
}
