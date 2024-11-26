// import express from "express";
// import { addClick, getClicksByTarget } from "../Controllers/TrackingController.js";

// const router = express.Router();

// // ניתוב להוספת קליק
// router.post("/links/:id/clicks", addClick);

// // ניתוב לפילוח קליקים לפי מקורות
// router.get("/links/:id/clicks/targets", getClicksByTarget);

// export default router;
import express from "express";
import RedirectController from "../Controllers/RedirectController.js";

const router = express.Router();

// הפניה לקישור המקורי
router.get("/links/:id/redirect", RedirectController.redirectToOriginal);

export default router;
