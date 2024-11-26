import express from'express';
import LinkController from'../Controllers/LinkController.js';
const router = express.Router();

router.post('/links', LinkController.add);
router.get('/links', LinkController.getList);
router.get("/links", LinkController.getList); // שליפת קישורים
router.post("/links", LinkController.add); // יצירת קישור חדש
router.post("/links/:id/clicks", LinkController.addClick); // הוספת קליק
router.get("/links/:id/clicks/targets", LinkController.getClicksByTarget); // פילוח קליקים לפי מקור


export default router;  // החלף module.exports ב-export default
