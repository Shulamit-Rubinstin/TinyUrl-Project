// const TasksController = {
//     getList: (req, res) => {
//         console.log(req.query.status);
//         res.send([
//             { id: 1, name: "task 1", status: "TODO" },
//             { id: 2, name: "task 2", status: "Done" },
//         ]);
//     },
//     getById: (req, res) => {
//         res.send(`get task by id ${req.params.id}`);
//     },
//     add: (req, res) => {
//         const { name, status } = req.body; // קבלת הנתונים מתוך הבקשה
//         const newTask = {
//             id: Math.floor(Math.random() * 1000), // יצירת מזהה ייחודי למשימה
//             name,
//             status,
//         };
//         res.status(201).send(newTask); // החזרת המשימה החדשה עם קוד סטטוס 201
//     },
//     update: (req, res) => {
//         const { id } = req.params;
//         const { name, status } = req.body;
//         res.send(`Updated task ${id} with name: ${name}, status: ${status}`);
//     },
//     delete: (req, res) => {
//         const { id } = req.params;
//         res.send(`Deleted task with id ${id}`);
//     }
// };

// export default TasksController;

import TaskModel from "../models/TaskModel.js";

const TasksController = {
  getList: async (req, res) => {
    try {
      const tasks = await TaskModel.find();//ללא סינון
      const filtered1 = await TaskModel.find({ complete: true });//סינון 1
      const filtered2 = await TaskModel.where('isComplete', false);//סינון 2
      res.json({ tasks, filtered1, filtered2});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const task = await TaskModel.findById(req.params.id);//שליפה לפי מזהה
      res.json(task);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { name } = req.body;
    try {
      const newTask = await TaskModel.create({ name });//הוספת חדש
      res.json(newTask);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedTask = await TaskModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });//עדכון לפי מזהה
      res.json(updatedTask);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await TaskModel.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default TasksController;
 