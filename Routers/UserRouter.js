
import express from'express';
const router = express.Router();
import userController from'../Controllers/UserController';

// יצירת משתמש חדש
router.post('/users', userController.createUser);
// שליפת כל המשתמשים
router.get('/users', userController.getUsers);
// שליפת משתמש לפי מזהה
router.get('/users/:id', userController.getUserById);
// עדכון משתמש
router.put('/users/:id', userController.updateUser);
// מחיקת משתמש
router.delete('/users/:id', userController.deleteUser);

export default router;  // החלף module.exports ב-export default
