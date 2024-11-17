// console.log('hi');
// import express from 'express'; // עם e קטן
// import cors from 'cors'
// import bodyParser from "body-parser";
// import TasksController from './Controllers/tasksController.js';

// import TasksRouter from "./Routers/TasksRouter.js";
// const app = express();
// app.use('/tasks', TasksRouter);
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.text());

// const port = 3000;
// app.get("/tasks", TasksController.getList);
// app.get("/tasks/:id", TasksController.getById);

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

//  app.post("/tasks", (req, res) => {
//     const { name, status } = req.body; // קבלת הנתונים מתוך הבקשה
//     const newTask = {
//         id: tasks.length + 1, // יצירת מזהה ייחודי למשימה החדשה
//         name,
//         status
//     };
//     tasks.push(newTask); // הוספת המשימה החדשה למערך הגלובלי
//     res.status(201).send(newTask); // החזרת המשימה החדשה עם קוד סטטוס 201 (נוצר)
// });
  
//   app.put("/tasks/:id",(req,res)=>{
//     res.send("update a task");
//   })
  
//   app.delete("/tasks/:id",(req,res)=>{
//     res.send("delete a task");
//   })

// app.listen(port, () => {
//     console.log(`Example app listening on http://localhost:${port}`);
// });

import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import TasksRouter from "./Routers/TasksRouter.js";
import jwt from "jsonwebtoken";
import connectDB from './database.js';
import linkRoutes from './Routers/LinkRouter.js';
import userRoutes from './Routers/UserRouter.js'




connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());

// הגדרת הניתוב הראשי של tasks 
app.use('/tasks', TasksRouter);
app.use('/api', linkRoutes);
app.use('/api', userRoutes);



const secret = "JIs%WCfS#Sl454d5FX";
const token = jwt.sign({ userId: 1, roles: ["teacher"] }, secret);
try {
    const decoded = jwt.verify(token, secret);
} catch {
    //JWT is not valid
}
// localStorage.setItem("accessToken", data.accessToken);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

