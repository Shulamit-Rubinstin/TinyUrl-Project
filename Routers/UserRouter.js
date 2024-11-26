
import express from'express';
const router = express.Router();
import userController from'../Controllers/UserController.js';

// יצירת משתמש חדש
router.post('/users', userController.add);
// שליפת כל המשתמשים
router.get('/users', userController.getList);
// שליפת משתמש לפי מזהה
router.get('/users/:id', userController.getById);
// עדכון משתמש
router.put('/users/:id', userController.update);
// מחיקת משתמש
router.delete('/users/:id', userController.delete);

export default router;  // החלף module.exports ב-export default
