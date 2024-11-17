import express from'express';
import LinkController from'../Controllers/LinkController';
const router = express.Router();

router.post('/links', LinkController.createLink);
router.get('/links', LinkController.getLinks);

export default router;  // החלף module.exports ב-export default
