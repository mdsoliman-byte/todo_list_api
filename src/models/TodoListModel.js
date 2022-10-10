const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    EmailAddress: { type: String },
    TodoSubject: { type: String },
    TodoDescription: { type: String },
    TodoStatus: { type: String },
    TodoCreateData: { type: Date },
    TodoUpdateData: { type: Date },




}, { versionKye: false })


const toDoModel = mongoose.model("Todolists", dataSchema);
module.exports = toDoModel;