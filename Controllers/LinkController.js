import Link from "../Models/Link.js";

const LinkController = {
  // שליפת קישור לפי מזהה ובדיקה אם פעיל
  getLinkById: async (id) => {
    try {
      const link = await Link.findOne({ _id: id, isActive: true });
      return link;
    } catch (error) {
      console.error("Error fetching link by ID:", error);
      throw new Error("Error fetching link");
    }
  },

  // הוספת קליק חדש לקישור
  addClick: async (link, ipAddress, targetParamValue) => {
    try {
      link.clicks.push({ ipAddress, targetParamValue });
      await link.save();
    } catch (error) {
      console.error("Error adding click:", error);
      throw new Error("Error adding click");
    }
  },
};

export default LinkController;
