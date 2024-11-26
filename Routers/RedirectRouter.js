import express from "express";
import RedirectController from "../Controllers/RedirectController.js";

const router = express.Router();

// הפניה לקישור המקורי
router.get("/links/:id/redirect", RedirectController.redirectToOriginal);

export default router;
