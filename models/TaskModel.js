import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "new task"
  },
  isComplete: Boolean,
});

export default mongoose.model("tasks", TaskSchema);
