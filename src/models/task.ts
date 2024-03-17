import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      duedate: {
        type: Date,
        required: true,
      },
      status: {
        type: Date,
        required: true,
      },
})

const Task = mongoose.model("Task",taskSchema);
export default Task;