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
exports.findTodo = (req, res) => {
    const EmailAddress = req.headers["EmailAddress"]
    TodoModel.find({ EmailAddress: EmailAddress }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Sorry We Cannot Your data ", data: err })
        } else {
            res.status(200).json({ status: "Success ", data: data })
        }
    })

}
exports.updateTodo = (req, res) => {
    const TodoSubject = req.body["TodoSubject"]
    const TodoDescription = req.body["TodoDescription"]
    const _id = req.body["_id"]
    const TodoUpdateData = Date.now()
    const updateBody = {
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoUpdateData: TodoUpdateData,
    }
    TodoModel.updateOne({ _id: _id }, { $set: updateBody }, { upsert: true }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Sorry We Cannot Update Your Data  ", data: err })
        } else {
            res.status(200).json({ status: " Data Updated Success Full  ", data: data })
        }
    })

}
exports.updateTodoStatus = (req, res) => {
    const _id = req.body["_id"];
    const TodoStatus = req.body["TodoStatus"]
    const TodoUpdateData = Date.now();
    const statousBody = {
        TodoStatus: TodoStatus,
        TodoUpdateData: TodoUpdateData

    }
    TodoModel.updateOne({ _id: _id }, { $set: statousBody }, { upsert: true }, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Todo Update  Status  Fail ", data: err })
        } else {
            res.status(200).json({ status: "Todo Update  Status  Sussess Full ", data: data })
        }
    })

}
exports.removeTodo = (req, res) => {
    const _id = req.body["_id"];
    TodoModel.remove({ _id: _id }, (err, data) => {
        if (err) {
            res.status(404).json({ status: "We Cannot Remove Your Data ", data: err })
        } else {
            res.status(200).json({ status: "YOur Data Remove Success Full ", data: data })
        }
    })
}
exports.todoStatusFilter = (req, res) => {
    const EmailAddress = req.headers["EmailAddress"]
    const TodoStatus = req.body["TodoStatus"];
    TodoModel.find({ EmailAddress: EmailAddress, TodoStatus: TodoStatus }, (err, data) => {
        if (err) {
            res.status(404).json({ status: "We Cannot Filter Your Status", data: err })
        } else {
            res.status(200).json({ status: "Status Filter Success Full ", data: data })
        }
    })


}
exports.todoFilterindate = (req, res) => {
    const EmailAddress = req.headers["EmailAddress"]
    const fromDate = req.body["fromDate"];
    const todate = req.body["toDate"];
    TodoModel.find({ EmailAddress: EmailAddress, TodoCreateData: { $gte: new Date(fromDate), $lte: new Date(todate) } }, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Filter Data Fail ", data: err })
        } else {
            res.status(200).json({ status: "Data Filter Success Full", data: data })
        }
    })

}