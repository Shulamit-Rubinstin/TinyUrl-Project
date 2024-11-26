// import LinkController from "./LinkController.js";

// const RedirectController = {
//     get: async (req, res) => {
//         try {
//             const linkId = req.params.id; // מזהה הקישור
//             const ipAddress = req.ip; // כתובת ה-IP של המשתמש

//             // שליפת הקישור דרך LinkController
//             const link = await LinkController.getLinkById(linkId);
//             if (!link) {
//                 return res.status(404).send("Link not found");
//             }

//             // מציאת ערך הפרמטר targetParamName
//             const targetParamValue = req.query[link.targetParamName] || "";

//             // הוספת מידע על הקליק
//             link.clicks.push({ ipAddress, targetParamValue });
//             await link.save();

//             // הפניה לכתובת המקורית
//             res.redirect(link.originalUrl);
//         } catch (error) {
//             console.error("Error during redirect:", error);
//             res.status(500).send("Server Error");
//         }
//     },
// };

// export default RedirectController;
import Link from "../Models/Link.js"; // ייבוא המודל Link

const RedirectController = {
  redirectToOriginal: async (req, res) => {
    try {
      const { id } = req.params; // מזהה הקישור
      const targetParamValue = req.query.t || "None"; // ערך פרמטר הטירגוט (אם יש)
      const ipAddress = req.ip; // כתובת ה-IP של המשתמש

      // שליפת הקישור מתוך בסיס הנתונים
      const link = await Link.findById(id);

      // בדיקה אם הקישור קיים ופעיל
      if (!link || !link.isActive) {
        return res.status(404).json({ message: "Link not found or inactive" });
      }

      // הוספת קליק למערך הקליקים של הקישור
      link.clicks.push({ ipAddress, targetParamValue });
      await link.save();

      // הפניה לכתובת המקורית
      res.redirect(link.originalUrl);
    } catch (error) {
      console.error("Error during redirect:", error);
      res.status(500).json({ message: "Error during redirect", error: error.message });
    }
  },
};

export default RedirectController;
